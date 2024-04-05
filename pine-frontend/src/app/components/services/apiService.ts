// src/app/services/apiService.ts
import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

const getHeaders = () => {
  return {
    'Content-Type': 'application/json',
    // Include other headers like Authorization if needed
    // 'Authorization': `Bearer ${token}`, // Uncomment and use if your API requires token authentication
  };
};

const apiService = {
  // GET request to fetch data
  get: async (endpoint: string) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/${endpoint}`, {
        headers: getHeaders(),
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // POST request to send data
  post: async (endpoint: string, data: any) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/${endpoint}`, data, {
        headers: getHeaders(),
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // PUT request to update data
  put: async (endpoint: string, data: any) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/${endpoint}`, data, {
        headers: getHeaders(),
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // DELETE request to remove data
  delete: async (endpoint: string) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/${endpoint}`, {
        headers: getHeaders(),
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default apiService;
