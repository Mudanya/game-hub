import useGames from "../hooks/useGames";
import { Text,SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
	const { error, games,isLoading } = useGames();
    const skeletons = [1,2,3,4,5,6,7,8,9]
	return (
		<>
			{error && <Text>{error}</Text>}
			<SimpleGrid columns={{sm:1,md:2,lg:3}} spacing={10} padding={'10px'}>
                {isLoading && 
                skeletons.map((skel)=><GameCardSkeleton key={skel} />)
                }
				{games.map(game => (
                    
                    <GameCard key={game.id} {...game}/>
				))}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
