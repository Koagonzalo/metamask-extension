import { useSelector } from 'react-redux';

import {
  getCompletedOnboarding,
  getIsUnlocked,
} from '../ducks/metamask/metamask';
import { getNetworkClientIdsToPoll } from '../selectors';
import {
  accountTrackerStartPolling,
  accountTrackerStopPollingByPollingToken,
} from '../store/actions';
import useMultiPolling from './useMultiPolling';

const useAccountTrackerPolling = () => {
  const networkClientIdsToPoll = useSelector(getNetworkClientIdsToPoll);
  const completedOnboarding = useSelector(getCompletedOnboarding);
  const isUnlocked = useSelector(getIsUnlocked);
  const canStartPolling = completedOnboarding && isUnlocked;

  useMultiPolling({
    startPolling: accountTrackerStartPolling,
    stopPollingByPollingToken: accountTrackerStopPollingByPollingToken,
    input: canStartPolling ? networkClientIdsToPoll : [],
  });
};

export default useAccountTrackerPolling;
