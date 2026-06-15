import React, { useState } from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #009739;
  color: #eaeaea;
  text-align: center;
  padding: 10px 0;
  width: 100%;
  font-family: 'Bahnschrift', sans-serif;
`;

const LinkButton = styled.button`
  color: #bebebe;
  background: transparent;
  border: none;
  cursor: pointer;
  font-weight: 600;
  text-decoration: underline;
  padding: 0;
  font: inherit;
  transition: color 0.2s ease;

  &:hover {
    color: #33f383;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  text-align: left;
`;

const ModalContent = styled.div`
  background: #D2EACC;
  color: #111;
  max-width: 600px;
  width: 90%;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  padding: 24px;
  position: relative;
  font-family: 'Bahnschrift', sans-serif;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const ModalTitle = styled.h2`
  margin: 0;
  font-size: 1.4rem;
  color: #111;
`;

const CloseButton = styled.button`
  border: none;
  background: transparent;
  color: #111;
  font-size: 1.2rem;
  cursor: pointer;
`;

const ModalBody = styled.div`
  color: #333;
  line-height: 1.6;
  text-align: left;
`;

const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<"privacy" | "terms" | null>(null);

  const closeModal = () => setModalType(null);

  return (
    <>
      <FooterContainer>
        <p>© 2026 NinjaCar Company. All Rights Reserved</p>
        <p>
          <LinkButton type="button" onClick={() => setModalType("privacy")}>Privacidade</LinkButton> | {" "}
          <LinkButton type="button" onClick={() => setModalType("terms")}>Termos de Serviço</LinkButton>
        </p>
      </FooterContainer>

      {modalType && (
        <ModalOverlay role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle id="modal-title">
                {modalType === "privacy" ? "Política de Privacidade" : "Termos de Serviço"}
              </ModalTitle>
              <CloseButton aria-label="Close modal" onClick={closeModal}>&times;</CloseButton>
            </ModalHeader>
            <ModalBody>
              {modalType === "privacy" ? (
                <>
                  <p>
                    Nossa política de privacidade explica como coletamos, usamos e protegemos suas informações.
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    Ao usar o NinjaCar, seus dados são tratados com respeito e segurança. Podemos coletar informações básicas para melhorar a experiência e manter o serviço seguro.
                  </p>
                  
                </>
              ) : (
                <>
                  <p>
                    Estes termos de serviço descrevem as regras de uso do NinjaCar. Ao acessar o serviço, você concorda com nossos termos.
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    Use o aplicativo de forma responsável, respeitando direitos e limites, e entenda que atualizações podem alterar essas regras.
                  </p>
                </>
              )}
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default Footer;
