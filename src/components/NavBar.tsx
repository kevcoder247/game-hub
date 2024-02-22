import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
	return (
		<HStack justifyContent="space-between" padding="10px">
			<Image src={logo} boxSize={'60px'} />
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;

//07b51d256fe2441ba3afa1f3e43f853a
