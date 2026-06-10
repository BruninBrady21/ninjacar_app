import React from "react";
import styled from "styled-components";
import type { Car } from "../types/types";

interface CarListProps {
  cars: Car[];
  onRemoveCar: (id: number) => void;
}

const List = styled.ul`
  list-style: none;
  padding: 0;
  width: 50vw;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


const Button = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #c82333;
  }
`;

const CarList: React.FC<CarListProps> = ({ cars, onRemoveCar }) => {
  return (
    <List>
      {cars.map((car) => (
        <ListItem key={car.id}>
          <div>
            <strong>{car.marca}</strong> - {car.modelo} ({car.ano}) | {car.placa}
            <br />
            <small>Cor: {car.cor}</small>
          </div>
          <Button onClick={() => onRemoveCar(car.id)}>Remover</Button>
        </ListItem>
      ))}
    </List>
  );
};

export default CarList;