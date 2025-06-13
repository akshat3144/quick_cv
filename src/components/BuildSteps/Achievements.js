import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  VStack,
  Text,
  Icon,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useResume } from "../../Context";
import { MdAdd, MdDelete } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";

const Achievement = () => {
  const { AchievementList, setAchievementList } = useResume();

  const addMore = () => {
    setAchievementList([
      ...AchievementList,
      {
        id: uuidv4(),
        degree: "",
        school: "",
      },
    ]);
  };

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    const updatedAchievement = AchievementList.map((achievement) =>
      achievement.id === id ? { ...achievement, [name]: value } : achievement
    );

    setAchievementList(updatedAchievement);
  };

  const deleteAchievement = (id) => {
    setAchievementList(AchievementList.filter((elem) => elem.id !== id));
  };

  return (
    <>
      <Accordion allowToggle defaultIndex={[0]}>
        {AchievementList.map((achievement) => (
          <AccordionItem key={achievement.id || uuidv4()}>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text fontWeight={"medium"}>
                    {achievement.degree ? achievement.degree : "Achievement"}
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <VStack spacing={4}>
                <Input
                  onChange={(e) => handleChange(e, achievement.id)}
                  value={achievement.degree || ""}
                  name="degree"
                  type="text"
                  variant="filled"
                  placeholder="Name"
                />
                <Input
                  onChange={(e) => handleChange(e, achievement.id)}
                  value={achievement.school || ""}
                  name="school"
                  type="text"
                  variant="filled"
                  placeholder="Description"
                />

                <Button
                  rightIcon={<MdDelete />}
                  onClick={() => deleteAchievement(achievement.id)}
                  colorScheme={"red"}
                  alignSelf="flex-end"
                >
                  Delete
                </Button>
              </VStack>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>

      {AchievementList.length < 4 && (
        <Button
          bg="primary.500"
          color="white"
          _hover={{ bg: "primary.600" }}
          my={5}
          onClick={addMore}
          leftIcon={<Icon as={MdAdd} />}
          boxShadow="0 2px 6px rgba(40, 148, 236, 0.3)"
        >
          Add More
        </Button>
      )}
    </>
  );
};

export default Achievement;
