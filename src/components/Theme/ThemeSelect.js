import {
  Box,
  HStack,
  Text,
  useRadioGroup,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { useResume } from "../../Context";
import ThemeOption from "./ThemeOption";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const ThemeSelect = () => {
  const options = [
    { color: "primary.500", name: "Blue" },
    { color: "#2563EB", name: "Royal Blue" }, // Professional blue
    { color: "#0891B2", name: "Teal" }, // Modern teal
    { color: "#4F46E5", name: "Indigo" }, // Deep indigo
    { color: "#059669", name: "Emerald" }, // Rich emerald
    { color: "#7C3AED", name: "Violet" }, // Vibrant violet
    { color: "#DC2626", name: "Ruby Red" }, // Professional red
    { color: "#EA580C", name: "Burnt Orange" }, // Warm orange
    { color: "#0F172A", name: "Navy" }, // Dark navy
    { color: "#4B5563", name: "Slate" }, // Business gray
    { color: "#9D174D", name: "Magenta" }, // Deep magenta
  ];

  const { theme, setTheme } = useResume();
  const scrollRef = useRef();

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "color",
    value: theme,
    onChange: setTheme,
  });

  const group = getRootProps();

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 100;
      const newPosition =
        direction === "left"
          ? scrollRef.current.scrollLeft - scrollAmount
          : scrollRef.current.scrollLeft + scrollAmount;

      scrollRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box>
      <Text mb={2} color="white" fontWeight="medium">
        Select Theme Color
      </Text>
      <Flex alignItems="center">
        <IconButton
          icon={<MdChevronLeft />}
          onClick={() => scroll("left")}
          variant="ghost"
          color="white"
          aria-label="Scroll left"
          size="sm"
          display={{ base: "flex", md: "none" }}
          _focus={{
            bg: "transparent",
            boxShadow: "none",
          }}
          _hover={{
            bg: "whiteAlpha.200",
          }}
        />
        <Box position="relative" width="full" overflow="hidden">
          <HStack
            {...group}
            spacing={3}
            bg="whiteAlpha.100"
            p={3}
            borderRadius="md"
            overflowX="auto"
            ref={scrollRef}
            css={{
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
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
        <IconButton
          icon={<MdChevronRight />}
          onClick={() => scroll("right")}
          variant="ghost"
          color="white"
          aria-label="Scroll right"
          size="sm"
          display={{ base: "flex", md: "none" }}
          _focus={{
            bg: "transparent",
            boxShadow: "none",
          }}
          _hover={{
            bg: "whiteAlpha.200",
          }}
        />
      </Flex>
    </Box>
  );
};

export default ThemeSelect;
