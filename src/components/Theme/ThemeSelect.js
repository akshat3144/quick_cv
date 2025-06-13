import { Box, HStack, Text, useRadioGroup } from "@chakra-ui/react";
import React from "react";
import { useResume } from "../../Context";
import ThemeOption from "./ThemeOption";

const ThemeSelect = () => {
  const options = [
    { color: "primary.500", name: "Blue" },
    { color: "purple.400", name: "Purple" },
    { color: "green.400", name: "Green" },
    { color: "cyan.400", name: "Cyan" },
    { color: "gray.400", name: "Gray" },
    { color: "red.400", name: "Red" },
    { color: "orange.400", name: "Orange" },
    { color: "#F15BA6", name: "Pink" },
  ];

  const { theme, setTheme } = useResume();

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "color",
    value: theme,
    onChange: setTheme,
  });

  const group = getRootProps();

  return (
    <Box>
      <Text mb={2} color="white" fontWeight="medium">
        Select Theme Color
      </Text>
      <HStack
        {...group}
        spacing={3}
        bg="whiteAlpha.100"
        p={3}
        borderRadius="md"
      >
        {options.map((option) => {
          const radio = getRadioProps({ value: option.color });
          return (
            <ThemeOption
              key={option.color}
              data-tooltip={option.name}
              {...radio}
            >
              {option.color}
            </ThemeOption>
          );
        })}
      </HStack>
    </Box>
  );
};

export default ThemeSelect;
