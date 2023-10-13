import useGames from "../hooks/useGames";
import { Text, SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

const GameGrid = (gameQuery: GameQuery) => {
	const { error, data, isLoading } = useGames(gameQuery);
	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	if (error) return <Text>{error}</Text>;
	return (
		<SimpleGrid
			columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
			spacing={6}
			padding={"10px"}
		>
			{isLoading &&
				skeletons.map(skel => (
					<GameCardContainer key={skel}>
						<GameCardSkeleton />
					</GameCardContainer>
				))}
			{data.map(game => (
				<GameCardContainer key={game.id}>
					<GameCard {...game} />
				</GameCardContainer>
			))}
		</SimpleGrid>
	);
};

export default GameGrid;
