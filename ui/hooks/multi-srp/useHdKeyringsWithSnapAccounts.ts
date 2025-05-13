import type {
  KeyringMetadata,
  KeyringObject,
} from '@metamask/keyring-controller';
import type { InternalAccount } from '@metamask/keyring-internal-api';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { getMetaMaskHdKeyrings } from '../../selectors';
import { getInternalAccounts } from '../../selectors/accounts';

// TODO: Move this data type to the @metamask/keyring-controller module
type KeyringObjectWithMetadata = KeyringObject & { metadata: KeyringMetadata };

/**
 * Custom hook that combines HD keyrings with their snap accounts that were derived from the same entropy source.
 *
 * @returns An array of hd keyring objects with any snap accounts that were derived from the same entropy source.
 */
export const useHdKeyringsWithSnapAccounts = () => {
  const hdKeyrings: KeyringObjectWithMetadata[] = useSelector(
    getMetaMaskHdKeyrings,
  );
  const internalAccounts = useSelector(getInternalAccounts);
  return useMemo(() => {
    return hdKeyrings.map((keyring) => {
      const firstPartySnapAccounts = internalAccounts
        .filter(
          (account: InternalAccount) =>
            account.options?.entropySource === keyring.metadata.id,
        )
        .map((account: InternalAccount) => account.address);

      return {
        ...keyring,
        accounts: [...keyring.accounts, ...firstPartySnapAccounts],
      };
    });
  }, [hdKeyrings, internalAccounts]);
};
