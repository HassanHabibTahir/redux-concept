// let newState = JSON.parse(JSON.stringify(state));
import TodoAction from '../Actions/todoAction'
function Todo(state={
   isloading:false,
   isError:false,
   errorMassage:"",
   successMessage:"",
   todos:[]
   

},action){
switch(action.type){

    case TodoAction.GET_TODO:
    return{
        
        ...state,
           isloading:true,
        //    payload:action.payload
    
    }

    case TodoAction.GET_TODO_SUCCESSFUL:
    return{
        ...state,
      isloading:false,
      todos:action.data
    }

    case TodoAction.GET_TODO_FAILED:
        return{
            ...state,
           isloading:false
        }
 default :
 return state


}


}

export default Todo;