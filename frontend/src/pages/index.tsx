import { useQuery } from '@tanstack/react-query';
import { ConversionRateHistoryChart } from '~/components/ConversionRateHistoryChart';
import { fetchRate } from '~/utils/api';

const Home = () => {
  const {
    data: rateData,
    error: rateError,
    isLoading: rateLoading,
  } = useQuery({
    queryKey: ['rates'],
    queryFn: fetchRate,
    refetchInterval: 60000, // let's poll every 60 seconds
  });

  if (rateLoading) {
    return <div>Loading...</div>;
  }

  if (rateError) {
    return <div>Error loading rate data</div>;
  }

  return (
    <div>
      <h3 className='text-center text-3xl font-bold'>Rate: {rateData?.rate}</h3>
      {/** optional component */}
      <ConversionRateHistoryChart />
    </div>
  );
};

export default Home;
