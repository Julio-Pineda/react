function TodoItem(props) {
    return (
      <div className="containerLi">
          <li>
          <input type="checkbox" className={`${props.completed && "todoDone"}`}></input>
          <p className={`${props.completed && "todoDone"}`}>{props.text}</p>
        </li>
        <span className="x">❌</span>
      </div>

    );
  }

  export { TodoItem };