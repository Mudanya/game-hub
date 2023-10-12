import { Show } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
function App() {
	const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
	const [selectetPlatform, setSelectedPlatform] = useState<Platform|null>(null)
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
					<NavBar />
				</GridItem>
				<Show above="lg">
					<GridItem area={"aside"} paddingX={"10px"}>
						<GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)} />
					</GridItem>
				</Show>
				<GridItem area={"main"}>
					<PlatformSelector selectedPlatform={selectetPlatform} onSelectPlatform={(platform) =>setSelectedPlatform(platform)}/>
					<GameGrid selectedGenre={selectedGenre} selectedPlaform={selectetPlatform}/>
				</GridItem>
			</Grid>
		</>
	);
}

export default App;
