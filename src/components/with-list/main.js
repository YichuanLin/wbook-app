import { useEffect, useState } from 'react';
import axios from 'axios';

const mockResponse = () => {
  const getItem = id => {
    return {
      id: id,
      author: `Tevin Towne ${id}`,
      title: 'Of Mice and Men',
      image: {
        url: null,
      },
      publisher: 'Firebrand Books',
      year: '1923',
      genre: 'Classic',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      price: id,
    };
  };
  return [getItem(111), getItem(222), getItem(333)];
};

export const WithList = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [list, setList] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setError(null);
      setLoading(true);
      const options = {
        url: `http://private-anon-597f3e727c-wbooksapi.apiary-mock.com/api/v1/books${encodeURIComponent(
          null,
        )}`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization:
            'eyJ0eXAiOiJKV1QiLCJhbiAoOiJIUzI1NiJ9.eyJvX2F1dGhfYXBwbGljYXRpb25faWQiOjF9.h7ZNPpbd_Bu8yL27fmCAI_wgyZJI44b5eRRxwWUcwaQ',
        },
      };
      try {
        const response = await axios(options);
        setLoading(false);
        // setList(response.data);
        setList(mockResponse());
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };
    fetchData();
  }, [setLoading, setError, setList]);

  return children(list, loading, error);
};
