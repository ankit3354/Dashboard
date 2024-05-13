import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import Supportcard from "./components/Supportcard";
import Contactcard from "./components/Contactcard";
import InfoCard from "../Dashboard/components/InfoCard";

import { IoMailOutline } from "react-icons/io5";
import { BiSolidMessageRounded } from "react-icons/bi";
import { Stack } from "@chakra-ui/react";

function Support() {
  return (
    <DashboardLayout>
      <Stack
        spacing="6"
        align={{
          base: "flex-start",
          sm: "center",
        }}
      >
        <Supportcard
          title={"Contact us"}
          text="Have a question or just want to know more? Feel free to reach out to
        us"
          icon={IoMailOutline}
          leftComponent={<Contactcard />}
        />
        <Supportcard
          title={"Live Chat"}
          text="Learn more about our real estate, mortgage, and  corporate account services"
          leftComponent={
            <InfoCard
              inverted={true}
              tagText="Contact"
              imgUrl="/public/grid_bg.svg"
              text="Learn more about our real estate, mortgage, and  corporate account services"
            />
          }
          icon={BiSolidMessageRounded}
        />
      </Stack>
    </DashboardLayout>
  );
}

export default Support;
