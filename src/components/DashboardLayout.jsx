import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";
import SideNav from "./SideNav";
import Topnav from "./Topnav";
import SideDrawer from "./SideDrawer";

function DashboardLayout({ title, children }) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Flex>
      <Box
        display={{
          base: "none",
          lg: "flex",
        }}
      >
        <SideNav />
      </Box>
      <SideDrawer isOpen={isOpen} onClose={onClose} />
      <Box flexGrow={"1"}>
        <Topnav title={title} onOpen={onOpen} />
        <Container
          overflowX={"hidden"}
          overflowY={"auto"}
          mt="6"
          h={"calc(100vh - 88px)"}
          maxW={"70rem"}
        >
          {children}
        </Container>
      </Box>
    </Flex>
  );
}

export default DashboardLayout;
