import styled from "styled-components";

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

  &:active {
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
    filter: brightness(0.8);
  }
`

export {
  DisplayStyle,
  ButtonStyle
}