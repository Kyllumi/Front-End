export const removeCompany = (data) => {
    return { type: 'REMOVE_COMPANY' , payload: data }
}

export const addCompany = (data) => {
    return { type: 'ADD_COMPANY' , payload: data }
}