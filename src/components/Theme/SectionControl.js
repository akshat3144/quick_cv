import React from "react";
import {
  Box,
  Text,
  SimpleGrid,
  Checkbox,
  VStack,
  Divider,
} from "@chakra-ui/react";
import { useResume } from "../../Context";

const SectionControl = () => {
  const { visibleSections, setVisibleSections } = useResume();

  const handleSectionToggle = (section) => {
    setVisibleSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const sections = [
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Work Experience" },
    { id: "projects", label: "Projects" },
    { id: "certificates", label: "Certificates" },
    { id: "achievements", label: "Achievements" },
  ];

  return (
    <Box>
      <Text mb={2} color="white" fontWeight="medium">
        Show/Hide Sections
      </Text>
      <Box bg="whiteAlpha.100" p={3} borderRadius="md">
        <SimpleGrid columns={{ base: 2, md: 3 }} spacing={3}>
          {sections.map((section) => (
            <Checkbox
              key={section.id}
              isChecked={visibleSections[section.id]}
              onChange={() => handleSectionToggle(section.id)}
              colorScheme="primary"
              color="whiteAlpha.900"
            >
              {section.label}
            </Checkbox>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default SectionControl;
