// src/hooks/useReservationDashboard.ts
import { useState, useEffect } from 'react';
import apiService from '@/services/apiService';
import { Reservation } from '@/interfaces/Reservation'; // Import the Reservation interface

const useReservationDashboard = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReservations = async () => {
      setLoading(true);
      try {
        const response = await apiService.get('reservations/'); // Replace with your Django API endpoint
        setReservations(response);
      } catch (error) {
        console.error('Error fetching reservations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, []);

  const addReservation = async (newReservation: Reservation) => {
    // Functionality to add a new reservation
  };

  const updateReservation = async (id: number, updatedReservation: Reservation) => {
    // Functionality to update an existing reservation
  };

  const deleteReservation = async (id: number) => {
    // Functionality to delete a reservation
  };

  return { reservations, loading, addReservation, updateReservation, deleteReservation };
};

export default useReservationDashboard;
