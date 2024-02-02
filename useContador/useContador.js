import { useState } from "react";

export const useContador = (valorInicial = 10) => {
	const [contador, setContador] = useState(valorInicial);

	const incrementar = (valor = 1) => {
		if (contador === 10) return;
		// setContador(contador + 1);
		setContador(contador + valor);
	};
	const descrementar = (valor) => {
		if (contador === 0) return;
		// setContador(contador - 1);
		setContador(contador - valor);
	};
	const reset = () => {
		setContador(valorInicial);
	};

	return {
		contador,
		incrementar,
		descrementar,
		reset,
	};
};
