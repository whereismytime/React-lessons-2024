import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { todosList } from "./data";
import Modal from "./components/Modal";
import { useState } from "react";
import Form from "./components/Form";

function App() {
  const [title, setTitle] = useState("");

  const editHandler = (title) => {
    setTitle(title);
    console.log(title);
  };
  return (
    <>
      <Header />
      <Main todosList={todosList} editHandler={editHandler} />
      <Footer />
      {title && (
        <Modal>
          <Form title={title} setTitle={setTitle} />
        </Modal>
      )}
    </>
  );
}

export default App;
