import { useEffect, useState } from "react";
import apiClient, { AxiosError, CanceledError } from "../services/api-client";
import useData from "./useData";

export type Genre = {
	id: number;
	name: string;
    image_background:string
};


const useGenres = () => useData<Genre>('genres')

export default useGenres;
