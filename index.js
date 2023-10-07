const express = require("express")
const cors = require("cors")
const app = express()
const pool = require("./client/db")


// dotenv.config()

app.use(cors())
app.use(express.json())


//create a todo
app.post("/todos" , async (req , res) => {
    try{
        const {description} = req.body
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *" , [description])
        res.json(newTodo)
    }catch(err){
        console.error(err.message)
    }
    
 })


//get all of todos
 app.get("/todos" , async (req , res) => {
    try{
        const allTodos = await pool.query("SELECT * FROM todo")
        res.json(allTodos.rows)
    }catch(err){

    }
})

//get a particular todo
app.get("/todos/:id" , async (req , res ) => {
    try {
        const {id} = req.params
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1" , [id])
        res.json(todo.rows)
    } catch (error) {
        console.error(error.message)
    }
})


//update a todo 
app.put("/todos/:id" , async ( req , res ) => {
    try {
        const {id} = req.params
        const {description} = req.body 
        const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2" , [description , id])
        res.json("todo was updated")
    } catch (error) {
        console.error(error.message)
    }
})



//delete a todo 

app.delete("/todos/:id" , async (req , res) => {
    try {
        const {id} = req.params
        const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1" , [id])
        const completedTodo = await pool.query("SELECT * FROM todo WHERE todo_id = $1" , [id])
        console.log(completedTodo)
        res.json(`completed ${completedTodo}`)
    } catch (error) {
        console.error(error.message)
    }
})
//yes

// {
//     "version":2,
//     "builds": [
//         {
//             "src" :"./index.js",
//             "use" :"@vercel/node"
//         }
//     ],
//     "routes" :[
//         {
//             "src" : "/(.*)",
//             "dest" : "/"

//         }
//     ]
// }









// process.env.PORT

app.listen(process.env.PORT, () => {
    console.log("todo server running on port 3000")
})
