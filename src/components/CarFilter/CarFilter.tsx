import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import type { Car } from '../../types/types';

const Panel = styled.div`
  margin: 16px 0;
  padding: 12px;
  border-radius: 8px;
  background: #f1f5f1;
  width: 50vw;
  box-sizing: border-box;
`;

const Row = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const Group = styled.fieldset`
  border: none;
  padding: 0;
  margin: 0 8px 8px 0;
`;

const Legend = styled.legend`
  font-weight: 700;
  margin-bottom: 8px;
`;

const Option = styled.label`
  display: flex;
  align-items: center;
  gap: 6px;
  background: #fff;
  padding: 6px 8px;
  border-radius: 6px;
  border: 1px solid #e3e3e3;
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
  const anos = useMemo(() => Array.from(new Set(cars.map((c) => c.ano))).sort((a, b) => a - b), [cars]);

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
    <Panel>
      <Row>
        <Group>
          <Legend>Marca</Legend>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {marcas.map((m) => (
              <Option key={m}>
                <input type="checkbox" checked={selectedMarcas.includes(m)} onChange={() => handleMarca(m)} />
                {m}
              </Option>
            ))}
          </div>
        </Group>

        <Group>
          <Legend>Modelo</Legend>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {modelos.map((m) => (
              <Option key={m}>
                <input type="checkbox" checked={selectedModelos.includes(m)} onChange={() => handleModelo(m)} />
                {m}
              </Option>
            ))}
          </div>
        </Group>

        <Group>
          <Legend>Ano</Legend>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {anos.map((a) => (
              <Option key={String(a)}>
                <input type="checkbox" checked={selectedAnos.includes(a)} onChange={() => handleAno(a)} />
                {a}
              </Option>
            ))}
          </div>
        </Group>

        <div style={{ marginLeft: 'auto' }}>
          <button type="button" onClick={clearAll}>Limpar</button>
        </div>
      </Row>
    </Panel>
  );
};

export default CarFilter;
