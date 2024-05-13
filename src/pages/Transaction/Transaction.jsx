import DashboardLayout from "../../components/DashboardLayout";
import {
  Flex,
  Tabs,
  Card,
  Button,
  TabList,
  Tab,
  Tag,
  Icon,
  InputGroup,
  InputLeftElement,
  Input,
  Stack,
  HStack,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import { MdOutlineFileDownload } from "react-icons/md";
import Transactiontable from "./Transactiontable";
import { IoSearch } from "react-icons/io5";

function Transaction() {
  const tabs = [
    {
      name: "All",
      count: "349",
    },
    {
      name: "Deposite",
      count: "114",
    },
    {
      name: "Witdraw",
      count: "55",
    },
    {
      name: "Trade",
      count: "89",
    },
  ];
  return (
    <DashboardLayout title="Transactions">
      <Flex justify="end" mt="6" mb="3">
        <Button leftIcon={<Icon as={MdOutlineFileDownload} />}>
          Export CSV
        </Button>
      </Flex>
      <Card borderRadius="1rem">
        <Tabs>
          <TabList
            pt="4"
            display="flex"
            w="full"
            justifyContent="space-between"
          >
            <HStack>
              {tabs.map((tab) => (
                <Tab key={tab.name} display="flex" gap="2" pb="4">
                  {tab.name}{" "}
                  <Tag colorScheme="gray" borderRadius="full">
                    {tab.count}
                  </Tag>
                </Tab>
              ))}
            </HStack>

            <InputGroup maxW="200px" pr="6">
              <InputLeftElement pointerEvents="none" cursor={"pointer"}>
                <Icon as={IoSearch} />
              </InputLeftElement>
              <Input type="tel" placeholder="Search..." />
            </InputGroup>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Transactiontable />
            </TabPanel>
            <TabPanel>
              <Transactiontable />
            </TabPanel>
            <TabPanel>
              <Transactiontable />
            </TabPanel>
            <TabPanel>
              <Transactiontable />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
}

export default Transaction;
