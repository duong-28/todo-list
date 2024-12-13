import './style.css'

function TodoItem(props) {
    const { todo,key, index, completeTodo} = props;
    // return <div className='todo'>{props.todo.text}</div>;
    return (
        <div className={`todo ${todo.isCompleted ? "complete" : ""}`}>
            {todo.text}
            <div>
                <button onClick={() => completeTodo(index)}>Complete</button>
            </div>
        </div>
    )
}

export default TodoItem;