
const initState = {
    events: [
        { id: '1', title: 'Vegan Ramen', content: 'Vegan Ramen' },
        { id: '2', title: 'Salted Caramel', content: 'blah blahhh' },
        { id: '3', title: 'Vegetable Quinoa', content: 'Vegetable Quinoa...' }
    ]
}

const eventReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_EVENT':
            console.log('created event', action.event)
            return state;
        case 'CREATE_EVENT_ERROR':
            console.log('create event error', action.err)
            return state;
        default:
            return state;
    }
}

export default eventReducer