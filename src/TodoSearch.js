import React from 'react';
import './TodoSearch.css';

//const [state, setState] = React.useState(); 
//Al declarar el array debemos asignar el estado con su respectivo set, ejemplo: const [estadito, setEstadito]



function TodoSearch({
  searchValue,
  setSearchValue,
}) {

    return (
      <div className='container-input'>
          <input 
          value={searchValue} //Para devolver valor
          placeholder="Buscar tarea"
          onChange={(event) => {
            console.log("Texto introducido");
            console.log(event);
            console.log(event.target);
            console.log(event.target.value);//consigo seleccionar el mismo value del input en cuestión
            setSearchValue(event.target.value); //Es una función y se llama para capturar el valor
          }}
          />
      </div>
    );
  }
  
  export { TodoSearch };