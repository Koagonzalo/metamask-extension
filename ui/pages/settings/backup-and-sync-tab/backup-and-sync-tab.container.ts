import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

import type {
  MetaMaskReduxDispatch,
  MetaMaskReduxState,
} from '../../../store/store';
import BackupAndSyncTab from './backup-and-sync-tab.component';

const mapStateToProps = (_state: MetaMaskReduxState) => {
  return {};
};

const mapDispatchToProps = (_dispatch: MetaMaskReduxDispatch) => {
  return {};
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(BackupAndSyncTab);
