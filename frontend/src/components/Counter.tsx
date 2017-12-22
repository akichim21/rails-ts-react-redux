import * as React from 'react';
import { renderReactWithAphrodite } from 'hypernova-aphrodite';
import { Store } from "redux";
import { configureStore } from "store/configureStore";
import { initCount } from 'actions/Counters';
const CounterComponent: any = require('./counters/CounterComponent').CounterComponent;

const store: Store<any> = configureStore();

interface IProps {
  count: number;
}

function createClass(component: JSX.Element, init: boolean): any {
  return (
    class Counter extends React.Component<IProps, {}> {
      public componentWillMount(): void {
        if (init) {
          const { count } = this.props;
          store.dispatch(initCount(count));
        }
      }
      public render(): JSX.Element {
        return component;
      }
    }
  );
}

export default renderReactWithAphrodite(
  'Counter',
  createClass(<CounterComponent store={store} />, true),
);

if (module.hot) {
  module.hot.accept("./counters/CounterComponent", () => {
    const NewCounterComponent: any = require('./counters/CounterComponent').CounterComponent;
    renderReactWithAphrodite(
      'Counter',
      createClass(<NewCounterComponent store={store} />, false),
    );
  });
}
