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
  keyframes,
} from "@chakra-ui/react";
import { MdDescription, MdKeyboardArrowDown } from "react-icons/md";
import hero from "../../images/hero.svg";

const Header = () => {
  // Define the animation for the scroll indicator
  const scrollAnimation = keyframes`
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px);
    }
  `;

  // Convert the keyframes to a style object
  const scrollIndicatorAnimation = `${scrollAnimation} 2s ease-in-out infinite`;

  const scrollToBuilder = () => {
    document.getElementById("builder").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Box
        bg="darkBg.900"
        backgroundImage="linear-gradient(to bottom, rgba(18, 19, 24, 0.8), var(--chakra-colors-darkBg-900))"
        pt={8}
        pb={20}
        position="relative"
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
                  color="textColors.light"
                  mb={4}
                >
                  QuickCV
                  <Box as="span" color="primary.500">
                    .
                  </Box>
                </Heading>
              </Box>
              <Text
                color={"textColors.muted"}
                lineHeight={1.8}
                fontSize="xl"
                fontFamily="Poppins"
              >
                Fastest Resume Builder Available on Internet! Build, and
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

        {/* Scroll Down Indicator */}
        <Box
          position="absolute"
          bottom="30px"
          left="50%"
          transform="translateX(-50%)"
          display="flex"
          flexDirection="column"
          alignItems="center"
          cursor="pointer"
          onClick={scrollToBuilder}
        >
          <Text color="textColors.light" fontSize="sm" mb={2} opacity={0.8}>
            Scroll Down
          </Text>
          <Box
            width="30px"
            height="50px"
            borderRadius="full"
            border="2px solid"
            borderColor="primary.500"
            display="flex"
            justifyContent="center"
            alignItems="flex-start"
            padding="5px"
          >
            <Icon
              as={MdKeyboardArrowDown}
              color="primary.500"
              boxSize={5}
              animation={scrollIndicatorAnimation}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Header;
