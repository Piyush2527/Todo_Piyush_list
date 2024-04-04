import "./App.css";
import Footer from "./MyComponent/Footer";
import Heade from "./MyComponent/Header";
import {Todos} from "./MyComponent/Todos";
import React,{useState} from "react";
import AddTodo from "./MyComponent/AddTodo";
import { BrowserRouter as Router,
Switch,
Route,
Link
} from "react-router-dom";

function App() {
  const onDelete=(todo2)=>{
    console.log("delete",{todo2})

    // let index = todos.indexof(todo2);
    // todos.splice(index,1);

    setTodos(todos.filter( (e)=>{
      return  e!==todo2;
    }) )
  }

  const addTodom=(title,desc)=>{
    let sno;
    if(todos.length===0){
      sno = 0;
    }
    else{
      sno = todos[todos.length-1].sno+1;
    }
    const mytodo={
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos,mytodo ]);
  }
  const [todos,setTodos]= useState([
    {
      sno: 1,
      title:"title 1",
      desc:"description 1"
    }
  ] ) ;

  return (
    <>
    <Router>
      <Heade heading="Main-Menu" data={false} />
      
      
      <Switch>
          <Route path="/" render={()=>{
            return(
              <>
              <AddTodo addTodo={addTodom}/>
              <Todos todoss={todos} onDelete={onDelete }/>
              </>
            )
          }}>
            {/* <Home /> */}
          </Route>
          <Route path="/about">
            {/* <About /> */}
          </Route>
          
      </Switch>

      <Footer/>
    </Router>
    </>
  );
}

export default App;
