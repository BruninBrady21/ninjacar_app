import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import api from './services/api';
import CarList from './pages/CarList';
import AddNewCar from './pages/AddNewCar';
import MainContent from './components/MainContent/MainContent';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import type { Car } from './types/types';
import './App.css';

function App() {
  const [cars, setCars] = useState<Car[]>([]);

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
    api.post('/cars', car)
      .then((response) => {
        setCars((currentCars) => [...currentCars, response.data]);
      })
      .catch((error) => {
        console.error('Error adding car:', error);
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
                <AddNewCar onAddCar={handleAddCar} />
                <CarList cars={cars} onRemoveCar={handleRemoveCar} />
              </>
            } />
          </Routes>
        </MainContent>
        <Footer />
      </div>
    </Router>
  );
}

export default App;