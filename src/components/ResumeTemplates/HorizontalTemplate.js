import {
  Box,
  Heading,
  HStack,
  Tag,
  TagLabel,
  Text,
  VStack,
  Wrap,
  UnorderedList,
  ListItem,
  Divider,
  Flex,
  Image,
} from "@chakra-ui/react";
import { useResume } from "../../Context";
import { MdMail, MdLocalPhone, MdLocationPin } from "react-icons/md";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { BiLinkExternal } from "react-icons/bi";

const HorizontalTemplate = () => {
  const {
    theme,
    about,
    educationList,
    skills,
    workList,
    projects,
    Certificates,
    AchievementList,
  } = useResume();

  return (
    <Box p={4} h="100%">
      {/* Header */}
      <VStack spacing={2} alignItems="center" mb={6}>
        {about.picture && (
          <Box
            borderRadius="full"
            overflow="hidden"
            boxSize="100px"
            borderWidth="2px"
            borderColor={theme}
          >
            <Image
              src={about.picture}
              alt="Profile"
              boxSize="100%"
              objectFit="cover"
            />
          </Box>
        )}
        <VStack spacing={1}>
          <Heading as="h1" size="lg">
            {about.name || "Tony Stark"}
          </Heading>
          <Text color="gray.500" fontSize="lg">
            {about.role || "Full Stack Web Developer"}
          </Text>
        </VStack>
      </VStack>

      {/* Contact Info */}
      <HStack spacing={4} wrap="wrap" justifyContent="center" mb={4}>
        <HStack spacing={1}>
          <MdMail color={theme} />
          <Text>{about.email || "mark80@gmail.com"}</Text>
        </HStack>
        <HStack spacing={1}>
          <MdLocalPhone color={theme} />
          <Text>{about.phone || "+919999999999"}</Text>
        </HStack>
        <HStack spacing={1}>
          <MdLocationPin color={theme} />
          <Text>{about.address || "California, USA"}</Text>
        </HStack>
        <HStack spacing={1}>
          <RiLinkedinBoxFill color={theme} />
          <Text as="a" href={about.linkedin}>
            LinkedIn
          </Text>
        </HStack>
      </HStack>

      <Divider borderColor={theme} mb={6} />

      {/* Skills Section */}
      <Box mb={6}>
        <Heading as="h3" size="md" color={theme} mb={3}>
          SKILLS
        </Heading>
        <Wrap>
          {skills.map((skill, index) => (
            <Tag
              size="md"
              borderRadius="md"
              variant="solid"
              bg={theme}
              key={index}
              mb={1}
            >
              <TagLabel>{skill.name}</TagLabel>
            </Tag>
          ))}
        </Wrap>
      </Box>

      <Divider mb={6} />

      {/* Experience Section */}
      <Box mb={6}>
        <Heading as="h3" size="md" color={theme} mb={3}>
          WORK EXPERIENCE
        </Heading>
        {workList.map((work, index) => (
          <Box key={index} mb={4}>
            <Flex justifyContent="space-between" alignItems="flex-start">
              <Box>
                <Text fontWeight="bold">
                  {work.position || "Full Stack Developer"}
                </Text>
                <Text fontSize="sm">
                  {work.company || "XYZ Infotech Services"} -{" "}
                  {work.type || "Full-time"}
                </Text>
              </Box>
              <Text fontSize="sm" fontStyle="italic">
                {work.startDate || "2018-03"} - {work.endDate || "2021-12"}
              </Text>
            </Flex>
            <Text fontSize="sm" mt={1}>
              {work.description ||
                "Fixed bugs from existing websites and implemented enhancements that significantly improved web functionality and speed."}
            </Text>
          </Box>
        ))}
      </Box>

      <Divider mb={6} />

      {/* Education Section */}
      <Box mb={6}>
        <Heading as="h3" size="md" color={theme} mb={3}>
          EDUCATION
        </Heading>
        {educationList.map((education, index) => (
          <Box key={index} mb={4}>
            <Flex justifyContent="space-between" alignItems="flex-start">
              <Box>
                <Text fontWeight="bold">
                  {education.degree || "B.Tech Computer Science"}
                </Text>
                <Text fontSize="sm">{education.school || "MIT"}</Text>
              </Box>
              <Box textAlign="right">
                <Text fontSize="sm" fontStyle="italic">
                  {education.startYr || "2000"} - {education.endYr || "2004"}
                </Text>
                <Text fontSize="sm">{education.grade || "10.0 CGPA"}</Text>
              </Box>
            </Flex>
          </Box>
        ))}
      </Box>

      <Divider mb={6} />

      {/* Projects Section */}
      <Box mb={6}>
        <Heading as="h3" size="md" color={theme} mb={3}>
          PROJECTS
        </Heading>
        {projects.map((project, index) => (
          <Box key={index} mb={4}>
            <HStack as="a" href={project.url} target="_blank" spacing={0.5}>
              <Text fontWeight="bold">{project.name || "Project Name"}</Text>
              <BiLinkExternal />
            </HStack>
            <Text fontSize="sm" mt={1}>
              {project.description ||
                "Lorem ipsum dolor sit amet consectetur adipisicing."}
            </Text>
          </Box>
        ))}
      </Box>

      <Divider mb={6} />

      {/* Certificates Section */}
      <Box mb={6}>
        <Heading as="h3" size="md" color={theme} mb={3}>
          CERTIFICATES
        </Heading>
        {Certificates.map((certificate, index) => (
          <Box key={index} mb={4}>
            <HStack as="a" href={certificate.url} target="_blank" spacing={0.5}>
              <Text fontWeight="bold">
                {certificate.name || "Certificate Title"}
              </Text>
              <BiLinkExternal />
            </HStack>
            <Text fontSize="sm" mt={1}>
              {certificate.description ||
                "Lorem ipsum dolor sit amet consectetur adipisicing."}
            </Text>
          </Box>
        ))}
      </Box>

      <Divider mb={6} />

      {/* Achievements Section */}
      <Box>
        <Heading as="h3" size="md" color={theme} mb={3}>
          ACHIEVEMENTS
        </Heading>
        {AchievementList.map((achievement, index) => (
          <Box key={index} mb={4}>
            <Text fontWeight="bold">
              {achievement.degree || "Achievement Name"}
            </Text>
            <Text fontSize="sm">{achievement.school || "Description"}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HorizontalTemplate;
