import React from "react";
import { CustomCard } from "../../../chakra/customCard";
import { Tag, Text } from "@chakra-ui/react";

function InfoCard({ imgUrl, tagtext, text, inverted }) {
  return (
    <CustomCard
      bgImage={imgUrl}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      bgColor={inverted ? "p.purple" : "white"}
    >
      <Tag
        color={inverted ? "p.purple" : "white"}
        bg={inverted ? "white" : "p.purple"}
        borderRadius={"full"}
      >
        {tagtext}
      </Tag>
      <Text mt={"4"} textStyle={"h5"} fontWeight={"medium"}>
        {text}
      </Text>
    </CustomCard>
  );
}

export default InfoCard;
