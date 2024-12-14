import Section from "../Section";

function Main({ todosList, editHandler }) {
  return (
    <main>
      <Section todosList={todosList} editHandler={editHandler} />
    </main>
  );
}

export default Main;
