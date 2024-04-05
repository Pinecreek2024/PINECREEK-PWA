// src/pages/reservations.tsx
import React from 'react';
import ReservationForm from '@/components/forms/ReservationForm';

const ReservationsPage: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold my-4">Table Reservations</h2>
      <ReservationForm />
      {/* Additional components or information related to reservations */}
    </div>
  );
};

export default ReservationsPage;
