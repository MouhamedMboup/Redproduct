import React, { useEffect, ReactNode } from 'react';
import styled from 'styled-components';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
}

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  min-width: 300px;
  position: relative;
box-sizing: border-box;
width: 766px;
height: 800px;;
border: 1.32343px solid #DDDDDD;
border-radius: 11px;

`;

const CloseButton = styled.button`
  position: relative;
  top: 27px;
  left: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;



const Modal: React.FC<ModalProps> = ({ show, onClose, children }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!show) {
    return null;
  }

  return (
    <ModalBackground onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 12.5H5" stroke="#555555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 19.5L5 12.5L12 5.5" stroke="#555555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </CloseButton>
        {children}
       
      </ModalContent>
    </ModalBackground>
  );
};

export default Modal;