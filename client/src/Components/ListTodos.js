import React , {Fragment , useEffect , useState} from "react"
import EditTodo from "./EditTodo"

const ListTodos = () => {

    const [todos , setTodos] = useState([])




    const handleTodoDelete = async (id) => {
        try {
            const deleteTodo = await fetch(`https://newserver5.vercel.app/todos/${id}`, {
                "mode" :"no-cors",
                "method" :"DELETE"
            } )

            setTodos(todos.filter(todo => todo.todo_id !== id))
        } catch (error) {
            console.error(error.message)
        }
    }

    const getTodos = async () => {
        try {
            
            const response = await fetch("https://newserver5.vercel.app/todos" , {
                "mode" :"no-cors"
            })
            const jsonData = await response.json()
            setTodos(jsonData)


        } catch (error) {
            // console.error(error.message)
        }
    }



    useEffect(() => {
        getTodos()
        
    }, [])

    console.log(todos)

    return (
        <Fragment>
            <table className="table mt-5 text-center">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">description</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {/* <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr> */}


    {todos.map( todo => (
        <tr key={todo.todo_id}>
            <td>{todo.todo_id}</td>
            <td>{todo.description}</td>
            <td><EditTodo todo = {todo}/></td>
            <td><button className = "btn btn-danger" onClick={() => handleTodoDelete(todo.todo_id)}>Delete</button></td>
        </tr>
    ))}
  </tbody>
</table>
        </Fragment>
    )
}


export default ListTodos;



// {
//     "dependencies": {
//       "cors": "^2.8.5",
//       "pg": "^8.11.3"
//     }
//   }
  


//use elephant sql ( adjust connection to database in source code)