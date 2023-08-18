import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoButton } from './TodoButton';

import './App.css';


function App() {
  return (
    <div className="App">

      <TodoCounter/>
      <TodoSearch/>

      <TodoList>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </TodoList>

       <TodoButton/>
    </div>
  );
}



export default App;

