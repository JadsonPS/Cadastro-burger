/* const express = require('express');
const app = express();
const port = 3000;
app.use(express.json())

app.get('/users', (request, response) => {
    console.log(request.body)

    return response.json(request.body)
})

app.listen(port, () => {
  console.log('rota okey')
}) */








/* import cors from "cors" */
const cors = require('cors'); /* o back end só permite conectar o front se o back deixar ai que endtra o Cors que faz uma liberação*/

const express = require('express');
const uuid = require('uuid')

const app = express();
const port = 3001;
app.use(express.json());
app.use(cors());/* Isso abilita que qualquer rota consiga acessar meu back end - o ideal é não habilitar o cors pra todo mundo */

const users = []




// Rota com get
app.get('/users', (request, response) => {
  return response.json(users)
})

 // Rota com post
app.post('/users', (request, response) => {
  const {name, age} = request.body
  const user = {id:uuid.v4(), name, age} 
  users.push(user)
  return response.status(201).json(user)
})



// Rota com put
app.put('/users/:id', (request, response) => {
  const {id} = request.params
  
  const {name, age} = request.body
  
  const updatedUser = {id, name, age}
  
  const index = users.findIndex( user => user.id === id)
  if(index < 0){
    return response.status(404).json({ message: "User not found"})
  }
  users[index] = updatedUser
  return response.json(updatedUser)
})



// Rota com delete
app.delete('/users/:id', (request, response) => {
  const { id } = request.params
  const index = users.findIndex(user => user.id === id)
  if(index < 0){
    return response.status(404).json({ message: "User not found"})
  }
  users.splice(index, 1)
  return response.status(204).json()
})




// definição de porta
app.listen(port, () => {
  console.log('Servidor online!')
})


/* 
const uuid = require('uuid')
const express = require('express');
const app = express();
const port = 3000;
app.use(express.json())

// array de usuario
const users = [];

// get - retornar lista de usuarios
app.get('/users', (request, response) => { 

  return response.json(users)
})

// post - cria usuario
app.post('/users', (request, response) => {
  const { name, age } = request.body
  const user = {id:uuid.v4()}
  return response.json(user)
})
 
app.listen(port, () => {
  console.log("servidor online")
})*/