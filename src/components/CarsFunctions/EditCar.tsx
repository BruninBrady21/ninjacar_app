import React from "react";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import type { Car } from "../../types/types";
import { SaveButton, CancelButton } from "../Buttons/EditButton";

interface EditCarProps {
  car: Car;
  onUpdateCar: (car: Car) => Promise<Car>;
  onCancel: () => void;
}

type CarFormValues = Omit<Car, "id" | "ano"> & {
  ano: string;
};

const StyledForm = styled(Form)`
  display: grid;
  gap: 12px;
  margin-bottom: 20px;
  background-color: #b0daa6;
  border-radius: 8px;
  width: 100%;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
  color: #202020;
`;

const ErrorText = styled.div`
  color: #d32f2f;
  font-size: 12px;
`;

const ButtonBar = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const EditCar: React.FC<EditCarProps> = ({ car, onUpdateCar, onCancel }) => (
  <Formik
    initialValues={{
      modelo: car.modelo,
      marca: car.marca,
      placa: car.placa,
      cor: car.cor,
      ano: String(car.ano),
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
    onSubmit={(values, { setSubmitting }) => {
      setSubmitting(true);

      onUpdateCar({
        ...car,
        modelo: values.modelo,
        marca: values.marca,
        placa: values.placa,
        cor: values.cor,
        ano: Number(values.ano),
      })
        .catch((error) => {
          console.error("Erro ao atualizar o carro:", error);
        })
        .finally(() => {
          setSubmitting(false);
        });
    }}
  >
    {({ values, handleChange, setFieldValue, isSubmitting }) => (
      <StyledForm>
        <Label>
          Modelo
          <Field
            as={Input}
            name="modelo"
            placeholder="Modelo"
            value={values.modelo}
            onChange={handleChange}
          />
          <ErrorMessage name="modelo" component={ErrorText} />
        </Label>

        <Label>
          Marca
          <Field
            as={Input}
            name="marca"
            placeholder="Marca"
            value={values.marca}
            onChange={handleChange}
          />
          <ErrorMessage name="marca" component={ErrorText} />
        </Label>

        <Label>
          Placa
          <Field
            as={Input}
            name="placa"
            placeholder="Placa"
            value={values.placa}
            onChange={handleChange}
          />
          <ErrorMessage name="placa" component={ErrorText} />
        </Label>

        <Label>
          Cor
          <Field
            as={Input}
            name="cor"
            placeholder="Cor"
            value={values.cor}
            onChange={handleChange}
          />
          <ErrorMessage name="cor" component={ErrorText} />
        </Label>

        <Label>
          Ano
          <Field
            as={Input}
            name="ano"
            placeholder="Ano"
            value={values.ano}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const cleaned = event.target.value.replace(/\D/g, "");
              setFieldValue("ano", cleaned);
            }}
          />
          <ErrorMessage name="ano" component={ErrorText} />
        </Label>

        <ButtonBar>
          <SaveButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Atualizando..." : "Salvar alterações"}
          </SaveButton>
          <CancelButton type="button" onClick={onCancel}>
            Cancelar
          </CancelButton>
        </ButtonBar>
      </StyledForm>
    )}
  </Formik>
);

export default EditCar;
