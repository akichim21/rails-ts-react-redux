import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ReduxState } from 'reducers/';
import { MainComponent, IProps } from 'components/counters/MainComponent';
import { incrementCount, decrementCount } from 'actions/Counters';

const mapStateToProps: any = (state: ReduxState): any => {
  return {
    count: state.counterReducers.count,
  };
};

const mapDispatchToProps: any = (dispatch: any): any => {
  return {
    actions: bindActionCreators(
      {
        incrementCount,
        decrementCount,
      },
      dispatch,
    ),
  };
};

export default connect<IProps, any, any>(
  mapStateToProps,
  mapDispatchToProps,
)(MainComponent);
