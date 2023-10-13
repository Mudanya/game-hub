import {Text} from '@chakra-ui/react'
const emoJiMap:{[key:number]:string} = {
    3:'😏',
    4:'👍',
    5:'🎯'
}
const Emoji = ({rating_top}:{rating_top:number}) => {
    if(rating_top < 3) return null
  return (
    <Text marginTop={2}>
        {emoJiMap[rating_top]}
    </Text>
  )
}

export default Emoji