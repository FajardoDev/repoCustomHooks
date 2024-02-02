import { useEffect, useState } from "react";

export const useFetch = (url) => {
	const [state, setState] = useState({
		data: null,
		cargando: true,
		hasError: false,
	});

	const getQuotes = async () => {
		setState({
			...state,
			cargando: true,
		});

		const resp = await fetch(url);
		const data = await resp.json();

		// console.log(data);
		setState({
			data: data,
			cargando: false,
			hasError: false,
		});
	};

	useEffect(() => {
		getQuotes();
	}, [url]);

	// return state; Es lo mismo
	return {
		data: state.data,
		cargando: state.cargando,
		hasError: state.hasError,
	};
};
