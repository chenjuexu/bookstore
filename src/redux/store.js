import { createStore, combineReducers, applyMiddleware } from 'redux'
import { books } from './reducers'
import {books as booksdata} from '../data'

const logger = store => next => action => {
    let result
    console.groupCollapsed("dispatching", action.type)
    console.log('prev state', store.getState())
    console.log('action', action)
    result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    return result
}

const saver = store => next => action => {
    let result = next(action)
    localStorage['bookstore13022021'] = JSON.stringify(store.getState())
    return result
}

const storeFactory = (initialState=booksdata) =>
    applyMiddleware(logger, saver)(createStore)(
        books,
        (localStorage['bookstore13022021']) ?
            JSON.parse(localStorage['bookstore13022021']) :
            initialState
    )

export default storeFactory