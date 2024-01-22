import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Title from '../../components/Title/index.jsx';
import Button from '../../components/Button/index.jsx';
/* import { IMG, H1, Container, InputLabel, Input, Button } from './Cstyles.js'; */
import { IMG, Container, InputLabel, Input, } from './Cstyles.js';

import Logo from '../../assets/burger.svg';


function Cadastro(){
  const [pedidos, setPedidos] = useState([]);  
  /* const [order, setOrder] = useState()
  const [name, setName] = useState() */
  const inputOrder = useRef();
  const inputName = useRef();
  const navigate = useNavigate();
  

  /* const pedidos = [
    {id: Math.random(), nome: 'Jadson', pedido: 'Hamburguer'},
    {id: Math.random(), nome: 'Pedro', pedido: '1 X-Hamburguer'},
  ] */


  
  async function addNewOrder(){
    
    /* console.log(pedidos); */
    /* pedidos.push({id: Math.random(), nome: 'Jadson', pedido: 'Hamburguer'},); */

    /* setPedidos([...pedidos, {id: Math.random(), nome: inputName.current.value, pedido: inputOrder.current.value},]) */
    
    
    if(inputName.current.value == '' || inputOrder.current.value == ''){
      
      
      console.log("vazio")
    } else {
      const { data } = await axios.post("https://3b660893-2fe4-40b8-b899-b8e2086a3c88-00-3vkejfng5atiw.global.replit.dev/users",       { name: inputName.current.value, age: inputOrder.current.value})
      
      setPedidos([...pedidos, data]); 
      navigate("/pedidos")
    }


    
    
    
   
   /*  const { data } = await axios.get("https://3b660893-2fe4-40b8-b899-b8e2086a3c88-00-3vkejfng5atiw.global.replit.dev/users");
    
    setPedidos(data) */
  }


  
  /* HooKs useEffecte = O useEffect é um efeito colateral que é chamado em duas situações, primeira é quando a tela inicia e a segunda é quando um stado que está no array de dependencia do useEffecte é alterado */
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("https://3b660893-2fe4-40b8-b899-b8e2086a3c88-00-3vkejfng5atiw.global.replit.dev/users");
      setPedidos(data)
    }
     fetchData(); 
     /* console.log("=========UseEffect foi chamado=========") */
  }, [pedidos]);

  

 /*  function inputOrder(e){
    setOrder(e.target.value);
  }
  
  function inputName(e){
    setName(e.target.value);
  } */
  

  
  return(
    <main>
        <Container>
            <IMG alt="Logo Burger" src={Logo}/>
            <Title>Faça seu pedido!</Title>  
             {/* <H1>Faça seu pedido!</H1>  */}
            <InputLabel>Pedido</InputLabel>
            <Input ref={inputOrder} placeholder="Ex.: 1 Coca-Cola, 1-X Salada" />
            <InputLabel>Nome do Cliente</InputLabel>
            <Input ref={inputName} placeholder="Ex.: Jadson P."/>
            <Button isBlack={false} onClick={addNewOrder}>Novo Pedido</Button>            
        </Container>
    </main>   
  )
}

export default Cadastro;