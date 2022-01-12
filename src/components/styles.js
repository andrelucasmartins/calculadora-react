import styled from "styled-components";
import { darken } from 'polished'

const DisplayStyle = styled.div`
  grid-column: span 4;
  background-color: #0004;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
  font-size: 1.4em;
  overflow: hidden;
`

const ButtonStyle = styled.button`
  font-size: 1.4rem;
  background-color: var(--bg-button);
  border: none;
  border-right: var(--border-button);
  border-bottom: var(--border-button);
  outline: none;
  margin: 5px;
  padding: 5px;
  border-radius: 3px;
  display: block;
  transition: background-color 0.3s;
  
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  &:active {
    box-shadow: none;
    background-color: #ccc;
  }

  &.double {
    grid-column: span 2;
  }

  &.triple {
    grid-column: span 3;
  }

  &.operation {
    background-color: var(--orange);
    color: #FFF;
    
  }

  &.operation:active {
    background-color: ${darken(0.06, '#e76f51')};
  }
`

export {
  DisplayStyle,
  ButtonStyle
}