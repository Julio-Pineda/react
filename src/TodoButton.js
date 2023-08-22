import './TodoButton.css';

function TodoButton () {
    return (
        <button
        // onClick={() => alert("Click")}
        onClick={
            (event) => {
                console.log("click");
                console.log(event);
                console.log(event.target);
            }
        }
        >Crear tarea</button>
    );
}

export { TodoButton };