import { PlatForm } from "../hooks/useGames";
import {
	FaWindows,
	FaAndroid,
	FaApple,
	FaXbox,
	FaPlaystation,
	FaLinux,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

const PlatformIconList = ({ platforms }: { platforms: PlatForm[] }) => {
	const iconMap: { [key: string]: IconType } = {
		pc: FaWindows,
		playstation: FaPlaystation,
		xbox: FaXbox,
		mac: FaApple,
		linux: FaLinux,
		android: FaAndroid,
		ios: MdPhoneIphone,
		nintendo: SiNintendo,
		web: BsGlobe,
	};
	return (
		<HStack marginY={'10px'}>
			{platforms.map(platform => (
				<Icon key={platform.id} as={iconMap[platform.slug]} color={"gray.500"} />
			))}
		</HStack>
	);
};

export default PlatformIconList;
