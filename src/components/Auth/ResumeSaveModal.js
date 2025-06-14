import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  useToast,
  Box,
  Text,
} from "@chakra-ui/react";
import api from "../../services/api";
import AuthModal from "./AuthModal";
import { useResume } from "../../Context";

const ResumeSaveModal = ({ isOpen, onClose, currentResumeId = null }) => {
  const toast = useToast();
  const [title, setTitle] = useState("My Resume");
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );

  const {
    about,
    educationList,
    skills,
    workList,
    projects,
    Certificates,
    AchievementList,
    theme,
    template,
    visibleSections,
  } = useResume();

  const handleAuthSuccess = (token) => {
    setIsAuthenticated(true);
  };

  const saveResume = async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem("token");
      const resumeData = {
        title,
        theme,
        template,
        visibleSections,
        about,
        educationList,
        skills,
        workList,
        projects,
        certificates: Certificates,
        achievementList: AchievementList,
        resumeId: currentResumeId,
      };

      await api.post("/resumes", resumeData, {
        headers: {
          "x-auth-token": token,
        },
      });

      toast({
        title: currentResumeId ? "Resume Updated" : "Resume Saved",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      onClose();
    } catch (error) {
      console.error("Save resume error:", error);
      toast({
        title: "Error",
        description: "Failed to save resume. Please try again.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="darkBg.800" color="textColors.light">
          <ModalHeader>
            {currentResumeId ? "Update Resume" : "Save Resume"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {!isAuthenticated ? (
              <Box>
                <Text mb={4}>
                  You need to sign in or create an account to save your resume.
                </Text>
                <Box display="flex" justifyContent="center">
                  <AuthModal onAuthSuccess={handleAuthSuccess} />
                </Box>
              </Box>
            ) : (
              <VStack spacing={4}>
                <FormControl>
                  <FormLabel>Resume Title</FormLabel>
                  <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter a title for your resume"
                    variant="filled"
                    bg="darkBg.700"
                    _hover={{ bg: "darkBg.600" }}
                    _focus={{ bg: "darkBg.600", borderColor: "primary.500" }}
                  />
                </FormControl>

                <Button
                  onClick={saveResume}
                  isLoading={isLoading}
                  bg="primary.500"
                  color="white"
                  _hover={{ bg: "primary.600" }}
                  width="full"
                  mt={4}
                >
                  {currentResumeId ? "Update Resume" : "Save Resume"}
                </Button>
              </VStack>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ResumeSaveModal;
