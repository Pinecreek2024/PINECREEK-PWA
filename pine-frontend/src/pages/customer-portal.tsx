// src/pages/customer-portal.tsx
import React, { useEffect, useState } from 'react';
import useAuth from '@/components/hooks/useAuth';
import useLoyalty from '@/components/hooks/useLoyalty';
import apiService from '@/components/services/apiService';
import { User } from 'src/interfaces/user';
import { Order } from 'src/interfaces/order';

const CustomerPortal: React.FC = () => {
  const { authState } = useAuth();
  const { loyaltyPoints } = useLoyalty();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (authState.isLoggedIn && authState.user) {
      apiService.get(`orders/user/${authState.user.id}`)
        .then((fetchedOrders: Order[]) => {
          setOrders(fetchedOrders);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching orders:', error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [authState]);

  if (!authState.isLoggedIn) {
    return <div>Please log in to access the customer portal.</div>;
  }

  if (loading) {
    return <div>Loading your information...</div>;
  }

  return (
    <div className="customer-portal">
      <h1>Welcome, {authState.user?.name}</h1>
      <section>
        <h2>Loyalty Points</h2>
        <p>You currently have {loyaltyPoints} points.</p>
      </section>
      <section>
        <h2>Your Orders</h2>
        {orders.length > 0 ? (
          <ul>
            {orders.map(order => (
              <li key={order.id}>
                <h3>Order ID: {order.id}</h3>
                <p>Date: {order.date}</p>
                <p>Total: ${order.total}</p>
                {/* More details for each order can be displayed here */}
              </li>
            ))}
          </ul>
        ) : <p>You have no orders yet.</p>}
      </section>
      {/* Additional sections as per your requirements */}
    </div>
  );
};

export default CustomerPortal;
