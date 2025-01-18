import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App.jsx";
import { store, persistor } from "./redux/store"; // Import the store and persistor
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrap App with Provider */}
      <PersistGate loading={null} persistor={persistor}> {/* Persist Gate */}
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
