import {
  Box,
  Container,
  Stack,
  Text,
  Heading,
  Button,
  useToast,
  Flex,
  VStack,
  HStack,
  Divider,
  Center,
} from "@chakra-ui/react";
import Builder from "./Builder";
import ResumePreview from "./ResumePreview";
import ThemeSelect from "./Theme/ThemeSelect";
import TemplateSelect from "./Theme/TemplateSelect";
import SectionControl from "./Theme/SectionControl";
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
      bg={"darkBg.900"}
      minW={"full"}
      py={14}
      id="builder"
      backgroundImage="radial-gradient(circle at 10% 20%, rgba(18, 19, 24, 0.8) 0%, rgba(26, 28, 35, 1) 90.2%)"
    >
      <Container maxW="6xl" textAlign="center" mb={8}>
        <Heading
          as="h2"
          size="2xl"
          color={"textColors.light"}
          fontFamily="Poppins"
          fontWeight={"semibold"}
          mb={4}
        >
          Builder Dashboard
        </Heading>
        <Text color="textColors.subtle" fontSize="lg" maxW="3xl" mx="auto">
          Customize your resume with our easy-to-use builder. Select colors,
          templates, add your details, and download when ready.
        </Text>
      </Container>

      <Container maxW={"7xl"} px={{ base: 4, md: 8 }} my={8}>
        <VStack spacing={5} align="stretch">
          <Box bg="darkBg.800" p={{ base: 4, md: 5 }} borderRadius="lg">
            <Heading as="h3" size="md" color="textColors.light" mb={5}>
              Template Settings
            </Heading>

            <VStack spacing={6} align="stretch">
              {/* Desktop: Display theme and template in one row */}
              <Flex
                direction={{ base: "column", md: "row" }}
                gap={{ base: 6, md: 8 }}
                justify="space-between"
                align={{ base: "stretch", md: "flex-start" }}
              >
                <Box flex="1">
                  <ThemeSelect />
                </Box>
                <Box flex="1">
                  <TemplateSelect />
                </Box>
              </Flex>

              {/* Add section control here */}
              <SectionControl />

              {/* Center download button on desktop */}
              <Center pt={4}>
                <Button
                  rightIcon={<MdOutlineFileDownload />}
                  onClick={handlePrint}
                  bg="primary.500"
                  color="white"
                  size="lg"
                  width={{ base: "full", md: "auto" }}
                  _hover={{ bg: "primary.600" }}
                  boxShadow="0 4px 12px rgba(40, 148, 236, 0.4)"
                >
                  Download Resume
                </Button>
              </Center>
            </VStack>
          </Box>
        </VStack>
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
