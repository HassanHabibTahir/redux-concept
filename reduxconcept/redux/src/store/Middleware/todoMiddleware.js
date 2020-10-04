import TodoAction from "../Actions/todoAction"
// first Concept
//middleware id between request and responce
//jb bi request ati hai to responce se pehly middleware  
//request ko bolta hai and tehqeeq kerta hai

//SecondConcept
// ager hmm ne api se data  ko mangwaya hai and us ke bad hm directly to nahe  
// reducer ko send  kerty action jb tk data  he  na ay jb data ay ga to wo reduse
// ke pass chala jay ga to is liy hm middleware  use  kerty hen


// thirdConcept
//we use action in middleware  or call the function in action in miidleware

class TodoMiddleware{

    static getTodo(data){
            //also get data
    //   return  TodoAction.getTodo(data)

    return (dispatch)=>{ 
           dispatch(TodoAction.getTodo(data))
        
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then(json =>
         
        dispatch(TodoAction.getTodoSuccessful({
            todos:json
        }))
        )
    .catch(err=>{
        console.log(err)
    })

}
       
    }
}
export default TodoMiddleware
