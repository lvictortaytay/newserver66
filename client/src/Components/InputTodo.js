import React  , {Fragment , useState} from "react"


const InputTodo = () => {
    const [description , setDescription] = useState("")


    const handleChange = (e) => {
        const {value} = e.target
        setDescription(value)
  
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const body = {description}
            const response = await fetch("http://localhost:3000/todos" , {
                "method": "POST" ,
                "headers" : {"content-type" :"application/json" },
                "body" : JSON.stringify(body)
            })
            
 
            window.location = "/"

        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <Fragment>
               <h1 className = "text-center mt-5"> PERN Todo List</h1>
               <form onSubmit = {handleSubmit} className = "d-flex mt-5">
                <input type = "text" className = "form-control" value = {description} onChange = {handleChange}/> 
                <button className = "btn btn-success">add</button>
               </form>
        </Fragment>

    )
}

export default InputTodo;