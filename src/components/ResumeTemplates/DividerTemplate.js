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
} from "@chakra-ui/react";
import { useResume } from "../../Context";
import { MdMail, MdLocalPhone, MdLocationPin } from "react-icons/md";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { BiLinkExternal } from "react-icons/bi";

const DividerTemplate = () => {
  const {
    theme,
    about = {}, // Provide default empty object
    educationList = [],
    skills = [],
    workList = [],
    projects = [],
    Certificates = [],
    AchievementList = [],
    visibleSections = {},
  } = useResume();

  const imgStyle = {
    width: "115px",
    height: "115px",
    margin: "15px",
    borderRadius: "50%",
  };

  return (
    <Box p={4} h="100%">
      <HStack>
        {about && about.picture && (
          <img style={imgStyle} src={about.picture} alt="avatar" />
        )}

        <VStack m={4} alignItems={"flex-start"} spacing={0.5}>
          <Heading as="h4" size="md">
            {about.name ? about.name : "Tony Stark"}
          </Heading>
          <Text color={"gray.500"}>
            {about.role ? about.role : "Full Stack Web Developer"}
          </Text>
        </VStack>
      </HStack>

      <HStack
        color={"gray.800"}
        p={4}
        justifyContent={"space-between"}
        borderTop={`1px solid ${theme}`}
        borderBottom={`1px solid ${theme}`}
        my={2}
      >
        <HStack spacing={1}>
          <MdMail color={theme} />{" "}
          <Text>{about.email ? about.email : "mark80@gmail.com"}</Text>
        </HStack>
        <HStack spacing={1}>
          <MdLocalPhone color={theme} />{" "}
          <Text>{about.phone ? about.phone : "+919999999999"}</Text>
        </HStack>
        <HStack spacing={1}>
          <MdLocationPin color={theme} />{" "}
          <Text>{about.address ? about.address : "California, USA"}</Text>
        </HStack>
        <HStack spacing={1}>
          <RiLinkedinBoxFill color={theme} />{" "}
          <Text as="a" href={about.linkedin}>
            LinkedIn
          </Text>
        </HStack>
      </HStack>

      <HStack
        w={"full"}
        h={"full"}
        my={2}
        mb={6}
        px={2}
        justifyContent={"space-between"}
        alignItems={"flex-start"}
        spacing={1}
      >
        <VStack mx={2} alignItems={"flex-start"} w={"full"} spacing={6}>
          {/* EDUCATION */}
          {visibleSections.education && (
            <VStack alignItems={"flex-start"}>
              <Heading as="h4" size="md" color={"gray.700"}>
                EDUCATION
              </Heading>

              {educationList.map((education) => {
                const { degree, school, startYr, endYr, grade } = education;

                return (
                  <VStack
                    spacing={0}
                    alignItems={"flex-start"}
                    w={"full"}
                    pb={2}
                  >
                    <Text fontWeight={"medium"}>
                      {degree ? degree : "B.Tech Computer Science"}
                    </Text>
                    <Text fontSize={"sm"}>{school ? school : "MIT"}</Text>
                    <HStack
                      fontSize={"xs"}
                      fontStyle={"italic"}
                      justifyContent={"space-between"}
                      w={"full"}
                    >
                      <Text>
                        {startYr ? startYr : 2000} - {endYr ? endYr : 2004}
                      </Text>
                      <Text>{grade ? grade : "10.0 CGPA"}</Text>
                    </HStack>
                  </VStack>
                );
              })}
            </VStack>
          )}

          {/* WORK EXPERIENCE */}
          {visibleSections.work && (
            <VStack alignItems={"flex-start"}>
              <Heading as="h4" size="md" color={"gray.700"}>
                WORK EXPERIENCE
              </Heading>

              {workList.map((work) => {
                const {
                  position,
                  type,
                  company,
                  startDate,
                  endDate,
                  description: desc,
                } = work;

                return (
                  <VStack
                    spacing={0.5}
                    alignItems={"flex-start"}
                    lineHeight={1.3}
                    pb={2}
                  >
                    <Text fontWeight={"medium"}>
                      {position ? position : "Full Stack Developer"}
                    </Text>
                    <Text fontSize={"sm"}>
                      {company ? company : "XYZ Infotech Services"} -{" "}
                      {type ? type : "Full-time"}
                    </Text>
                    <Text fontSize={"xs"} fontStyle={"italic"}>
                      {startDate ? startDate : "2018-03"} -{" "}
                      {endDate ? endDate : "2021-12"}
                    </Text>
                    <Text fontSize={"sm"} as="p">
                      {desc
                        ? desc
                        : "Fixed bugs from existing websites and implemented enhancements that significantly improved web functionality and speed."}
                    </Text>
                  </VStack>
                );
              })}
            </VStack>
          )}

          {/* ACHIEVEMENTS */}
          {visibleSections.achievements && (
            <VStack alignItems={"flex-start"}>
              <Heading as="h4" size="md" color={"gray.700"}>
                ACHIEVEMENTS
              </Heading>

              {AchievementList.map((education) => {
                const { degree, school } = education;

                return (
                  <VStack
                    spacing={0}
                    alignItems={"flex-start"}
                    w={"full"}
                    pb={2}
                  >
                    <Text fontWeight={"medium"}>
                      {degree ? degree : "Achievement Name"}
                    </Text>
                    <Text fontSize={"sm"}>
                      {school ? school : "Description"}
                    </Text>
                    <HStack
                      fontSize={"xs"}
                      fontStyle={"italic"}
                      justifyContent={"space-between"}
                      w={"full"}
                    ></HStack>
                  </VStack>
                );
              })}
            </VStack>
          )}
        </VStack>
        <VStack mx={2} alignItems={"flex-start"} w={"full"} spacing={6}>
          {/* SKILLS */}
          {visibleSections.skills && (
            <VStack alignItems={"flex-start"}>
              <Heading as="h4" size="md" color={"gray.700"}>
                SKILLS
              </Heading>
              <Wrap>
                {skills.map((skill, index) => (
                  <Tag
                    size={"md"}
                    borderRadius="md"
                    variant="solid"
                    bg={theme}
                    key={index}
                    boxShadow="0 2px 4px rgba(0,0,0,0.2)"
                  >
                    <TagLabel>{skill.name}</TagLabel>
                  </Tag>
                ))}
              </Wrap>
            </VStack>
          )}

          {/* PROJECTS */}
          {visibleSections.projects && (
            <VStack alignItems={"flex-start"}>
              <Heading as="h4" size="md" color={"gray.700"}>
                PROJECTS
              </Heading>

              {projects.map((project) => {
                const { name, url, description: desc } = project;
                return (
                  <VStack
                    spacing={0.5}
                    alignItems={"flex-start"}
                    lineHeight={1.3}
                    pb={2}
                  >
                    <HStack as="a" href={url} target="_blank" spacing={0.5}>
                      <Text fontWeight={"medium"} flex={"row"}>
                        {name ? name : "Project Name"}{" "}
                      </Text>{" "}
                      <BiLinkExternal />
                    </HStack>
                    <UnorderedList pl={5}>
                      <ListItem>
                        <Text fontSize={"sm"} as="p">
                          {desc
                            ? desc
                            : "Lorem ipsum dolor sit amet consectetur adipisicing."}
                        </Text>
                      </ListItem>
                    </UnorderedList>
                  </VStack>
                );
              })}
            </VStack>
          )}

          {/* CERTIFICATES */}
          {visibleSections.certificates && (
            <VStack alignItems={"flex-start"}>
              <Heading as="h4" size="md" color={"gray.700"}>
                CERTIFICATES
              </Heading>

              {Certificates.map((Certificate) => {
                const { name, url, description: desc } = Certificate;
                return (
                  <VStack
                    spacing={0.5}
                    alignItems={"flex-start"}
                    lineHeight={1.3}
                    pb={2}
                  >
                    <HStack as="a" href={url} target="_blank" spacing={0.5}>
                      <Text fontWeight={"medium"} flex={"row"}>
                        {name ? name : "Certificate Title"}{" "}
                      </Text>{" "}
                      <BiLinkExternal />
                    </HStack>
                    <UnorderedList pl={5}>
                      <ListItem>
                        <Text fontSize={"sm"} as="p">
                          {desc
                            ? desc
                            : "Lorem ipsum dolor sit amet consectetur adipisicing."}
                        </Text>
                      </ListItem>
                    </UnorderedList>
                  </VStack>
                );
              })}
            </VStack>
          )}
        </VStack>
      </HStack>
    </Box>
  );
};

export default DividerTemplate;
