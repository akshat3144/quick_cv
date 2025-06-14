import {
  TabList,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
  Box,
  Text,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import About from "./BuildSteps/About";
import Education from "./BuildSteps/Education";
import Projects from "./BuildSteps/Projects";
import Skills from "./BuildSteps/Skills";
import Work from "./BuildSteps/Work";
import Certificates from "./BuildSteps/Certificates";
import Achievement from "./BuildSteps/Achievements";
import {
  MdPerson,
  MdSchool,
  MdStar,
  MdWork,
  MdCode,
  MdVerified,
  MdEmojiEvents,
} from "react-icons/md";

const Builder = () => {
  return (
    <Box
      bg={"darkBg.800"}
      w={"full"}
      maxW={"xl"}
      borderRadius={"xl"}
      shadow={"2xl"}
      overflow={"hidden"}
      color={"textColors.light"}
      borderWidth="1px"
      borderColor="darkBg.600"
    >
      <Tabs isFitted variant="enclosed">
        <TabList
          overflowX={"auto"}
          overflowY={"hidden"}
          borderBottomColor="darkBg.600"
          sx={{
            "::-webkit-scrollbar": { height: "4px" },
            "::-webkit-scrollbar-thumb": {
              backgroundColor: "#3094ec",
              borderRadius: "4px",
            },
          }}
        >
          <Tab
            _selected={{
              color: "textColors.light",
              borderColor: "darkBg.600",
              borderBottomColor: "primary.500",
              bg: "darkBg.700",
            }}
            color="textColors.subtle"
          >
            <Icon as={MdPerson} mr={2} />{" "}
            <Text fontWeight={"medium"}>About</Text>
          </Tab>
          <Tab
            _selected={{
              color: "textColors.light",
              borderColor: "darkBg.600",
              borderBottomColor: "primary.500",
              bg: "darkBg.700",
            }}
            color="textColors.subtle"
          >
            <Icon as={MdSchool} mr={2} />{" "}
            <Text fontWeight={"medium"}>Education</Text>
          </Tab>
          <Tab
            _selected={{
              color: "textColors.light",
              borderColor: "darkBg.600",
              borderBottomColor: "primary.500",
              bg: "darkBg.700",
            }}
            color="textColors.subtle"
          >
            <Icon as={MdStar} mr={2} />{" "}
            <Text fontWeight={"medium"}>Skills</Text>
          </Tab>
          <Tab
            _selected={{
              color: "textColors.light",
              borderColor: "darkBg.600",
              borderBottomColor: "primary.500",
              bg: "darkBg.700",
            }}
            color="textColors.subtle"
          >
            <Icon as={MdWork} mr={2} /> <Text fontWeight={"medium"}>Work</Text>
          </Tab>
          <Tab
            _selected={{
              color: "textColors.light",
              borderColor: "darkBg.600",
              borderBottomColor: "primary.500",
              bg: "darkBg.700",
            }}
            color="textColors.subtle"
          >
            <Icon as={MdCode} mr={2} />{" "}
            <Text fontWeight={"medium"}>Projects</Text>
          </Tab>
          <Tab
            _selected={{
              color: "textColors.light",
              borderColor: "darkBg.600",
              borderBottomColor: "primary.500",
              bg: "darkBg.700",
            }}
            color="textColors.subtle"
          >
            <Icon as={MdVerified} mr={2} />{" "}
            <Text fontWeight={"medium"}>Certificates</Text>
          </Tab>
          <Tab
            _selected={{
              color: "textColors.light",
              borderColor: "darkBg.600",
              borderBottomColor: "primary.500",
              bg: "darkBg.700",
            }}
            color="textColors.subtle"
          >
            <Icon as={MdEmojiEvents} mr={2} />{" "}
            <Text fontWeight={"medium"}>Achievements</Text>
          </Tab>
        </TabList>
        <TabPanels bg="darkBg.700" p={4}>
          <TabPanel>
            <About />
          </TabPanel>
          <TabPanel>
            <Education />
          </TabPanel>
          <TabPanel>
            <Skills />
          </TabPanel>
          <TabPanel>
            <Work />
          </TabPanel>
          <TabPanel>
            <Projects />
          </TabPanel>
          <TabPanel>
            <Certificates />
          </TabPanel>
          <TabPanel>
            <Achievement />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Builder;
