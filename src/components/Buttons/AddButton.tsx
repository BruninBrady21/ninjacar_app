import styled from "styled-components";

const AddButton = styled.button`
  background: linear-gradient(135deg, #34c759, #28a745);
  color: white;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  padding: 14px 22px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 10px rgba(40, 167, 69, 0.25);
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 18px rgba(40, 167, 69, 0.35);
  }

  &:active {
    transform: translateY(0);
  }
`;

export default AddButton;