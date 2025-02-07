
import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';
import { Base_Url } from '../constant/ApiEndpoint';

const fetchApi = async(methodId, apiEndpoint, payload = {}, headers = {
    Authorization: `Bearer ${localStorage.getItem('token')}`, // Send token in header

}) => {

  let data 
  let loading = true;
  let error =null;

  // Build the full API endpoint
  const fullApiEndpoint = `${Base_Url}${apiEndpoint}`;

  // Define a reusable function to fetch data
  const fetchData = async () => {
    try {
      let response;

      // Dynamically select the HTTP method
      switch (methodId) {
        case 1: // GET
          response = await axios.get(fullApiEndpoint, { headers });
          break;
        case 2: // POST
          response = await axios.post(fullApiEndpoint, payload, { headers });
          break;
        case 3: // PUT
          response = await axios.put(fullApiEndpoint, payload, { headers });
          break;
        case 4: // DELETE
          response = await axios.delete(fullApiEndpoint, { headers });
          break;
        default:
          throw new Error(`Unsupported methodId: ${methodId}`);
      }

      data = response?.data?.data || response?.data;
    } catch (err) {
      error = err.response?.data?.message || err.message;
    } finally {
      loading = false
    }
  }

  await fetchData();
 

  return { data, loading, error, refetch: fetchData };
};

export default fetchApi;
