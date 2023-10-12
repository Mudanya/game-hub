import { useEffect, useState } from "react";
import apiClient, { AxiosError, CanceledError } from "../services/api-client";
import useData from "./useData";
import { Genre } from "./useGenres";

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


const useGames = (selectedGenre:Genre | null) => useData<Game>('games',{params:{genres:selectedGenre?.id}},[selectedGenre?.id])
export default useGames;
