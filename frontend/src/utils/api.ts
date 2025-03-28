import axios from 'axios';

export const fetchRate = async () => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/rate`);
  return data;
};

export const fetchHistory = async () => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/rate/history`);
  return data;
};
