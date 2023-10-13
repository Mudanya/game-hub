import { GameQuery } from "../App";
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

const useGames = (
	gameQuery:GameQuery
) =>
	useData<Game>(
		"games",
		{ params: { genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id,ordering:gameQuery.ordering } },
		[gameQuery]
	);
export default useGames;
