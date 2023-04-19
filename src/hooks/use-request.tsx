import React, { useState, useEffect } from 'react';

import axios from 'axios';

import { API } from '../config';

export const useRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const sendRequest = async (method: string, url: string, fn: Function) => {
    setIsLoading(true);
    setIsError(false);
    try {
      let data;

      if (method === 'GET') {
        data = await axios.get(`${API}${url}`);
      }

      if (!data) {
        setIsLoading(false);
        throw data;
      }

      fn(data.data);
    } catch (err: any) {
      setIsError(true);
      setErrorMsg(err.message);
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
