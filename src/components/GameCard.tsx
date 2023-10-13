import { Card, CardBody, Heading, Image,HStack} from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import PlatformIconList from "./PlatformIconList"
import CriticScore from "./CriticScore"
import getCropImageSize from "../services/getCropImageSize"


const GameCard = ({name,background_image,parent_platforms,metacritic}:Game) => {
  return (
    <Card >
        <Image src={getCropImageSize(background_image)} aspectRatio={3/2}/>
        <CardBody>
            <Heading fontSize={'2xl'}>{name}</Heading>
            <HStack justifyContent={'space-between'}>
                <PlatformIconList platforms={parent_platforms.map(({platform})=>platform)} /> 
                <CriticScore score={metacritic}/>  
            </HStack>
        </CardBody>
    </Card>
  )
}

export default GameCard