import {
  Box,
  HStack,
  Text,
  useRadioGroup,
  IconButton,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { useResume } from "../../Context";
import ThemeOption from "./ThemeOption";
import { MdChevronLeft, MdChevronRight, MdColorLens } from "react-icons/md";

const ThemeSelect = () => {
  const options = [
    { color: "primary.500", name: "Blue" },
    { color: "#2563EB", name: "Royal Blue" },
    { color: "#0891B2", name: "Teal" },
    { color: "#4F46E5", name: "Indigo" },
    { color: "#059669", name: "Emerald" },
    { color: "#7C3AED", name: "Violet" },
    { color: "#DC2626", name: "Ruby Red" },
    { color: "#EA580C", name: "Burnt Orange" },
    { color: "#0F172A", name: "Navy" },
    { color: "#4B5563", name: "Slate" },
    { color: "#9D174D", name: "Magenta" },
  ];

  const { theme, setTheme } = useResume();
  const scrollRef = useRef();
  const colorInputRef = useRef();

  // Hide custom color picker on mobile devices
  const showCustomColor = useBreakpointValue({ base: false, md: true });

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

  const handleColorInputChange = (e) => {
    setTheme(e.target.value);
  };

  const openColorPicker = () => {
    if (colorInputRef.current) {
      colorInputRef.current.click();
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
            {/* Custom Color Option - Only shown on larger screens */}
            {showCustomColor && (
              <Box as="label" position="relative" cursor="pointer">
                <ThemeOption
                  data-tooltip="Custom Color"
                  icon={<MdColorLens size="20px" color="black" />}
                  onClick={openColorPicker}
                >
                  custom
                </ThemeOption>
                <input
                  type="color"
                  ref={colorInputRef}
                  onChange={handleColorInputChange}
                  style={{
                    opacity: 0,
                    position: "absolute",
                    width: "1px",
                    height: "1px",
                    overflow: "hidden",
                  }}
                />
              </Box>
            )}
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
