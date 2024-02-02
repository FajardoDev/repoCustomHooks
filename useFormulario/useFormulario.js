import { useState } from "react";

export const useFormulario = (valorInicial = {}) => {
	const [formState, setformState] = useState(valorInicial);
	const [error, setError] = useState(false);

	const onInputChange = ({ target }) => {
		const { name, value } = target;
		setformState({
			...formState,
			[name]: value,
		});
	};

	const onResetForm = () => {
		setformState(valorInicial);

		// Esto era para enviar un msn de error al dar clic en reset con el input vacío
		// const { nombre } = formState;

		// if (nombre === "") {
		// 	setError("El campo ya está vacío");
		// } else {
		// 	setError(false);
		// }
	};

	// La valor del form formState, y la función para cambiarlo onInputChange
	return {
		...formState,
		formState,
		onInputChange,
		onResetForm,
		error,
		setformState,
	};
};
