import React from "react";
import OIDAuthProvider from "./OIDAuthProvider";

function App() {
  return (
    <OIDAuthProvider>
      <div>Hello World</div>
    </OIDAuthProvider>
  );
}

export default App;
