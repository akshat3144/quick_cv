import { Box, useRadio, Tooltip, Center } from "@chakra-ui/react";
import React from "react";

const ThemeOption = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);
  const { children, icon, ...rest } = props;

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  // Determine if this is a valid color hex value
  const isHexColor = /^#([0-9A-F]{3}){1,2}$/i.test(children);
  const bgColor = isHexColor
    ? children
    : children === "custom"
    ? "gray.100"
    : children;

  return (
    <Tooltip label={props["data-tooltip"]}>
      <Box as="label" {...rest}>
        <input {...input} />
        <Box
          {...checkbox}
          cursor={"pointer"}
          borderWidth={"1px"}
          rounded={"full"}
          boxShadow={"sm"}
          bg={bgColor}
          _checked={{
            borderColor: "white",
          }}
          p={5}
          position="relative"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {icon && (
            <Center position="absolute" top={0} right={0} bottom={0} left={0}>
              {icon}
            </Center>
          )}
        </Box>
      </Box>
    </Tooltip>
  );
};

export default ThemeOption;
