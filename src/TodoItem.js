function TodoItem(props) {
    return (
      <div className="containerLi">
          <li>
          <span className={`chulo`}
            onClick={props.onComplete}
          >✅</span>
          <p className={`${props.completed && "todoDone"}`}>{props.text}</p>
        </li>
        <span className="x"
          onClick={props.onDelete}
        >❌</span>
      </div>

    );
  }

  export { TodoItem };