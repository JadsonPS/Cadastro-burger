import styled from 'styled-components';


export const Container = styled.div `
  width: 414px;
  /* height: 896px; */
  heiht: 100%;
  min-height: 100vh;
  
  display: flex;
  flex-direction: column;
  align-items: center;

  background: #0a0a10;
  color: white;
  padding:  11px 20px 51px;



`


export const IMG = styled.img `
  width: 246px;
  height: 354px;
`


export const H1 = styled.h1 `
  margin-top: 25px;
  margin-bottom: 47px;
  color: #ffffff;

  font-size: 28px;
  font-weight: 700;
  line-height: 33px;

  text-align: center;
`

export const Div = styled.div `

  
  min-width: 250px; 
  max-width: 400px;  
  min-height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 17px 27px; 
  margin-bottom: 18px;

  border-radius: 15px;
  background: rgba(255, 255, 255, 0.25);

  gap: 20px;
`







/*================================================== */

export const DadosPedido = styled.div `
  width: 100%;
  heigth: 100%;

  display: flex;
  flex-direction: column;
  gap: 8px;
`


export const Pedido = styled.p `
  width: 100%;

  color: #FFF;

  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`


export const Nome = styled.p `
  color: #FFF;

  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`


export const ButtonDelete = styled.button `
  width: 24px;
  height: 28px;

  background: transparent;
  border: none;
  cursor: pointer;

  &:active {
    background: #57d938;
    border-radius: 5px;
  }
  }
`
/*================================================== */



/* 
export const Button = styled.button `
  display: flex;
  
  width: 100%;
  height: 68px;
  padding: 0px 113px;
  margin-top: 72px;

  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.14);
  opacity: 0.9;
  cursor: pointer;

  color: #FFF;

  text-align: center;
  font-size: 17px;
  font-style: normal;
  font-weight: 900;
  line-height: 2.5px; 

  border: none;
  border-radius: 14px;

  &:hover {
    background: rgba(255, 255, 255, 0.14);
    opacity: 1;
  }

  &:active {
    background: #57d938;
  }
` */