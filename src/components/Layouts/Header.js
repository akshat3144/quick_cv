import {
  Text,
  Button,
  Image,
  Heading,
  Stack,
  Flex,
  Box,
  Container,
  Icon,
} from "@chakra-ui/react";
import { MdDescription } from "react-icons/md";
import hero from "../../images/hero.svg";

const Header = () => {
  return (
    <>
      <Box
        bg="black"
        backgroundImage="linear-gradient(to bottom, rgba(0,0,0,0.8), black)"
        pt={8}
        pb={20}
      >
        <Container maxW="7xl" as="main">
          <Stack
            py={{ base: 12, md: 20 }}
            spacing={{ base: 8, md: 16 }}
            direction={{ base: "column", md: "row" }}
            align="center"
          >
            <Stack flex={1} direction={"column"} spacing={6}>
              <Box>
                <Text
                  color="primary.400"
                  fontWeight="bold"
                  fontSize="lg"
                  letterSpacing="wider"
                  mb={2}
                >
                  BUILD YOUR RESUME IN MINUTES
                </Text>
                <Heading
                  fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                  fontFamily="Pacifico"
                  color="white"
                  mb={4}
                >
                  QuickCV
                  <Box as="span" color="primary.500">
                    .
                  </Box>
                </Heading>
              </Box>
              <Text
                color={"whiteAlpha.800"}
                lineHeight={1.8}
                fontSize="xl"
                fontFamily="Poppins"
              >
                Fastest Resume Builder Available on Internet! Build, print, and
                download your professional resume in minutes with our
                easy-to-use tool.
              </Text>
              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={{ base: "column", sm: "row" }}
              >
                <Button
                  as={"a"}
                  href={"#builder"}
                  rounded={"md"}
                  size={"lg"}
                  px={8}
                  fontSize="lg"
                  bg={"primary.500"}
                  color={"white"}
                  _hover={{ bg: "primary.600" }}
                  leftIcon={<Icon as={MdDescription} />}
                  boxShadow="0 4px 14px rgba(40, 148, 236, 0.5)"
                >
                  Build Your Resume
                </Button>
              </Stack>
            </Stack>
            <Flex flex={1} justify="center">
              <Box
                position={"relative"}
                height={{ base: "300px", md: "450px" }}
                width={"full"}
                overflow={"hidden"}
                animation="float 3s ease-in-out infinite alternate"
                sx={{
                  "@keyframes float": {
                    "0%": { transform: "translateY(0px)" },
                    "100%": { transform: "translateY(-20px)" },
                  },
                }}
              >
                <Image
                  alt={"Hero Image"}
                  fit={"contain"}
                  align={"center"}
                  w={"100%"}
                  h={"100%"}
                  src={hero}
                  draggable="false"
                  filter="drop-shadow(0 0 12px rgba(40, 148, 236, 0.3))"
                />
              </Box>
            </Flex>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Header;
