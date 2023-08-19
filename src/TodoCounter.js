import './TodoCounter.css';

/* const estilos = {
  fontSize: '24px',
  textAlign: 'center',
  margin: 0,
  padding: '48px',
}
 */

function TodoCounter ({ completed, total}) {
    return (
      <h1 /* style={estilos} */>
        Has completado {completed} de {total} tareas
      </h1>
    );
  }
  
  export { TodoCounter };