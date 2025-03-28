import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useQuery } from '@tanstack/react-query';
import { fetchHistory } from '~/utils/api';

export const ConversionRateHistoryChart = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['history'],
    queryFn: fetchHistory,
    refetchInterval: 60000, // let's poll every 60 seconds
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching rate history</div>;

  return (
    <>
      <h3>History</h3>
      <ResponsiveContainer width='100%' height={300}>
        <LineChart data={data}>
          <XAxis
            dataKey='createdAt'
            tickFormatter={(tick: string | number | Date) => new Date(tick).toLocaleDateString()}
          />
          <YAxis domain={['auto', 'auto']} />
          <Tooltip />
          <Line type='monotone' dataKey='rate' stroke='#8884d8' />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};
