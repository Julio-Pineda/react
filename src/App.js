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
  {text: 'Estados derivados', completed: true},
];

function App() {
  const [searchValue, setSearchValue] = React.useState(""); 

  const [tareas, setTareas] = React.useState(defaultTodos); 
  console.log ("Se buscó: " + tareas);

  const completedTareas = tareas.filter(
    tarea => !!tarea.completed
  ).length;
  const totalTareas = tareas.length;

  const searchedTareas = tareas.filter(
    (tarea) => {
      const tareaText = tarea.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();

      return tareaText.includes(searchText);
    }
  );

    const tareaCompletadaTodoList = (text) => {
      const newTareas = [...tareas];
      const tareaIndex = newTareas.findIndex(
        (todo) => todo.text == text
      );
      newTareas[tareaIndex].completed = !newTareas[tareaIndex].completed; // Toggle the completed value
      setTareas(newTareas);
    }

    const tareaEliminadaTodoList = (text) => {
      const newTareas = [...tareas];
      const tareaIndex = newTareas.findIndex(
        (todo) => todo.text == text
      );
      newTareas.splice(tareaIndex, 1);
      setTareas(newTareas);
    }


  return (
    // <div className="App"> Puedo encapsular en div
    // <React.Fragment> Puedo encapsular en react fragment o puedo simplemente usar esas etiquetas vacias para encapsular
    // <>
    <div className="App">
      <TodoCounter 
      completed={completedTareas} 
      total={totalTareas}
      />
      
      <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTareas.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          onComplete={() => tareaCompletadaTodoList(todo.text)}
          onDelete={() => tareaEliminadaTodoList(todo.text)}
          />
        ))}
      </TodoList>

       <TodoButton 

       />
    </div>
    //   </>
    // </React.Fragment>
    // </div>
  );
}



export default App;

