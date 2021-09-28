import '../styles/globals.css';
import App from "next/app";
import { Provider } from "../context";
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default MyApp;