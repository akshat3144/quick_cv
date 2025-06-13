import {
  Box,
  Container,
  Stack,
  Text,
  HStack,
  Heading,
  Button,
  useToast,
  Flex,
} from "@chakra-ui/react";
import Builder from "./Builder";
import ResumePreview from "./ResumePreview";
import ThemeSelect from "./Theme/ThemeSelect";
import { useReactToPrint } from "react-to-print";
import { useResume } from "../Context";
import { MdOutlineFileDownload } from "react-icons/md";

const Main = () => {
  const toast = useToast();
  const { printElem } = useResume();

  const handlePrint = useReactToPrint({
    content: () => printElem.current,
    onAfterPrint: () =>
      toast({
        title: "Resume downloaded successfully!",
        status: "success",
        duration: 3000,
        isClosable: true,
      }),
  });

  return (
    <Box
      bg={"black"}
      minW={"full"}
      py={14}
      id="builder"
      backgroundImage="radial-gradient(circle at 10% 20%, rgba(0, 0, 0, 0.8) 0%, rgba(10, 10, 10, 1) 90.2%)"
    >
      <Container maxW="6xl" textAlign="center" mb={8}>
        <Heading
          as="h2"
          size="2xl"
          color={"white"}
          fontFamily="Poppins"
          fontWeight={"semibold"}
          mb={4}
        >
          Builder Dashboard
        </Heading>
        <Text color="whiteAlpha.700" fontSize="lg" maxW="3xl" mx="auto">
          Customize your resume with our easy-to-use builder. Select colors, add
          your details, and download when ready.
        </Text>
      </Container>

      <Container maxW={"7xl"} px={8} my={8}>
        <Flex
          justifyContent={"space-between"}
          alignItems="center"
          pt={5}
          direction={{ base: "column", sm: "row" }}
          gap={4}
        >
          <ThemeSelect />
          <Button
            rightIcon={<MdOutlineFileDownload />}
            onClick={handlePrint}
            bg="primary.500"
            color="white"
            size="lg"
            _hover={{ bg: "primary.600" }}
            boxShadow="0 4px 12px rgba(40, 148, 236, 0.4)"
          >
            Download Resume
          </Button>
        </Flex>
      </Container>

      <Stack
        direction={{ base: "column", lg: "row" }}
        gap={8}
        mx={{ base: 4, md: 8, lg: 14 }}
        my={10}
        alignItems={"flex-start"}
        justifyContent={"center"}
      >
        <Builder />
        <ResumePreview />
      </Stack>
    </Box>
  );
};

export default Main;
