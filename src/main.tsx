import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <h1 style={{ textAlign: "center", marginTop: "50px" }}>
      🚀 ScrapConnect App Started!
    </h1>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
