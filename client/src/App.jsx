import { useEffect, useState } from "react";
import CreateComponent from "./components/CreateComponent";
import DisplayComponent from "./components/DisplayComponent";
import { store } from "./redux/store";

function App() {
  const [states, setStates] = useState([]);
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      console.log("states", store.getState());
      setStates(store.getState());
    });
    return () => unsubscribe();
  }, [setStates]);
  return (
    <>
      <CreateComponent />
      <DisplayComponent data={states} />
    </>
  );
}

export default App;
