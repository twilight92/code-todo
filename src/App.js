import { useEffect, useState } from "react";
import List from "./List";

function App() {
  const [todos, setTodos] = useState(["js공부"]);
  const [newTodo, setNewTodo] = useState();
  const chaneInputData = (e) => {
    setNewTodo(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, newTodo]);
  };

  useEffect(() => {
    console.log("렌더링");
  }, [todos]);

  return (
    <>
      <h1>todo 애플리케이션</h1>
      <form action="">
        <input type="text" onChange={chaneInputData} />
        <button onClick={addTodo}>할 일 추가</button>
      </form>

      <List todos={todos} />
    </>
  );
}

export default App;
