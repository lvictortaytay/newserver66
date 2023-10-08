import React  , {Fragment , useState} from "react"


const InputTodo = () => {
    const [description , setDescription] = useState("")


    const handleChange = (e) => {
        const {value} = e.target
        setDescription(`${value}`)
  
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const body = {description}
            const response = await fetch("https://newserver5.vercel.app/todos" , {
                "mode" :"no-cors",
                "method": "POST" ,
                "headers" : {"content-type" :"application/json" },
                "body" : JSON.stringify(body)
                
            })
            console.log("works")
            
 
            window.location = "/"

        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <Fragment>
            <nav className = "nav" style={{backgroundColor:"lightgrey", height:"50px" , width: "110rem" , marginLeft:"-20rem"}}>

            </nav>
               <h1 className = "text-center mt-5"> Lvictors Todo List!</h1>
               <p className = "text-center">enter a todo and submit!</p>
               <form onSubmit = {handleSubmit} className = "d-flex mt-5">
                <input type = "text" className = "form-control" value = {description} onChange = {handleChange}/> 
                <button className = "btn btn-success">add</button>
               </form>
        </Fragment>

    )
}

export default InputTodo;