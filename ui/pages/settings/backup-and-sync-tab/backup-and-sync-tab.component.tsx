import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import { BackupAndSyncFeaturesToggles } from '../../../components/app/identity/backup-and-sync-features-toggles/backup-and-sync-features-toggles';
import { BackupAndSyncToggle } from '../../../components/app/identity/backup-and-sync-toggle/backup-and-sync-toggle';
import { Box } from '../../../components/component-library';
import {
  BlockSize,
  BorderColor,
} from '../../../helpers/constants/design-system';
import {
  getNumberOfSettingRoutesInTab,
  handleSettingsRefs,
} from '../../../helpers/utils/settings-search';

export default class BackupAndSyncTab extends PureComponent {
  static contextTypes = {
    t: PropTypes.func,
    trackEvent: PropTypes.func,
  };

  settingsRefs = Array(
    getNumberOfSettingRoutesInTab(
      this.context.t,
      this.context.t('backupAndSync'),
    ),
  )
    .fill(undefined)
    .map(() => {
      return React.createRef<HTMLSpanElement>();
    });

  componentDidUpdate() {
    const { t } = this.context;
    handleSettingsRefs(t, t('backupAndSync'), this.settingsRefs);
  }

  componentDidMount() {
    const { t } = this.context;
    handleSettingsRefs(t, t('backupAndSync'), this.settingsRefs);
  }

  render() {
    return (
      <div className="settings-page__body">
        <BackupAndSyncToggle />
        <Box
          borderColor={BorderColor.borderMuted}
          width={BlockSize.Full}
          style={{ height: '1px', borderBottomWidth: 0 }}
        ></Box>
        <BackupAndSyncFeaturesToggles />
      </div>
    );
  }
}
