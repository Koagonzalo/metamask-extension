import type { BridgeStatusControllerState } from '@metamask/bridge-status-controller';
import type { TransactionControllerState } from '@metamask/transaction-controller';

import type { SmartTransactionsMetaMaskState } from '../modules/selectors';
import type {
  NetworkState,
  ProviderConfigState,
} from '../modules/selectors/networks';

export type BridgeStatusAppState = ProviderConfigState & {
  metamask: BridgeStatusControllerState;
};

export type MetricsBackgroundState = BridgeStatusAppState['metamask'] &
  SmartTransactionsMetaMaskState['metamask'] &
  NetworkState['metamask'] &
  TransactionControllerState;
