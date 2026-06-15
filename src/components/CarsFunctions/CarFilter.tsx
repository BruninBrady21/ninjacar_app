import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import type { Car } from '../../types/types';
import { FaFilter } from 'react-icons/fa';
import { FilterButton, ClearButton } from '../Buttons/FilterButton';

const FilterWrapper = styled.div`
  position: relative;
`;

const DropdownPanel = styled.div<{ open: boolean }>`
  margin-top: 12px;
  padding: 10px;
  border-radius: 12px;
  background-color: #B0DAA6; /* cor de fundo do painel de filtros */
  border: 1px solid #dcdcdc;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
  display: ${({ open }) => (open ? 'block' : 'none')};
`;

const Section = styled.div`
  margin-bottom: 18px;
`;

const SectionTitle = styled.div`
  font-weight: 700;
  margin-bottom: 10px;
  color: #333;
`;

const OptionList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  color: #333; /* cor do texto dos itens */
`;

const OptionItem = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 5px 12px;
  border-radius: 100px;
  background: #D2EACC; /* cor de fundo das opções de filtro */ 
  border: 1px solid #d8d8d8;
  cursor: pointer;
  user-select: none;
  font-size: 0.9rem;
`;

type Filter = {
  marcas: string[];
  modelos: string[];
  anos: number[];
};

interface Props {
  cars: Car[];
  onChange: (filter: Filter) => void;
}

function uniqueStrings(values: string[]) {
  return Array.from(new Set(values)).filter(Boolean).sort();
}

const CarFilter: React.FC<Props> = ({ cars, onChange }) => {
  const marcas = useMemo(() => uniqueStrings(cars.map((c) => c.marca)), [cars]);
  const modelos = useMemo(() => uniqueStrings(cars.map((c) => c.modelo)), [cars]);
  const anos = useMemo(
    () => Array.from(new Set(cars.map((c) => c.ano))).sort((a, b) => a - b),
    [cars]
  );

  const [isOpen, setIsOpen] = useState(false);
  const [selectedMarcas, setSelectedMarcas] = useState<string[]>([]);
  const [selectedModelos, setSelectedModelos] = useState<string[]>([]);
  const [selectedAnos, setSelectedAnos] = useState<number[]>([]);

  const toggle = <T,>(arr: T[], value: T) => {
    return arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];
  };

  const handleMarca = (marca: string) => {
    const next = toggle(selectedMarcas, marca);
    setSelectedMarcas(next);
    onChange({ marcas: next, modelos: selectedModelos, anos: selectedAnos });
  };

  const handleModelo = (modelo: string) => {
    const next = toggle(selectedModelos, modelo);
    setSelectedModelos(next);
    onChange({ marcas: selectedMarcas, modelos: next, anos: selectedAnos });
  };

  const handleAno = (ano: number) => {
    const next = toggle(selectedAnos, ano);
    setSelectedAnos(next);
    onChange({ marcas: selectedMarcas, modelos: selectedModelos, anos: next });
  };

  const clearAll = () => {
    setSelectedMarcas([]);
    setSelectedModelos([]);
    setSelectedAnos([]);
    onChange({ marcas: [], modelos: [], anos: [] });
  };

  return (
    <FilterWrapper>
      <FilterButton type="button" onClick={() => setIsOpen((prev) => !prev)}>
        <FaFilter /> Filtrar
      </FilterButton>
      <DropdownPanel open={isOpen}>
        <Section>
          <SectionTitle>Marca</SectionTitle>
          <OptionList>
            {marcas.map((marca) => (
              <OptionItem key={marca}>
                <input
                  type="checkbox"
                  checked={selectedMarcas.includes(marca)}
                  onChange={() => handleMarca(marca)}
                />
                {marca}
              </OptionItem>
            ))}
          </OptionList>
        </Section>
        <Section>
          <SectionTitle>Modelo</SectionTitle>
          <OptionList>
            {modelos.map((modelo) => (
              <OptionItem key={modelo}>
                <input
                  type="checkbox"
                  checked={selectedModelos.includes(modelo)}
                  onChange={() => handleModelo(modelo)}
                />
                {modelo}
              </OptionItem>
            ))}
          </OptionList>
        </Section>
        <Section>
          <SectionTitle>Ano</SectionTitle>
          <OptionList>
            {anos.map((ano) => (
              <OptionItem key={ano}>
                <input
                  type="checkbox"
                  checked={selectedAnos.includes(ano)}
                  onChange={() => handleAno(ano)}
                />
                {ano}
              </OptionItem>
            ))}
          </OptionList>
        </Section>
        <ClearButton type="button" onClick={clearAll}>
          Limpar filtros
        </ClearButton>
      </DropdownPanel>
    </FilterWrapper>
  );
};

export default CarFilter;
