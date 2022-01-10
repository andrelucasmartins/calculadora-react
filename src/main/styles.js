import styled from "styled-components"

const Calculador  =  styled.div`
  height: 320px;
  width: 335px;
  margin: 0 auto;
  border-radius: 5px;
  overflow: hidden;
  
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 1fr 48px 48px 48px 48px 48px;

  background-color: rgba(255, 255, 255, 0.1);
  padding: 10 px;
`

export {
  Calculador
}