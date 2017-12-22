if (!global._babelPolyfill) {
  require('babel-polyfill');
}
import * as React from 'react';
import { Provider } from "react-redux";
import { AppContainer } from 'react-hot-loader';
import MainContainer from 'containers/counters/MainContainer';
import { Store } from "redux";

interface IProps {
  store: Store<any>;
}

export const CounterComponent: React.SFC<IProps> = (props: IProps): React.ReactElement<any> => {
  return (
    <AppContainer warnings={false}>
      <Provider store={props.store}>
        <MainContainer />
      </Provider>
    </AppContainer>
  );
};
