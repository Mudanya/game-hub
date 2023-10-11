import { Box } from "@chakra-ui/react"
import { ReactNode } from "react"

type Props = {
    children:ReactNode
}
const GameCardContainer = ({children}:Props) => {
  return (
    <Box borderRadius={10} width={{"lg":'400px',"md":'250px'}} overflow="hidden">
        {children}
    </Box>
  )
}

export default GameCardContainer