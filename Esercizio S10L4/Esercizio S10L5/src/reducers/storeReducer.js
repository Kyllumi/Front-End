export default function storeReducer(state = [], action) {


    switch (action.type) {
        case 'ADD_COMPANY':
            console.log(state, action);
            return [...state, action.payload]

        case 'REMOVE_COMPANY':
            return state.filter(c => c.company_name !== action.payload.company_name)

        default:
            break;
    }

    return state;
}