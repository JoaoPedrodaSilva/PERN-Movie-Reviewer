require("dotenv").config()
const cors = require("cors")
const db = require("./db")
const express = require("express")

const app = express()

//midlleware that prevents CORS error due the different ports of server and client
app.use(cors())

//buitin express middleware that attaches the posted object to the body of the request
app.use(express.json())

//get all movies
app.get('/api/movies', async (_, res) => {
    try {
        const allMovies = await db.query("SELECT * FROM movie")

        res.json({
            status: "success",
            results: allMovies.rows.length,
            movies: allMovies.rows
        })
    } catch (error) {
        console.log(error)
    }
})

//get individual movie
app.get('/api/movies/:id', async (req, res) => {
    try {
        const movie = await db.query("SELECT * FROM movie WHERE movie_id = $1", [req.params.id])

        res.json({
            status: "success",
            movie: movie.rows[0]
        })
    } catch (error) {
        console.log(error)
    }
})


const port = process.env.PORT
app.listen(port || 3000, () => {
    console.log(`server has started on port ${port}`)
})


