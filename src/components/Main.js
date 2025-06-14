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
import { MdOutlineFileDownload, MdSave, MdFolderOpen } from "react-icons/md";
import AuthModal from "./Auth/AuthModal";
import ResumeSaveModal from "./Auth/ResumeSaveModal";
import MyResumesModal from "./Auth/MyResumesModal";
import { useState } from "react";

const Main = () => {
  const toast = useToast();
  const { printElem } = useResume();
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
  const [isMyResumesModalOpen, setIsMyResumesModalOpen] = useState(false);
  const [currentResumeId, setCurrentResumeId] = useState(null);

  // Get all the state and setter functions from your context
  const {
    about,
    setAbout,
    educationList,
    setEducationList,
    skills,
    setSkills,
    workList,
    setWorkList,
    projects,
    setProjects,
    Certificates,
    setCertificates,
    AchievementList,
    setAchievementList,
    theme,
    setTheme,
    template,
    setTemplate,
    visibleSections,
    setVisibleSections,
  } = useResume();

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

  // Now this will work correctly
  const loadResumeData = (resume) => {
    if (!resume) {
      toast({
        title: "Error loading resume",
        description: "Resume data is missing or invalid",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Set data with fallbacks to prevent undefined errors
    setAbout(resume.about || {});
    setEducationList(resume.educationList || []);
    setSkills(resume.skills || []);
    setWorkList(resume.workList || []);
    setProjects(resume.projects || []);
    setCertificates(resume.certificates || Certificates || []); // Note: Case difference
    setAchievementList(resume.achievementList || AchievementList || []);
    setTheme(resume.theme || "#10c4ec");
    setTemplate(resume.template || "divider");
    setVisibleSections(
      resume.visibleSections || {
        education: true,
        skills: true,
        work: true,
        projects: true,
        certificates: true,
        achievements: true,
      }
    );

    if (resume._id) {
      setCurrentResumeId(resume._id);
    }

    toast({
      title: "Resume loaded successfully",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

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
          Dashboard
        </Heading>
        <Text color="textColors.subtle" fontSize="lg" maxW="3xl" mx="auto">
          Customize your resume with our easy-to-use builder. Select colors,
          templates, add your details, and download when ready.
        </Text>
      </Container>

      <Container maxW={"7xl"} px={{ base: 4, md: 8 }} my={8}>
        <VStack spacing={10} align="stretch">
          <Box bg="darkBg.800" p={{ base: 4, md: 5 }} borderRadius="lg">
            <Heading as="h3" size="md" color="textColors.light" mb={5}>
              Template Settings
            </Heading>

            <VStack spacing={6} align="stretch">
              {/* Desktop: Display theme and template in one row */}
              <Flex
                direction={{ base: "column", md: "row" }}
                gap={{ base: 6, md: 48 }} // Increased gap from 8 to 12 for more space
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
                <VStack spacing={4} width="100%" align="center">
                  <Stack
                    spacing={{ base: 4, md: 4 }}
                    width={{ base: "100%", md: "auto" }}
                    direction={{ base: "column", md: "row" }}
                    justify="center"
                  >
                    <Button
                      onClick={() => setIsSaveModalOpen(true)}
                      leftIcon={<MdSave />}
                      bg="darkBg.700"
                      color="textColors.light"
                      _hover={{ bg: "darkBg.600" }}
                      boxShadow="0 2px 4px rgba(0,0,0,0.3)"
                      width={{ base: "100%", md: "auto" }}
                      size="lg"
                    >
                      Save
                    </Button>

                    <Button
                      onClick={() => setIsMyResumesModalOpen(true)}
                      leftIcon={<MdFolderOpen />}
                      bg="darkBg.700"
                      color="textColors.light"
                      _hover={{ bg: "darkBg.600" }}
                      boxShadow="0 2px 4px rgba(0,0,0,0.3)"
                      width={{ base: "100%", md: "auto" }}
                      size="lg"
                    >
                      My Resumes
                    </Button>

                    <Button
                      rightIcon={<MdOutlineFileDownload />}
                      onClick={handlePrint}
                      bg="primary.500"
                      color="white"
                      size="lg"
                      width={{ base: "100%", md: "auto" }}
                      _hover={{ bg: "primary.600" }}
                      boxShadow="0 4px 12px rgba(40, 148, 236, 0.4)"
                    >
                      Download Resume
                    </Button>
                  </Stack>
                </VStack>
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

      <ResumeSaveModal
        isOpen={isSaveModalOpen}
        onClose={() => setIsSaveModalOpen(false)}
        currentResumeId={currentResumeId}
      />

      <MyResumesModal
        isOpen={isMyResumesModalOpen}
        onClose={() => setIsMyResumesModalOpen(false)}
        onResumeSelect={loadResumeData}
      />
    </Box>
  );
};

export default Main;
