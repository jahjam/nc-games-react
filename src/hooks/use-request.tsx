import { useState } from 'react';

import axios from 'axios';

import { API } from '../config';

export const useRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const sendRequest = async (
    method: string,
    url: string,
    fn: Function,
    body: object = {}
  ) => {
    setIsLoading(true);
    setIsError(false);
    try {
      let data;

      if (method === 'GET') {
        data = await axios.get(`${API}${url}`);
      }

      if (method === 'PATCH') {
        data = await axios.patch(`${API}${url}`, body);
      }

      if (method === 'POST') {
        data = await axios.post(`${API}${url}`, body);
      }

      if (method === 'DELETE') {
        data = await axios.delete(`${API}${url}`);
      }

      if (!data) {
        setIsLoading(false);
        throw data;
      }

      fn(data.data);
    } catch (err: any) {
      setIsError(true);
      setErrorMsg(
        err.response?.data.error ||
          'Oops, something went wrong. Please try again!'
      );
    }

    setIsLoading(false);
  };

  const resetError = () => {
    setIsError(false);
  };

  const request = {
    isLoading,
    isError,
    errorMsg,
    resetError,
    sendRequest,
  };

  return request;
};
