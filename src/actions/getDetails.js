export const getData =(name)=>{
    return (dispatch) => {
    fetch(`http://api.github.com/users/${name}`)
      .then(response => response.json())
      .then(data => dispatch(getUser(data)))
    }
}



export const getUser=(data) => {
    return{
        type:"GET_DATA", 
        payload : data
    }
}
    