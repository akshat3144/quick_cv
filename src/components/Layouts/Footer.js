import {
  Text,
  Stack,
  HStack,
  Box,
  Container,
  IconButton,
  Link,
  Divider,
} from "@chakra-ui/react";
import { FaInstagram, FaLinkedin, FaGithub, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      bg="black"
      color="white"
      borderTopWidth="1px"
      borderColor="whiteAlpha.200"
    >
      <Container as={Stack} maxW={"10xl"} py={8} px={8} spacing={8}>
        <Divider borderColor="whiteAlpha.300" />

        <Stack
          direction={{ base: "column", md: "row" }}
          justify={"space-between"}
          align={"center"}
          spacing={4}
        >
          <HStack spacing={2} fontWeight={"medium"} fontSize={"md"}>
            <Text>&copy; 2024 QuickCV - Made with</Text>
            <Box color="red.400" display="inline-block">
              <FaHeart />
            </Box>
            <Text>by</Text>
            <Link
              href={"https://www.linkedin.com/in/akshat-gupta-840740285/"}
              target={"_blank"}
              color={"primary.500"}
              fontWeight="bold"
              _hover={{
                textDecoration: "none",
                color: "primary.400",
              }}
            >
              Akshat Gupta
            </Link>
          </HStack>

          <Stack direction={"row"} spacing={4}>
            <IconButton
              aria-label="GitHub"
              isRound
              as={"a"}
              href={"https://github.com/"}
              target="_blank"
              bg={"whiteAlpha.200"}
              color="white"
              _hover={{ bg: "whiteAlpha.300" }}
              icon={<FaGithub />}
            />
            <IconButton
              aria-label="LinkedIn"
              isRound
              as={"a"}
              href={"https://www.linkedin.com/in/akshat-gupta-840740285/"}
              target="_blank"
              bg={"primary.500"}
              color="white"
              _hover={{ bg: "primary.600" }}
              icon={<FaLinkedin />}
            />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
