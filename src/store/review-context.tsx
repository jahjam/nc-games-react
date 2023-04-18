import React, { useState, useEffect } from 'react';

import axios from 'axios';

import { API } from '../config';

type Review = {
  title: string;
  category: string;
  designer: string;
  owner: string;
  review_img_url: string;
  created_at: Date;
  votes: number;
  comment_count: number;
};

export type ContextDefaults = {
  reviews: Array<Review>;
};

const contextDefaults = {
  reviews: [],
};

export const ReviewContext =
  React.createContext<ContextDefaults>(contextDefaults);

type Props = {
  children: React.ReactNode;
};

export const ReviewContextProvider = ({ children }: Props) => {
  const [reviews, setReview] = useState([]);

  useEffect(() => {
    const getAllReviews = async () => {
      const reviews = await axios.get(`${API}/reviews`);

      setReview(reviews.data.reviews);
    };

    getAllReviews();
  }, []);

  const contextValue = {
    reviews,
  };

  return (
    <ReviewContext.Provider value={contextValue}>
      {children}
    </ReviewContext.Provider>
  );
};
