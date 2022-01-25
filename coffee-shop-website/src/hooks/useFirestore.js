import { useReducer, useEffect, useState } from "react";
import { projectStorage, projectFirestore } from '../firebase/config'

let initialState = {
    document: null,
    isPending: false,
    error: null,
    success: null
}

const firestoreReducer = (state, action) => {
    switch (action.type) {
        case 'IS_PENDING':
            return { document: null, isPending: true, error: null, success: false }
        case 'ADDED_DOCUMENT':
            return { isPending: false, document: action.payload, success: true, error: null }
        case 'ERROR':
            return { isPending: false, error: action.payload, success: false, document: null }

        default:
            return state
    }
}

export const useFirestore = (collection) => {
    const [response, dispatch] = useReducer(firestoreReducer, initialState)
    const [isCancelled, setIsCancelled] = useState(false)


    // collection ref

    const ref = projectFirestore.collection(collection)

    // only dispatch if not cancelled
    const dispatchIfNotCancelled = (action) => {
        if (!isCancelled) {
            dispatch(action)
        }
    }

    // add doc
    const addDocument = async (doc, resume) => {
        dispatch({ type: 'IS_PENDING' })

        try {
            // upload resume
            const uploadPath = `resumes/${doc.uid}/${resume.name}`
            const file = await projectStorage.ref(uploadPath).put(resume.resume)
            const resumeURL = await file.ref.getDownloadURL()
    
            const addedDocument = await ref.add({...doc, resumeURL})

            dispatchIfNotCancelled({ type: 'ADDED_DOCUMENT', payload: { ...addedDocument } })
        }
        catch (err) {
            dispatchIfNotCancelled({ type: 'ERROR', payload: err.message })
            console.log(err.message)
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return { addDocument, response }
}