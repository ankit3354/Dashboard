import React, { Fragment } from "react";
import {
  Text,
  Stack,
  Flex,
  Button,
  Grid,
  Icon,
  Divider,
} from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/customCard";
import { BsCurrencyRupee } from "react-icons/bs";
import { FaBtc } from "react-icons/fa";

function TransactionSection() {
  const transections = [
    {
      id: "1",
      icon: BsCurrencyRupee,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: "2",
      icon: FaBtc,
      text: "BTC Shell",
      amount: "+ ₹38,023,32",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: "3",
      icon: BsCurrencyRupee,
      text: "INR Deposit",
      amount: "+ ₹81,138,10",
      timestamp: "2022-06-09 7:06 PM",
    },
  ];
  return (
    <CustomCard h="full">
      <Text mb={"6"} fontSize={"sm"} color={"black.80"}>
        Transections
      </Text>
      <Stack>
        {transections.map((item, i) => (
          <Fragment key={item.id}>
            {i !== 0 && <Divider mt="4" />}

            <Flex spacing="4">
              <Grid
                placeItems={"center"}
                bg={"black.5"}
                boxSize={"10"}
                borderRadius="10"
              >
                <Icon as={item.icon} />
              </Grid>
              <Flex justify={"space-between"} w={"full"}>
                <Stack spacing={"0"}>
                  <Text textStyle={"h6"} color={"black.80"}>
                    {item.text}
                  </Text>
                  <Text fontSize={"sm"} color={"black.40"}>
                    {item.timestamp}
                  </Text>
                </Stack>
                <Text textStyle={"h6"}>{item.amount}</Text>
              </Flex>
            </Flex>
          </Fragment>
        ))}
      </Stack>

      <Button w={"full"} mt="6">
        View All
      </Button>
    </CustomCard>
  );
}

export default TransactionSection;
