export const createEvent = (event) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('events').add({
            ...event,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_EVENT', event });
        }).catch((err) => {
            dispatch({ type: 'CREATE_EVENT_ERROR', err })
        })
    }
}

export const updateEvent = (event) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        console.log('event', event)
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('events').doc(event.id).update({
            ...event,
            name: event.name,
            description: event.description,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'UPDATE_EVENT', event });
        }).catch((err) => {
            dispatch({ type: 'UPDATE_EVENT_ERROR', err })
        })
    }
}