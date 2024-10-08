import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import ErrorBoundary from "./CatchError/CatchError";
import "./index.css";
import App from "./App/App";
import store from "./redux/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ErrorBoundary fallback={'App temporary lost in a void. Have a nice day'}>
        <App />
      </ErrorBoundary>
    </Provider>
  </StrictMode>
);
