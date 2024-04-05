// src/app/sections/EventsSection.tsx
import React, { useEffect, useState } from 'react';
import apiService from '@/services/apiService';

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  // Add more fields as per your requirements
}

const EventsSection: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  
  useEffect(() => {
    apiService.get('events/upcoming') // Update endpoint as necessary
      .then((data: Event[]) => setEvents(data))
      .catch((error) => console.error('Error loading events:', error));
  }, []);

  return (
    <div className="events-section">
      <h2>Upcoming Events</h2>
      {events.length > 0 ? (
        <ul>
          {events.map(event => (
            <li key={event.id}>
              <h3>{event.title}</h3>
              <p>{event.date}</p>
              <p>{event.description}</p>
              {/* Additional event details */}
            </li>
          ))}
        </ul>
      ) : <p>No upcoming events.</p>}
    </div>
  );
};

export default EventsSection;
