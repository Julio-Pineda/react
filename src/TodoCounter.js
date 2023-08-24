import './TodoCounter.css';

/* const estilos = {
  fontSize: '24px',
  textAlign: 'center',
  margin: 0,
  padding: '48px',
}
 */

function TodoCounter({ total, completed }) {
  return (
      completed === total 
          ? <h1 className='TodoCounter'>Felicitaciones, has completado todos las tareas 🥳🎉🎊</h1> 
          :<h1 className='TodoCounter'>Has completado <span> {completed} </span>de <span>{total}</span> TODOS</h1>
  );
}

  
  export { TodoCounter };