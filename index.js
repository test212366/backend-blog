const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const posts = [
    {
        title: 'title',
        text: 'text'
    },
    {
        title: 'title',
        text: 'text'
    },
    {
        title: 'title',
        text: 'text'
    },

]
app.get('/posts', (req, res) => {
    return res.send(posts)
})
app.get('/posts/:id', (req, res) => {
    const id = req.params.id
    return res.send(posts[id])
})

app.post('/posts', (req, res) => {
    const data = req.body
    console.log(data)
    posts.push(data)
    return res.send(posts)
})

app.listen(5555,  () => {
    console.log('123')
})