import styled from 'styled-components';

export const Button = styled.button `
  display: flex;
  /* width: 342px; */
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
  line-height: 2.5px; /* 14.706% */

  border: none;
  border-radius: 14px;

  &:hover {
    background: #D93856;
    opacity: 1;
  }

  &:active {
    background: #57d938;
  }

  ${(props) => 
    props.isBlack && `
      background: rgba(255, 255, 255, 0.14);
      
      &:hover {
        background: rgba(255, 255, 255, 0.14);
        opacity: 1;
      }

      &:active {
        background: #57d938;
      }
    `
  }}
`