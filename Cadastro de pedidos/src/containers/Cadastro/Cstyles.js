import styled from 'styled-components';


export const Container = styled.div `
  width: 414px;
  height: 896px;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: #0a0a10;
  color: white;
  padding:  11px 20px 51px;

`


export const IMG = styled.img `
  width: 342px;
  height: 354px;
`


export const H1 = styled.h1 `
  margin-top: 25px;
  color: #ffffff;

  font-size: 28px;
  font-weight: 700;
  line-height: 33px;

  text-align: center;
`


export const InputLabel = styled.p `
  width: 100%;
  margin-left: 30px;
  margin-top: 42px;
  color: #EEEEEE;

  text-align: start;

  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; 
`


export const Input = styled.input `
  width: 100%; 
  display: flex;
  padding: 19px 13px 18px 15px;
  align-items: center;
  border: none;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.25);

  color: #FFF;

  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  /* outline-style: none; */
  /* outline-color: #ff5959; */
`

/* 
export const Button = styled.button `
  display: flex;
  
  width: 100%;
  height: 68px;
  padding: 0px 113px;
  margin-top: 72px;

  justify-content: center;
  align-items: center;
  background: #D93856;
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
    background: #D93856;
    opacity: 1;
  }

  &:active {
    background: #57d938;
  }
` */