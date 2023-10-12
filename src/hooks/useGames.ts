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
	selectedGenre: Genre | null,
	selectedPlaform: PlatForm | null
) =>
	useData<Game>(
		"games",
		{ params: { genres: selectedGenre?.id, platforms: selectedPlaform?.id } },
		[selectedGenre?.id, selectedPlaform?.id]
	);
export default useGames;
