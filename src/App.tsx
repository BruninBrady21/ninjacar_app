import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import api from './services/api';
import CarList from './pages/CarList';
import AddNewCar from './pages/AddNewCar';
import MainContent from './components/MainContent/MainContent';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import type { Car } from './types/types';
import './App.css';

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
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  max-width: 720px;
  width: 95%;
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
    api.put(`/cars/${id}`, updatedCar)
      .then(() => {
        setCars((currentCars) =>
          currentCars.map((car) =>
            car.id === id ? updatedCar : car
          )
        );
      })
      .catch((error) => {
        console.error('Error updating car:', error);
      });
  };

  return (
    <Router>
      <div className="app-container">
        <Header />
        <MainContent>
          <Routes>
            <Route path="/" element={
              <>
                <h1>Meus Carros</h1>
                <button type="button" onClick={() => setShowAddModal(true)}>Inserir novo carro</button>
                <CarList cars={cars} onRemoveCar={handleRemoveCar} />
              </>
            } />
          </Routes>
        </MainContent>
        {showAddModal && (
          <ModalOverlay onClick={() => setShowAddModal(false)}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <ModalClose aria-label="Fechar" onClick={() => setShowAddModal(false)}>&times;</ModalClose>
              <AddNewCar onAddCar={(car) => handleAddCar(car).then(() => setShowAddModal(false))} />
            </ModalContent>
          </ModalOverlay>
        )}
        <Footer />
      </div>
    </Router>
  );
}

export default App;