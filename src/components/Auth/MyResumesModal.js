import React, { useState, useEffect, useCallback } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  VStack,
  HStack,
  Box,
  Text,
  Spinner,
  Icon,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import api from "../../services/api";
import { MdDelete, MdEdit } from "react-icons/md";
import { useResume } from "../../Context";
import AuthModal from "./AuthModal";

const MyResumesModal = ({ isOpen, onClose, onResumeSelect }) => {
  const [resumes, setResumes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );
  const toast = useToast();

  // Define fetchResumes as a useCallback to avoid recreation on each render
  const fetchResumes = useCallback(async () => {
    let isMounted = true;
    setIsLoading(true);
    setError("");

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsAuthenticated(false);
        return;
      }

      const response = await api.get("/resumes", {
        headers: {
          "x-auth-token": token,
        },
      });

      if (isMounted) {
        setResumes(response.data);
      }
    } catch (error) {
      console.error("Fetch resumes error:", error);
      if (error.response?.status === 401) {
        setIsAuthenticated(false);
        localStorage.removeItem("token");
      } else {
        setError("Failed to load your resumes. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    let isMounted = true;

    if (isOpen && isAuthenticated) {
      fetchResumes();
    }

    return () => {
      isMounted = false;
    };
  }, [isOpen, isAuthenticated, fetchResumes]);

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
    fetchResumes();
  };

  const handleDeleteResume = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await api.delete(`/resumes/${id}`, {
        headers: {
          "x-auth-token": token,
        },
      });

      setResumes(resumes.filter((resume) => resume._id !== id));
      toast({
        title: "Resume deleted",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Delete resume error:", error);
      const errorMessage =
        error.response?.data?.msg || "Failed to delete resume";
      toast({
        title: "Error",
        description: errorMessage,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleResumeClick = async (id) => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem("token");
      const response = await api.get(`/resumes/${id}`, {
        headers: {
          "x-auth-token": token,
        },
      });

      onResumeSelect(response.data);
      onClose();
    } catch (error) {
      console.error("Get resume error:", error);
      toast({
        title: "Error",
        description: "Failed to load resume",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent bg="darkBg.800" color="textColors.light">
        <ModalHeader>My Saved Resumes</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          {!isAuthenticated ? (
            <Box>
              <Text mb={4}>
                You need to sign in to view your saved resumes.
              </Text>
              <Box display="flex" justifyContent="center">
                <AuthModal onAuthSuccess={handleAuthSuccess} />
              </Box>
            </Box>
          ) : (
            <VStack spacing={4} align="stretch">
              {isLoading ? (
                <Box textAlign="center" py={6}>
                  <Spinner size="xl" color="primary.500" />
                  <Text mt={4}>Loading your resumes...</Text>
                </Box>
              ) : error ? (
                <Text color="red.300">{error}</Text>
              ) : resumes.length === 0 ? (
                <Text textAlign="center" py={6}>
                  You don't have any saved resumes yet.
                </Text>
              ) : (
                resumes.map((resume) => (
                  <Box
                    key={resume._id}
                    p={4}
                    borderWidth="1px"
                    borderRadius="md"
                    bg="darkBg.700"
                    _hover={{ bg: "darkBg.600" }}
                    cursor="pointer"
                    position="relative"
                    onClick={() => handleResumeClick(resume._id)}
                  >
                    <HStack justifyContent="space-between">
                      <VStack align="start" spacing={0}>
                        <Text fontWeight="medium">{resume.title}</Text>
                        <Text fontSize="sm" color="whiteAlpha.700">
                          Last updated:{" "}
                          {new Date(resume.lastUpdated).toLocaleDateString()}
                        </Text>
                      </VStack>

                      <IconButton
                        icon={<MdDelete />}
                        colorScheme="red"
                        variant="ghost"
                        size="sm"
                        aria-label="Delete resume"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteResume(resume._id);
                        }}
                      />
                    </HStack>
                  </Box>
                ))
              )}
            </VStack>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default MyResumesModal;
