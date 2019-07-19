import React from "react"
import styled from "styled-components"

import Portal from "./Portal"
import { grey2 } from "../designSystem"
import Icon from "./Icon"

const Modal = ({ children, toggle, on }) => {
  return (
    <Portal id="portal">
      {on && (
        <ModalWrapper>
          <Card>
            <CloseButton onClick={toggle}>
              <Icon color="white" name="close" />
            </CloseButton>
            <h1>{children}</h1>
          </Card>
          <Background onClick={toggle} />
        </ModalWrapper>
      )}
    </Portal>
  )
}

export default Modal

const ModalWrapper = styled.div`
  z-index: 9;
  transition: all 0.3s ease-in;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100vh;
`
const Card = styled.div`
  grid-column: 2/3;
  grid-row: 1/2;
  position: relative;
  min-width: 350px;
  background-color: ${grey2};
  padding: 15px;

  box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1);
  z-index: 10;
`
const Background = styled.div`
  grid-column: 1/-1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0.5;
  height: 100%;
  background: black;
`
const CloseButton = styled.button`
  position: absolute;
  background: transparent;
  right: 20px;
  padding: 5px;

  border: none;
  top: 20px;
`
