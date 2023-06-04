import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import "./dist/css/style.css";
import { store } from "./app/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
