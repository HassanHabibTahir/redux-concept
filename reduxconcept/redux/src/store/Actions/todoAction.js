class TodoAction{
    //we use static for the constant in it ,
    // we cannot use out side From the  class
 static GET_TODO=" GET_TODO"
 static GET_TODO_SUCCESSFUL="GET_TODO_SUCCESSFUL"
 static GET_TODO_FAILED="GET_TODO_FAILED"

 static getTodo(data){
    return{
        type:this.GET_TODO,
        // payload:data
    }
}
static getTodoSuccessful(data){
    return{
        type:this.GET_TODO_SUCCESSFUL,
        data:data.todos
    }
}
static getTodoFailed(data){
    return{
        type:this.GET_TODO_FAILED,
        data 
    }
}
}
export default TodoAction