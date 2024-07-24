import { useQuery } from '@tanstack/react-query';
import { getBets } from '../api/bets';

const useFetchBets = () => {
  return useQuery({
    queryKey: ['bets'],
    queryFn: getBets
  });
};

export default useFetchBets;
