import { Card, CardBody, Heading, Image,HStack} from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import PlatformIconList from "./PlatformIconList"
import CriticScore from "./CriticScore"
import getCropImageSize from "../services/getCropImageSize"
import Emoji from "./Emoji"


const GameCard = ({name,background_image,parent_platforms,metacritic,rating_top}:Game) => {
  return (
    <Card >
        <Image src={getCropImageSize(background_image)} aspectRatio={3/2}/>
        <CardBody>
            <HStack justifyContent={'space-between'} marginBottom={2}>
                <PlatformIconList platforms={parent_platforms.map(({platform})=>platform)} /> 
                <CriticScore score={metacritic}/>  
            </HStack>
            <Heading fontSize={'2xl'}>{name} <Emoji rating_top={rating_top}/></Heading>
        </CardBody>
    </Card>
  )
}

export default GameCard