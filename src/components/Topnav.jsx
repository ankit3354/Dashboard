import {
  Flex,
  Container,
  Heading,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  HStack,
  Box,
  Icon,
} from "@chakra-ui/react";
import { FaCircleUser } from "react-icons/fa6";
import { RiMenu2Fill } from "react-icons/ri";

function Topnav({ title, onOpen }) {
  return (
    <Box px="4" bg="white">
      <HStack maxWidth={"70rem"} h="16" justify={"space-between"} mx={"auto"}>
        <Icon
          as={RiMenu2Fill}
          onClick={onOpen}
          display={{
            base: "block",
            lg: "none",
          }}
        />
        <Heading fontSize={"28px"} fontWeight={"medium"}>
          {title}
        </Heading>
        <Menu>
          <MenuButton>
            <Icon fontSize={"24px"} as={FaCircleUser} />
          </MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
}

export default Topnav;
