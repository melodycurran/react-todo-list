import { TodoItem } from "./TodoItem"

export function TodoList({ todos, toggleTodo, deleteTodo }) {
    return (
        <>
            <h1>Todo List</h1>
            <ul className="list">
                {todos.length === 0 && "Nothing here. Add todo items"}
                {todos.map(todo => {
                    return (
                        <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}
                        />
                    )
                })}
            </ul>


        </>
    )
}