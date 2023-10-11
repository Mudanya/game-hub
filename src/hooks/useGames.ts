import { useEffect, useState } from "react";
import apiClient, { AxiosError, CanceledError } from "../services/api-client";
import useData from "./useData";

export type PlatForm = {
	id: number;
	name: string;
	slug: string;
};
export type Game = {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: PlatForm }[];
	metacritic: number;
};


const useGames = () => useData<Game>('games')
export default useGames;
