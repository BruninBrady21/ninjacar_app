import React from "react";
import styled from "styled-components";
import type { Car } from "../types/types";
import { FaTrash, FaPen } from 'react-icons/fa';

interface CarListProps {
  cars: Car[];
  onRemoveCar: (id: number) => void;
  onEditCar: (car: Car) => void;
}

const List = styled.ul`
  list-style: none;
  padding: 0;
  width: 50vw;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  border: 1.5px solid #009739;
  padding: 10px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #131313;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const Button = styled.button<{ variant?: "danger" | "secondary" }>`
  padding: 5px 10px;
  font-size: 14px;
  background-color: ${({ variant }) => (variant === "secondary" ? "#6c757d" : "#dc3545")};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    background-color: ${({ variant }) => (variant === "secondary" ? "#b9c305" : "#7e0d19")};
  }
`;

const CarInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`;

const CarList: React.FC<CarListProps> = ({ cars, onRemoveCar, onEditCar }) => {
  return (
    <List>
      {cars.map((car) => (
        <ListItem key={car.id}>
          <CarInfo>
            <span><strong>{car.marca}</strong> - {car.modelo} ({car.ano}) | {car.placa}</span>
            <small>Cor: {car.cor}</small>
          </CarInfo>
          <ActionGroup>
            <Button type="button" variant="secondary" onClick={() => onEditCar(car)}>
              <FaPen /> Editar
            </Button>
            <Button type="button" variant="danger" onClick={() => onRemoveCar(car.id)}>
              <FaTrash /> Remover
            </Button>
          </ActionGroup>
        </ListItem>
      ))}
    </List>
  );
};

export default CarList;