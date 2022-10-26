import React from "react";
import "./styles.css";
import { useState } from "react";

const App = () => {
  const [todoText, setTodotext] = useState('');
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodotext(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodotext("");
  };

  const onClickDelete = (index) => {
    const delTodos = [...incompleteTodos];
    delTodos.splice(index, 1);
    setIncompleteTodos(delTodos);
  };

  const onClickComplete = (index) => {
    const incomTodos = [...incompleteTodos];
    incomTodos.splice(index, 1);

    const comTodos = [...completeTodos, incompleteTodos[index]];

    setIncompleteTodos(incomTodos);
    setCompleteTodos(comTodos);
  }

  const onClickBack = (index) => {
    const backcomTodos = [...completeTodos]
    backcomTodos.splice(index, 1);

    const backincomTodos = [...incompleteTodos, completeTodos[index]];

    setIncompleteTodos(backincomTodos);
    setCompleteTodos(backcomTodos);
  };

  const onClickVanish = (index) => {
    const VanTodos = [...completeTodos];
    VanTodos.splice(index, 1);
    setCompleteTodos(VanTodos);
  };

  return (
    <>
      <div className="input-area">
        <input placeholder="Todoを入力" value={todoText} onChange={onChangeTodoText} />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">
          未完了のTodo
        </p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            )
          })}

        </ul>
      </div>
      <div className="complete-area">
        <p className="title">
          完了のTodo
        </p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
                <button onClick={() => onClickVanish(index)}>消去</button>
              </div>
            )
          })}
        </ul>
      </div>
    </>
  );
};

export default App;