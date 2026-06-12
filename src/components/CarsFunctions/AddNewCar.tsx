import React from "react";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import type { Car } from "../../types/types";
import type { FormikHelpers } from "formik";

interface AddCarProps {
  onAddCar: (car: Omit<Car, 'id'>) => Promise<Car>;
}

type CarFormValues = Omit<Car, 'id' | 'ano'> & {
  ano: string;
};

const StyledForm = styled(Form)`
  display: grid;
  gap: 12px;
  margin-bottom: 20px;
  background-color: #B0DAA6;
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
    onSubmit={(values, { resetForm, setSubmitting }: FormikHelpers<CarFormValues>) => {
      setSubmitting(true);

      onAddCar({
        modelo: values.modelo,
        marca: values.marca,
        placa: values.placa,
        cor: values.cor,
        ano: Number(values.ano),
      })
        .then(() => {
          resetForm();
        })
        .catch((error) => {
          console.error("Erro ao salvar o carro:", error);
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
            placeholder="Informe o modelo do carro."
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
            placeholder="Informe a marca do carro."
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
            placeholder="Informe a placa do carro."
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
            placeholder="Informe a cor do carro."
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
            placeholder="Informe o ano do carro."
            value={values.ano}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const cleaned = event.target.value.replace(/\D/g, "");
              setFieldValue("ano", cleaned);
            }}
          />
          <ErrorMessage name="ano" component={ErrorText} />
        </Label>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Salvando..." : "Adicionar Carro"}
        </Button>
      </StyledForm>
    )}
  </Formik>
);

export default AddNewCar;
