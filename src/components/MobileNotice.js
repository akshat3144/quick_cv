import React, { useState } from "react";
import { Box, Text, Heading, Button, Link } from "@chakra-ui/react";
import { MdDesktopWindows } from "react-icons/md";

const MobileNotice = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleContinue = (e) => {
    e.preventDefault();
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
      zIndex="1000"
      bg="rgba(0, 0, 0, 0.9)"
      p={6}
      display={{ base: "flex", md: "none" }}
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <MdDesktopWindows size="60px" color="#2894ec" />
      <Heading as="h2" size="xl" color="white" mt={6} mb={4}>
        Best on Desktop
      </Heading>
      <Text color="whiteAlpha.800" fontSize="md" mb={6} lineHeight={1.6}>
        QuickCV is designed for optimal experience on larger screens. For the
        best resume building experience, please use a desktop or laptop
        computer.
      </Text>
      <Button
        onClick={handleContinue}
        bg="primary.500"
        color="white"
        _hover={{ bg: "primary.600" }}
        size="lg"
        boxShadow="0 4px 12px rgba(40, 148, 236, 0.4)"
        mb={4}
      >
        Continue Anyway
      </Button>
      <Text fontSize="sm" color="whiteAlpha.600">
        Note: Some features may not work properly on mobile devices.
      </Text>
    </Box>
  );
};

export default MobileNotice;
