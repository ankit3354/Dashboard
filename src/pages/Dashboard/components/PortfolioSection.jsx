import { HStack, Stack, Icon, Text, Tag, Button } from "@chakra-ui/react";
import React from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
import "../../../index.css";
import { FaCaretDown } from "react-icons/fa6";
import { TiArrowSortedUp } from "react-icons/ti";

function PortfolioSection() {
  return (
    <HStack
      justify="space-between"
      bg="white"
      borderRadius="xl"
      p="6"
      align={{
        base: "flex-start",
        xl: "center",
      }}
      flexDir={{
        base: "column",
        xl: "row",
      }}
      spacing={{
        base: 4,
        xl: 0,
      }}
    >
      <HStack
        spacing={{
          base: 0,
          xl: 16,
        }}
        align={{
          base: "flex-start",
          xl: "center",
        }}
        flexDir={{
          base: "column",
          xl: "row",
        }}
      >
        <Stack>
          <HStack color={"var(--80)"}>
            <Text fontSize={"sm"}>Total Portfolio Value</Text>
            <Icon as={IoInformationCircleOutline}></Icon>
          </HStack>
          <Text fontSize={"h2"} fontWeight={"medium"}>
            ₹ 112,312.24
          </Text>
        </Stack>

        <Stack>
          <HStack color={"var(--80)"}>
            <Text fontSize={"sm"}>Wallet Balances</Text>
          </HStack>

          <HStack
            spacing={2}
            align={{
              base: "flex-start",
              sm: "center",
            }}
            flexDir={{
              base: "column",
              sm: "row",
            }}
          >
            <HStack>
              <Text fontSize={"h2"} fontWeight={"medium"}>
                {" "}
                22.29402001{" "}
              </Text>
              <Tag colorScheme="gray">BTC</Tag>
            </HStack>
            <HStack>
              <Text fontSize={"h2"} fontWeight={"medium"}>
                ₹ 22.29402001{" "}
              </Text>
              <Tag colorScheme="gray">INR</Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>

      <HStack>
        <Button bg={"p.purple"}>
          <Icon as={FaCaretDown} fontSize={"md"} /> Deposite
        </Button>
        <Button bg={"p.purple"}>
          <Icon as={TiArrowSortedUp} fontSize={"xl"} /> Withdraw
        </Button>
      </HStack>
    </HStack>
  );
}

export default PortfolioSection;
