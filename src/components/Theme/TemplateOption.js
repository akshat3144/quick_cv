import { Box, useRadio, Icon, Tooltip } from "@chakra-ui/react";
import React from "react";

const TemplateOption = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);
  const IconComponent = props.icon;

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Tooltip label={props["data-tooltip"]}>
      <Box as="label">
        <input {...input} />
        <Box
          {...checkbox}
          cursor={"pointer"}
          borderWidth={"1px"}
          rounded={"md"}
          boxShadow={"sm"}
          _checked={{
            borderColor: "primary.500",
            bg: "whiteAlpha.200",
            color: "primary.500",
          }}
          p={3}
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="whiteAlpha.800"
        >
          <Icon as={IconComponent} boxSize={6} />
        </Box>
      </Box>
    </Tooltip>
  );
};

export default TemplateOption;
