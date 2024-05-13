import React from "react";
import {
  Box,
  Button,
  Card,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";

function Contactcard() {
  return (
    <Card p={"6"} borderRadius={"1rem"} flexGrow={"1"}>
      <Stack spacing={"6"}>
        <Text fontWeight={"medium"} fontSize={"sm"}>
          You will recive response within 24 hours of time of submit.
        </Text>
        <HStack
          flexDir={{
            base: "column",
            md: "row",
          }}
        >
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type="text" placeholder="enter your name..." />
          </FormControl>
          <FormControl>
            <FormLabel>Surename</FormLabel>
            <Input type="text" placeholder="enter your surename..." />
          </FormControl>
        </HStack>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="enter your email..." />
        </FormControl>
        <FormControl>
          <FormLabel>Message</FormLabel>
          <Input type="text" placeholder="enter your message..." />
        </FormControl>
        <Checkbox defaultChecked>
          <Text fontSize={"xs"}>
            I agree with
            <Box as="span" color="p.purple">
              Terms & Conditions.
            </Box>
          </Text>
        </Checkbox>

        <Stack>
          <Button fontSize={"sm"}>Send a message</Button>
          <Button fontSize={"sm"} colorScheme="gray">
            Book a metting
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
}

export default Contactcard;
