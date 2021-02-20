import C from './constants'

export const book = (state = {}, action) => {
    switch (action.type) {
        case C.ADD_BOOK:
            return {
                id: action.id,
                name: action.name,
                category: action.category,
                introduction: action.introduction,
                price: action.price
            }
        case C.DELETE_BOOK:
            return (state.id !== action.id) ?
                state : null
        case C.EDITE_BOOK:
                    return (state.id !== action.id) ?
                        state :
                        {
                            ...state,
                            name: action.name,
                            category: action.category,
                            introduction: action.introduction,
                            price: action.price
                        }
        default :
            return state
    }
}
export const books = (state = [], action) => {
    switch (action.type) {
        case C.ADD_BOOK :
            return [
                ...state,
                book({}, action)
            ]
        case C.DELETE_BOOK :
            return state.filter(
                b => b.id !== action.id
            )
        case C.EDITE_BOOK :
            return state.map(
                b =>book(b,action)
            )
        default:
            return state
    }
}