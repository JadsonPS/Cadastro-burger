import React,{ useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Button from '../../components/Button';
/* import { IMG, H1, Div, DadosPedido, Container, Pedido, Nome, ButtonDelete, Button } from './Pstyles.js'; */
import { IMG, H1, Div, DadosPedido, Container, Pedido, Nome, ButtonDelete } from './Pstyles.js';


import Pacote from '../../assets/pacote.svg';
import Lixo from '../../assets/Lixo.svg';




function Pedidos(){
  const [pedidos, setPedidos] = useState([]);  
  const navigate = useNavigate();  


  
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("https://3b660893-2fe4-40b8-b899-b8e2086a3c88-00-3vkejfng5atiw.global.replit.dev/users");
      setPedidos(data)
    }
    fetchData();

  }, []); 

 
  
  async function deletePedido(id){
    /* console.log(id); */
    await axios.delete(`https://3b660893-2fe4-40b8-b899-b8e2086a3c88-00-3vkejfng5atiw.global.replit.dev/users/${id}`)
    const newLista = pedidos.filter((item) => item.id !== id);
    setPedidos(newLista);
  }


  
  function voltar(){
    navigate("/")
  }


  
  return(
    <main>
        <Container>
            <IMG alt="Logo Burger" src={Pacote}/>
            <H1>Pedidos</H1>
            <ul> 
              {pedidos.map((orders) => (
                <li key={orders.id}>
  
                  <Div>
                    <DadosPedido>
                      <Pedido>{orders.age}</Pedido>
                      <Nome>{orders.name}</Nome>
                    </DadosPedido>
  
                    <ButtonDelete onClick={() => deletePedido(orders.id)}>
                      <img alt="inconde de delete" src={Lixo}/>
                    </ButtonDelete> 
                  </Div>
                </li>
              ))}
            </ul> 
            <Button isBlack={true} onClick={voltar}>Voltar</Button>  
        </Container>
    </main>   
  )
}

export default Pedidos;