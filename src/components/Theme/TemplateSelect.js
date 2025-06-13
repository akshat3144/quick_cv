import { Box, Flex, Text, useRadioGroup, HStack } from "@chakra-ui/react";
import React from "react";
import { useResume } from "../../Context";
import { MdViewColumn, MdViewStream } from "react-icons/md";
import TemplateOption from "./TemplateOption";

const TemplateSelect = () => {
  const { template, setTemplate } = useResume();

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "template",
    defaultValue: template,
    onChange: setTemplate,
  });

  const group = getRootProps();

  const options = [
    { value: "divider", icon: MdViewColumn, label: "Divider" },
    { value: "horizontal", icon: MdViewStream, label: "Horizontal" },
  ];

  return (
    <Box>
      <Text mb={2} color="white" fontWeight="medium">
        Resume Template
      </Text>
      <Flex justifyContent={{ base: "center", sm: "flex-start" }}>
        <HStack
          {...group}
          spacing={4}
          bg="whiteAlpha.100"
          p={3}
          borderRadius="md"
        >
          {options.map((option) => {
            const radio = getRadioProps({ value: option.value });
            return (
              <TemplateOption
                key={option.value}
                icon={option.icon}
                data-tooltip={option.label}
                {...radio}
              >
                {option.label}
              </TemplateOption>
            );
          })}
        </HStack>
      </Flex>
    </Box>
  );
};

export default TemplateSelect;
