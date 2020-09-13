const NAME = 'NAME'

let initialState = {
    name: 'name'
}

const Reducer = (state = initialState, action) => {
    switch (action.type){
        case NAME:
            return {...state, name :'pasha'}
        default :
            return state;
    }
}

export const NameAC = () => ({type: NAME})

export default Reducer;