import { Box, Flex, Show } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export type GameQuery = {
	genre: Genre | null;
	platform: Platform | null;
	ordering: string | null;
	search: string | null;
};
function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
	return (
		<>
			<Grid
				templateAreas={{
					base: `"nav" "main"`,
					lg: `"nav nav" "aside main"`,
				}}
				templateColumns={{
					base: "1fr",
					lg: "200px 1fr",
				}}
			>
				<GridItem area={"nav"}>
					<NavBar onSubmit={search => setGameQuery({ ...gameQuery, search })} />
				</GridItem>
				<Show above="lg">
					<GridItem area={"aside"} paddingX={"10px"}>
						<GenreList
							selectedGenre={gameQuery.genre}
							onSelectGenre={genre => setGameQuery({ ...gameQuery, genre })}
						/>
					</GridItem>
				</Show>
				<GridItem area={"main"}>
					<Box paddingLeft={3}>
						<GameHeading gameQuery={gameQuery}/>
						<Flex gap={5} marginBottom={5} >
							<PlatformSelector
								selectedPlatform={gameQuery.platform}
								onSelectPlatform={platform =>
									setGameQuery({ ...gameQuery, platform })
								}
							/>
							<SortSelector
								selectedOrder={gameQuery.ordering}
								onselectOrder={ordering =>
									setGameQuery({ ...gameQuery, ordering })
								}
							/>
						</Flex>
					</Box>

					<GameGrid {...gameQuery} />
				</GridItem>
			</Grid>
		</>
	);
}

export default App;
