import React from 'react'; //Se debe usar este, para que fragment funcione
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoButton } from './TodoButton';
import './App.css'



const defaultTodos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Curso de react', completed: false},
  {text: 'Llorar con la llorona', completed: false},
  {text: 'Pelar el cobre', completed: false},
  {text: 'Tomar la cena', completed: false},
];

function App() {
  return (
    // <div className="App"> Puedo encapsular en div
    // <React.Fragment> Puedo encapsular en react fragment o puedo simplemente usar esas etiquetas vacias para encapsular
    // <>
    <div className="App">
      <TodoCounter completed={10} total={12}/>
      <TodoSearch/>

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          />
        ))}
      </TodoList>

       <TodoButton />
    </div>
    //   </>
    // </React.Fragment>
    // </div>
  );
}



export default App;

