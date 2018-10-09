const initState = {
    typed: "",
    user: {}
}



const rootReducer =(state= initState, action) => {
    switch(action.type){
        case "GET_DATA":
        return{
            ...state,
            user: action.payload

        }
        case "CHANGE_NAME":
        return{
            typed: action.payload
        }
    }

}

export default rootReducer;