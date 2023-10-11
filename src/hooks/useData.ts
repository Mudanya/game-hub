import { useEffect, useState } from "react";
import apiClient, { AxiosError, CanceledError } from "../services/api-client";

type DataFetchResponse<T> = {
	count: number;
	results: T[];
};

const useData = <T>(endPoint: string) => {
	const [data, setData] = useState<T[]>([]);
	const [error, setError] = useState<string>("");
	const [isLoading, setLoading] = useState<boolean>(false);
	useEffect(() => {
		const controller = new AbortController();
		setLoading(true);
		apiClient
			.get<DataFetchResponse<T>>(endPoint, { signal: controller.signal })
			.then(res => {
				setData(res.data.results);
				console.log("Data:: ", res.data);
				setLoading(false);
			})
			.catch((err: AxiosError) => {
				if (err instanceof CanceledError) setError(err.message);
				setLoading(false);
			});
		return () => controller.abort();
	}, []);
	return { data, error, isLoading };
};

export default useData;
