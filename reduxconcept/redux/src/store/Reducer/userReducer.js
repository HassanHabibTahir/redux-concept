// let newState = JSON.parse(JSON.stringify(state));
function User(state={
    User:"UserTodo"
    
},action){
switch(action.type){

    case "ADD_TODO":
    return{
        ...state,
        text:"TODO_ADDED"
    }

    case "DELETE_TODO":
    return{
        ...state,
        text:"TODO_DELETED"
    }
 default :
 return state


}


}

export default User;