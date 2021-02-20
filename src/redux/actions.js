import C from './constants'
import { v4 as uuidv4 } from 'uuid';

export const addBook = (name,category,introduction,price) =>
    ({
        type: C.ADD_BOOK,
        id:uuidv4(),
    name,
    price,
        category,
        introduction
        
    })

export const deleteBook = id =>
    ({
        type: C.DELETE_BOOK,
        id
    })

export const editeBook = (id,name,price,category,introduction) =>
    ({
        type: C.EDITE_BOOK,
        id,
        name,price,category,introduction
    })