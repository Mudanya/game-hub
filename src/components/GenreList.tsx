import { HStack, List, ListItem,Image,Text, Spinner, Button } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCropImageSize from "../services/getCropImageSize";
type Props = {
    onSelectGenre:(genre:Genre)=>void
    selectedGenre: Genre | null
}
const GenreList = ({onSelectGenre,selectedGenre}:Props) => {
	const { data, error,isLoading } = useGenres();
    if(error) return null;
    if(isLoading) return <Spinner/>
	return (
			<List>
				{data.map(genre => (
					<ListItem key={genre.id}>
                        <HStack paddingY={'5px'}>
                            <Image borderRadius={8} src={getCropImageSize(genre.image_background)} boxSize={'32px'}/>
                            <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' :'normal'} variant={'link'} fontSize={'lg'} onClick={()=>onSelectGenre(genre)}>{genre.name}</Button>
                        </HStack>
                        
                        </ListItem>
				))}
            </List>
	);
};

export default GenreList;
