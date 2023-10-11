import { HStack, List, ListItem,Image,Text, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCropImageSize from "../services/getCropImageSize";

const GenreList = () => {
	const { data, error,isLoading } = useGenres();
    if(error) return null;
    if(isLoading) return <Spinner/>
	return (
			<List>
				{data.map(genre => (
					<ListItem key={genre.id}>
                        <HStack paddingY={'5px'}>
                            <Image borderRadius={8} src={getCropImageSize(genre.image_background)} boxSize={'32px'}/>
                            <Text fontSize={'lg'}>{genre.name}</Text>
                        </HStack>
                        
                        </ListItem>
				))}
            </List>
	);
};

export default GenreList;
