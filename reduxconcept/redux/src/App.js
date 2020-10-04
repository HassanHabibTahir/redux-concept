import React, { Component } from 'react';
import Store from './store/store';
import  {connect} from 'react-redux';
import TodoAction from './store/Actions/todoAction'; 
import TodoMiddleware from './store/Middleware/todoMiddleware';
import Hook from './component/hooks'
// console.log(Store.getState())

// function UpdateTodo() {
//   return{
//     type:"ADD_TODO",
    
//   } 
  
//  }  


class App extends Component {

  state={
    todos:[]
  }
componentDidMount(){
// document.title="App"
// this.props.getTodo()
  //  console.log(Store.getState())
//  this.props.getTodo({name:"hassanHabibTahir "});
  // this.props.updateTodo({name:"hassan Habib",password:123})
}
componentDidUpdate(){

}
  componentWillReceiveProps(nextProps){
    // console.log(nextProps)
    this.setState({
      todos:nextProps.todos
    })
  }
  
//   getDerivedStateFromProps(state,props){
// console.log(props)
//   }
  
  render() {
  const{todos}= this.state
     return(
     <div  >
<Hook/>
{/* <h1>Hellow word</h1>  */}
      <ul>


        {todos.length&&todos.map((todo,index)=>{
        return(<li key={index} >{todo.id} ----> {todo.title}</li>)
      })}
      </ul>  
     </div>
      )

    // return (
    //   <div className="App">
    //     {/* {this.props.Todo} */}
    //         {/* <button onClick={this.props.onIncreamentAdd} >add</button> */}
    //   </div>
    // );
  }
}

function mapStateToProsp(state){

  return({
         todos:state.Todo.todos  ,
    // data:state.Todo.payload2, 
  // isloading:state.Todo.isloading,
  //  isError:state.Todo.isError,
  //  errorMassage:state.Todo.errorMassage,
  // successMessage:state.Todo.successMessage
  })

}
//dispatch alwayes returen a Object and
// not return function or  other  method
function mapDispatchToProps(dispatch){

  return{

    GetRegister:(data)=>dispatch(TodoMiddleware.getTodo(data))
}

}

export default connect(mapStateToProsp,mapDispatchToProps) (App);
// export default App;
                  //  1 dispatch action ly kr jata hai
                  //  2 reducer ke ander condition ke oper chaltaa hai
                  //
//component--->action-->reducer-->store--->compo