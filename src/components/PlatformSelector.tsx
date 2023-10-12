import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
import usePlatforms from "../hooks/usePlatforms";
import { PlatForm } from "../hooks/useGames";
type Props = {
    onSelectPlatform:(platform:PlatForm) => void
    selectedPlatform:PlatForm|null
}
const PlatformSelector = ({onSelectPlatform,selectedPlatform}:Props) => {
	const { data, error } = usePlatforms();
	if (error) return null;
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BiChevronDown />}>
				{selectedPlatform?.name || 'Platform'}
			</MenuButton>
			<MenuList>
				{data.map(platform => (
					<MenuItem onClick={()=>onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default PlatformSelector;
