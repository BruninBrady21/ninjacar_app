import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import api from './services/api';
import CarList from './pages/CarList';
import AddNewCar from './components/CarsFunctions/AddNewCar';
import EditCar from './components/CarsFunctions/EditCar';
import Settings from './pages/Settings';
import CarFilter from './components/CarsFunctions/CarFilter';
import MainContent from './components/MainContent/MainContent';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import type { Car } from './types/types';
import './App.css';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
`;

const ModalContent = styled.div`
  background: #B0DAA6;
  padding: 20px;
  border-radius: 8px;
  max-width: 720px;
  width: 50%;
  box-shadow: 0 20px 40px rgba(0,0,0,0.2);
  position: relative;
`;

const ModalClose = styled.button`
  position: absolute;
  top: 8px;
  right: 12px;
  border: none;
  background: transparent;
  font-size: 22px;
  cursor: pointer;
`;

function App() {
  const [cars, setCars] = useState<Car[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingCar, setEditingCar] = useState<Car | null>(null);
  const [filter, setFilter] = useState<{ marcas: string[]; modelos: string[]; anos: number[] }>({ marcas: [], modelos: [], anos: [] });
  
  useEffect(() => {
    api.get('/cars')
      .then((response) => {
        setCars(response.data);
      })
      .catch((error) => {
        console.error('Error fetching cars:', error);
      });
  }, []);

  const handleAddCar = (car: Omit<Car, 'id'>) => {
    return api.post('/cars', car)
      .then((response) => {
        setCars((currentCars) => [...currentCars, response.data]);
        return response.data;
      })
      .catch((error) => {
        console.error('Error adding car:', error);
        throw error;
      });
  };

  const handleRemoveCar = (id: number) => {
    api.delete(`/cars/${id}`)
      .then(() => {
        setCars((currentCars) => currentCars.filter((car) => car.id !== id));
      })
      .catch((error) => {
        console.error('Error removing car:', error);
      });
  };

  const handleUpdateCar = (id: number, updatedCar: Car) => {
    return api.put(`/cars/${id}`, updatedCar)
      .then((response) => {
        setCars((currentCars) =>
          currentCars.map((car) =>
            car.id === id ? response.data : car
          )
        );
        return response.data;
      })
      .catch((error) => {
        console.error('Error updating car:', error);
        throw error;
      });
  };

  return (
    <Router>
      <AppContainer>
        <Header />
        <MainContent>
          <Routes>
            <Route path="/" element={
              <>
                <h1>Meus Carros</h1>
                <button type="button" onClick={() => setShowAddModal(true)}>Inserir novo carro</button>
                <CarFilter cars={cars} onChange={(f) => setFilter(f)} />
                {(() => {
                  const filtered = cars.filter((c) => {
                    if (filter.marcas.length > 0 && !filter.marcas.includes(c.marca)) return false;
                    if (filter.modelos.length > 0 && !filter.modelos.includes(c.modelo)) return false;
                    if (filter.anos.length > 0 && !filter.anos.includes(c.ano)) return false;
                    return true;
                  });

                  return <CarList cars={filtered} onRemoveCar={handleRemoveCar} onEditCar={(car) => setEditingCar(car)} />;
                })()}
              </>
            } />
          <Route path="/settings" element={<Settings />} />
          </Routes>
        </MainContent>
        {(showAddModal || editingCar) && (
          <ModalOverlay onClick={() => {
            setShowAddModal(false);
            setEditingCar(null);
          }}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <ModalClose aria-label="Fechar" onClick={() => {
                setShowAddModal(false);
                setEditingCar(null);
              }}>&times;</ModalClose>
              {showAddModal ? (
                <AddNewCar
                  onAddCar={(car) =>
                    handleAddCar(car).then((savedCar) => {
                      setShowAddModal(false);
                      return savedCar;
                    })
                  }
                />
              ) : editingCar ? (
                <EditCar
                  car={editingCar}
                  onUpdateCar={(updatedCar) =>
                    handleUpdateCar(updatedCar.id, updatedCar).then((savedCar) => {
                      setEditingCar(null);
                      return savedCar;
                    })
                  }
                  onCancel={() => setEditingCar(null)}
                />
              ) : null}
            </ModalContent>
          </ModalOverlay>
        )}
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;