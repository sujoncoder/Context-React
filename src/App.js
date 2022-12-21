import React, { createContext, useState } from "react";
import Parents from "./components/Parents";

  export const myContext = createContext();

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <myContext.Provider value={[count, setCount]}>
    <div>
      <Parents/>
    </div>
    </myContext.Provider>
  );
}

export default App;
