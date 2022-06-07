// import {legacy_createStore} from "redux"
// import { Reducer } from "../Redux/Reducer"
// let initialState={count:0}
// export const store=legacy_createStore(Reducer,initialState)
import {legacy_createStore} from "redux"
import {reducer} from "../Redux/Reducer"
let initialState={count:0}
export const store =legacy_createStore(reducer,initialState)