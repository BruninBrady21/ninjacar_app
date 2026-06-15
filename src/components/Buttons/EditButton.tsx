import styled from "styled-components";

const EditButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;
`;

const SaveButton = styled(EditButton)`
  background-color: #007bff;
  color: white;

  &:hover {
    background-color: #0069d9;
  }
`;

const CancelButton = styled(EditButton)`
  background-color: #6c757d;
  color: white;

  &:hover {
    background-color: #5a6268;
  }
`;

export { SaveButton, CancelButton};