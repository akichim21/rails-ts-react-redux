import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { decrementCount, incrementCount } from 'actions/Counters';

const styles: any = StyleSheet.create({
  btn: {
    margin: "10px",
  },
});

export interface IProps extends React.Props<{}> {
  count: number;
  actions: {
    incrementCount: typeof incrementCount,
    decrementCount: typeof decrementCount,
  };
}

export class MainComponent extends React.Component<IProps, {}> {
  public onIncrementClick = (): void => {
    this.props.actions.incrementCount(1);
  }
  public onDecrementClick = (): void => {
    this.props.actions.decrementCount(1);
  }
  public render(): JSX.Element {
    const { count } = this.props;
    return (
      <div>
        <h1>{count}</h1>
        <button className={css(styles.btn)} onClick={this.onDecrementClick}>-</button>
        <button className={css(styles.btn)} onClick={this.onIncrementClick}>+</button>
      </div>
    );
  }
}
