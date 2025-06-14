import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useDisclosure,
  Box,
  Text,
} from "@chakra-ui/react";
import Login from "./Login";
import Register from "./Register";

const AuthModal = ({ onAuthSuccess }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [tabIndex, setTabIndex] = useState(0);

  const handleAuthSuccess = (token) => {
    localStorage.setItem("token", token);
    onAuthSuccess(token);
    onClose();
  };

  const handleSkip = () => {
    onClose();
  };

  return (
    <>
      <Button
        onClick={onOpen}
        bg="primary.500"
        color="white"
        _hover={{ bg: "primary.600" }}
        mr={2}
      >
        Save Your Work
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="md">
        <ModalOverlay />
        <ModalContent bg="darkBg.800" color="textColors.light">
          <ModalHeader>Save Your Resume</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Text mb={4}>
              Sign in or create an account to save your resume and access it
              later from any device.
            </Text>

            <Tabs
              variant="soft-rounded"
              colorScheme="primary"
              index={tabIndex}
              onChange={(index) => setTabIndex(index)}
              mb={4}
            >
              <TabList>
                <Tab>Login</Tab>
                <Tab>Register</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Login onLoginSuccess={handleAuthSuccess} />
                </TabPanel>
                <TabPanel>
                  <Register onRegisterSuccess={handleAuthSuccess} />
                </TabPanel>
              </TabPanels>
            </Tabs>

            <Box textAlign="center" mt={4}>
              <Text mb={2} color="whiteAlpha.700" fontSize="sm">
                Want to continue without saving?
              </Text>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleSkip}
                color="whiteAlpha.700"
                _hover={{ color: "white" }}
              >
                Continue as Guest
              </Button>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AuthModal;
