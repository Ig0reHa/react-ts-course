import React, {FC} from 'react';
import {I_Todo} from "../types/types";

interface TodoItemProps {
	todo: I_Todo
}

const TodoItem: FC<TodoItemProps> = ({todo}) => {
	return (
		<div>
			<div key={todo.id}>{todo.id}. {todo.title} - {todo.completed ? '✅' : '❌'}</div>
		</div>
	);
};

export default TodoItem;