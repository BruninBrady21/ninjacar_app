import styled from 'styled-components';

const FilterButton = styled.button`
  background: #2d2d2d;
  color: white;
  border: none;
  padding: 12px 18px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.2s ease;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.59);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 18px rgba(152, 173, 157, 0.35);
  }

  &:active {
    transform: translateY(0);
  }

  &:hover {
    background: #505050;
  }
`;

const ClearButton = styled.button`
  background: transparent;
  border: 1px solid #888;
  color: #333;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.95rem;

  &:hover {
    background: #e5e5e5;
  }
`;

export { FilterButton, ClearButton };