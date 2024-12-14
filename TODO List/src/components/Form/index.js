import { useState } from "react";

function Form({ title, setTitle }) {
  const [inputValue, setInputValue] = useState(title);

  console.log(inputValue);

  const saveHandler = () => {};

  return (
    <form>
      <div className="mb-3">
        <label forhtml="exampleInputEmail1" className="form-label">
          What you do today?
        </label>
        <input
          type="text"
          className="form-control"
          id="InputText"
          aria-describedby="textHelp"
          value={inputValue}
          onChange={(evt) => {
            setInputValue(evt.target.value);
          }}
        />
        <button
          type="button"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Close
        </button>
        <button type="button" className="btn btn-primary" onClick={saveHandler}>
          Save changes
        </button>
      </div>
    </form>
  );
}

export default Form;
