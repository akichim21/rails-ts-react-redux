import * as ReactObj from "react";
import * as ReactDOMObj from "react-dom";

declare global {
  var React: typeof ReactObj;
  var ReactDOM: typeof ReactDOMObj;
  module NodeJS {
    interface Global {
      _babelPolyfill: any;
    }
  }
}
