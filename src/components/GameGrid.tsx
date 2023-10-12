import useGames, { PlatForm } from "../hooks/useGames";
import { Text,SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";

type Props = {
    selectedGenre:Genre | null
    selectedPlaform:PlatForm | null
}

const GameGrid = ({selectedGenre,selectedPlaform}:Props) => {
	const { error, data,isLoading } = useGames(selectedGenre,selectedPlaform);
    const skeletons = [1,2,3,4,5,6,7,8,9]
	return (
		<>
			{error && <Text>{error}</Text>}
			<SimpleGrid columns={{sm:1,md:2,lg:3}} spacing={3} padding={'10px'}>
                {isLoading && 
                skeletons.map((skel)=>
                <GameCardContainer key={skel}>
                    <GameCardSkeleton  />
                </GameCardContainer>
                )
                }
				{data.map(game => (
                    
                    <GameCardContainer key={game.id}>
                        <GameCard  {...game}/>
                    </GameCardContainer>
				))}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
