import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Tag,
  TagCloseButton,
  TagLabel,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useResume } from "../../Context";
import { useToast } from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";

const Skills = () => {
  const toast = useToast();
  const [skill, setSkill] = useState("");
  const { skills, setSkills } = useResume();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!skill || skill === " ") {
      toast({
        title: "Empty Input",
        description: "Please enter a skill before adding",
        status: "error",
        isClosable: true,
        position: "top",
        duration: 3000,
      });
      return;
    }
    const newSkill = {
      id: uuidv4(),
      name: skill,
    };
    setSkills([...skills, newSkill]);
    setSkill("");
    toast({
      title: "Skill Added",
      status: "success",
      isClosable: true,
      position: "top-right",
      duration: 2000,
    });
  };

  const deleteSkill = (id) => {
    setSkills(skills.filter((elem) => elem.id !== id));
  };

  return (
    <VStack spacing={6} align="stretch">
      <HStack
        spacing={4}
        alignItems={"flex-end"}
        as="form"
        onSubmit={(e) => handleSubmit(e)}
      >
        <FormControl>
          <FormLabel htmlFor="skill" fontWeight="medium">
            Add Skills
          </FormLabel>
          <Input
            onChange={(e) => setSkill(e.target.value)}
            value={skill}
            name="skill"
            id="skill"
            type="text"
            variant="filled"
            placeholder="Enter a skill (e.g. JavaScript, Python)"
            color="#3094ec"
            bg="whiteAlpha.100"
            _hover={{ bg: "whiteAlpha.200" }}
            _focus={{ bg: "whiteAlpha.200", borderColor: "primary.500" }}
          />
        </FormControl>
        <Button
          type="submit"
          bg="primary.500"
          color="white"
          _hover={{ bg: "primary.600" }}
          leftIcon={<Icon as={MdAdd} />}
        >
          Add
        </Button>
      </HStack>

      <Box
        borderWidth={"1px"}
        borderColor="whiteAlpha.300"
        borderRadius={"md"}
        my={4}
        p={4}
        bg="whiteAlpha.50"
      >
        <Text mb={3} fontWeight="medium">
          Your Skills:
        </Text>
        <Box>
          {skills.length > 0 ? (
            skills.map((skill) => (
              <Tag
                size={"lg"}
                borderRadius="full"
                variant="solid"
                bg={"primary.500"}
                color="white"
                m={1}
                key={skill.id}
                boxShadow="0 2px 4px rgba(0,0,0,0.2)"
              >
                <TagLabel>{skill.name}</TagLabel>
                <TagCloseButton onClick={() => deleteSkill(skill.id)} />
              </Tag>
            ))
          ) : (
            <Text color="whiteAlpha.600" fontStyle="italic">
              No skills added yet. Add skills to showcase your expertise.
            </Text>
          )}
        </Box>
      </Box>
    </VStack>
  );
};

export default Skills;
