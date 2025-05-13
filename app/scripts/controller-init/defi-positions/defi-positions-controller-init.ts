import type { DeFiPositionsControllerMessenger } from '@metamask/assets-controllers';
import { DeFiPositionsController } from '@metamask/assets-controllers';

import type { DeFiPositionsControllerInitMessenger } from '../messengers/defi-positions/defi-positions-controller-messenger';
import type { ControllerInitFunction } from '../types';

export const DeFiPositionsControllerInit: ControllerInitFunction<
  DeFiPositionsController,
  DeFiPositionsControllerMessenger,
  DeFiPositionsControllerInitMessenger
> = ({ initMessenger, controllerMessenger, getController }) => {
  const getPreferencesController = () => getController('PreferencesController');

  const controller = new DeFiPositionsController({
    messenger: controllerMessenger,
    isEnabled: () => {
      const preferencesController = getPreferencesController();
      const { useExternalServices } = preferencesController.state;

      const state = initMessenger.call('RemoteFeatureFlagController:getState');

      const featureFlagForDeFi = Boolean(
        state?.remoteFeatureFlags?.assetsDefiPositionsEnabled,
      );

      return useExternalServices && featureFlagForDeFi;
    },
  });

  return {
    controller,
  };
};
