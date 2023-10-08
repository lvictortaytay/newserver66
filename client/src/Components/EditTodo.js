import React , {Fragment , useState} from "react"

const EditTodo = ({todo}) => {

    const [description , setDescription] = useState(todo.description)



    const handleUpdate = async (e) => {
        try {
            e.preventDefault()
            const body = {description}
            const response = await fetch(`https://newserver5-d7giopbu7-lvictors-projects.vercel.app/todos/${todo.todo_id}` , {
              "mode" :"no-cors",
                "method" : "PUT",
                "headers" : {"Content-Type" : "application/json"},
                "body" : JSON.stringify(body)
            })
            window.location = "/"
        } catch (error) {
            console.error(error.message)
        }
    }
    return (

        <Fragment>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target={`#id${todo.todo_id}`}>Edit</button>


<div class="modal fade" id={`id${todo.todo_id}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Edit Todo</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <input type = "text" className = "form-control" value = {description} onChange={(e) => setDescription(`${e.target.value}`)}/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={() => setDescription(todo.description)}>Close</button>
        <button type="button" class="btn btn-primary" onClick = {e => handleUpdate(e)}>Save changes</button>
      </div>
    </div>
  </div>
</div>
        </Fragment>

    )
}


export default EditTodo;