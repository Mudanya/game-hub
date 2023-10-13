import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BiChevronDown } from "react-icons/bi"

const sortOrders = [
    {value:'',label:'Relevance'},
    {value:'name',label:'Name'},
    {value:'-released',label:'Release date'},
    {value:'-added',label:'Date added'},
    {value:'-rating',label:'Average rating'},
    {value:'-metacritic',label:'Popularity'},
]
type Props = {
    onselectOrder:(order:string)=>void
    selectedOrder:string|null
}
const SortSelector = ({onselectOrder,selectedOrder}:Props) => {
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BiChevronDown />}>Order by: {sortOrders.find(order=>order.value === selectedOrder)?.label || 'Relevance' }</MenuButton>
        <MenuList>
            {sortOrders.map(order => <MenuItem key={order.value} value={order.value} onClick={()=>onselectOrder(order.value)}>{order.label}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default SortSelector