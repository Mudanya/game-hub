import { HStack,Image,Text } from "@chakra-ui/react"
import logo from '../assets/Soarex_logo-01.png'
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"

type Props = {
  onSubmit:(search:string) => void
}
const NavBar = ({onSubmit}:Props) => {
  return (
    <HStack justifyContent={'space-between'} padding={'10px'}>
        <Image src={logo} boxSize={"60px"}/>
        <SearchInput onSubmit={(search) => onSubmit(search)}/>
        <ColorModeSwitch/>
    </HStack>
  )
}

export default NavBar