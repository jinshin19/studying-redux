import { useState } from "react";
import { store } from "../redux/store";
import { createAction } from "../redux/actions";

const CreateComponent = () => {
  const [desc, setDesc] = useState("");

  const createHandler = () => {
    store.dispatch(createAction(desc));
  };

  return (
    <div className="create-component">
      <h2> Create Section</h2>
      <input
        type="text"
        placeholder="Description...."
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button type="button" onClick={createHandler}>
        CREATE
      </button>
    </div>
  );
};

export default CreateComponent;
