import React from "react";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import type { Car } from "../types/types";

interface AddCarProps {
  onAddCar: (car: Omit<Car, 'id'>) => void;
}

type CarFormValues = Omit<Car, 'id' | 'ano'> & {
  ano: string;
};

const StyledForm = styled(Form)`
  display: grid;
  gap: 12px;
  width: 50vw;
  margin-bottom: 20px;
`;

const Input = styled(Field)`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
`;

const ErrorText = styled.div`
  color: #d32f2f;
  font-size: 12px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #218838;
  }
`;

const AddNewCar: React.FC<AddCarProps> = ({ onAddCar }) => (
 <Formik
    initialValues={{
      modelo: "",
      marca: "",
      placa: "",
      cor: "",
      ano: "",
    }}
    validate={(values: CarFormValues) => {
      const errors: Partial<Record<keyof CarFormValues, string>> = {};

      if (!values.modelo) {
        errors.modelo = "Modelo é obrigatório";
      }
      if (!values.marca) {
        errors.marca = "Marca é obrigatória";
      }
      if (!values.placa) {
        errors.placa = "Placa é obrigatória";
      }
      if (!values.cor) {
        errors.cor = "Cor é obrigatória";
      }
      if (!values.ano) {
        errors.ano = "Ano é obrigatório";
      } else if (!/^[0-9]{4}$/.test(values.ano)) {
        errors.ano = "Ano deve ter 4 dígitos";
      }

      return errors;
    }}
 onSubmit={(values, { resetForm }) => {
 onAddCar({
 modelo: values.modelo,
 marca: values.marca,
 placa: values.placa,
 cor: values.cor,
 ano: Number(values.ano),
 });
 resetForm();
 }}
 >
    {({ values, setFieldValue }) => (
      <StyledForm>
        <Label>
          Modelo
          <Input name="modelo" placeholder="Modelo" />
          <ErrorMessage name="modelo" component={ErrorText} />
        </Label>

        <Label>
          Marca
          <Input name="marca" placeholder="Marca" />
          <ErrorMessage name="marca" component={ErrorText} />
        </Label>

        <Label>
          Placa
          <Input name="placa" placeholder="Placa" />
          <ErrorMessage name="placa" component={ErrorText} />
        </Label>

        <Label>
          Cor
          <Input name="cor" placeholder="Cor" />
          <ErrorMessage name="cor" component={ErrorText} />
        </Label>

        <Label>
          Ano
          <Input
            name="ano"
            placeholder="Ano"
            type="number"
            inputMode="numeric"
            onInput={(e: React.FormEvent<HTMLInputElement>) => {
              const value = e.currentTarget.value.replace(/\D/g, "");
              setFieldValue("ano", value);
            }}
          />
        </Label>

        <Button type="submit">Adicionar Carro</Button>
      </StyledForm>
    )}
  </Formik>
);

export default AddNewCar;
