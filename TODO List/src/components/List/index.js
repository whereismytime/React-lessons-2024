import Element from "../Element";

function List({ todosList, editHandler }) {
  console.log(todosList);

  return (
    <ul className="list-group mb-0">
      {todosList.map((todo) => {
        return (
          <Element title={todo.title} key={todo.id} editHandler={editHandler} />
        );
      })}
    </ul>
  );
}

export default List;
