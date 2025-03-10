export function TodoItem({ id, completed, title, toggleTodo, deleteTodo }) {
    return (
        <li key={id}>
            <label>
                <input type="checkbox" checked={completed} onChange={e => toggleTodo(id, e.target.checked)}></input>
                {title}
            </label>
            <button onClick={() => deleteTodo(id)} className="btn-delete" title="Delete this item">X</button>
        </li>
    )
}