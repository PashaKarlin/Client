import {createStore} from 'react-redux'
import Reducer from './reducer';

let store = createStore(Reducer)

export default store;