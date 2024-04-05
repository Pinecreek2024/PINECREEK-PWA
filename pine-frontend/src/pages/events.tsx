// src/pages/events.tsx
import React, { useEffect, useState } from 'react';
import apiService from '@/components/services/apiService';

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  // Additional event details
}

const EventsPage: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    apiService.get('events') // Adjust to your actual events API endpoint
      .then((data: Event[]) => setEvents(data))
      .catch((error) => console.error('Error loading events:', error));
  }, []);

  return (
    <div className="events-page">
      <h1>All Events</h1>
      {events.length > 0 ? (
        <ul>
          {events.map(event => (
            <li key={event.id}>
              <h2>{event.title}</h2>
              <p>Date: {event.date}</p>
              <p>{event.description}</p>
              {/* Include more comprehensive event details here */}
            </li>
          ))}
        </ul>
      ) : <p>There are currently no events scheduled.</p>}
    </div>
  );
};

export default EventsPage;
