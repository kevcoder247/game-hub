import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

const NavBar = () => {
	return (
		<HStack padding="10px">
			<Image src={logo} boxSize={'60px'} />
			<SearchInput />
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;

//07b51d256fe2441ba3afa1f3e43f853a
