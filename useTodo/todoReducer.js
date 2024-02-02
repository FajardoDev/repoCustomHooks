export const todoReducer = (estadoInicial = [], action) => {
	switch (action.type) {
		case "[TODO] add Todo":
			// throw new Error("action.type = Undefined aún no implementada");
			return [...estadoInicial, action.payload]; // Add el Todo en screen

		case "[TODO] remove Todo":
			return estadoInicial.filter((todo) => todo.id !== action.payload);

		case "[TODO] toggle Todo":
			return estadoInicial.map((todo) => {
				if (todo.id === action.payload) {
					return {
						...todo,
						done: !todo.done,
					};
				}

				return todo;
			});

		case "[TODO] edit Todo":
			return estadoInicial.map((todo) => {
				if (todo.id === action.payload.id) {
					return {
						...todo,
						description: action.payload.description,
					};
				}

				return todo;
			});

		default:
			return estadoInicial;
	}
};
