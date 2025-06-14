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
import React from "react";
import { useResume } from "../../Context";
import { MdAdd, MdDelete } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";

const Education = () => {
  const { educationList, setEducationList } = useResume();

  const addMore = () => {
    setEducationList([
      ...educationList,
      {
        id: uuidv4(),
        degree: "",
        school: "",
        startYr: "",
        endYr: "",
        grade: "",
      },
    ]);
  };

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    const updatedEducation = educationList.map((edu) =>
      edu.id === id ? { ...edu, [name]: value } : edu
    );

    setEducationList(updatedEducation);
  };

  const deleteEducation = (id) => {
    if (educationList.length > 1) {
      setEducationList(educationList.filter((edu) => edu.id !== id));
    } else {
      // If it's the last item, just reset it instead of removing
      setEducationList([
        {
          id: uuidv4(),
          degree: "",
          school: "",
          startYr: "",
          endYr: "",
          grade: "",
        },
      ]);
    }
  };

  // Ensure all education items have IDs
  React.useEffect(() => {
    const updatedList = educationList.map((edu) => {
      if (!edu.id) {
        return { ...edu, id: uuidv4() };
      }
      return edu;
    });

    if (JSON.stringify(updatedList) !== JSON.stringify(educationList)) {
      setEducationList(updatedList);
    }
  }, []);

  return (
    <>
      <Accordion allowToggle defaultIndex={[0]}>
        {educationList.map((education) => (
          <AccordionItem key={education.id || uuidv4()}>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text fontWeight={"medium"}>
                    {education.degree ? education.degree : "Degree"}
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <VStack spacing={4}>
                <Input
                  value={education.degree || ""}
                  onChange={(e) => handleChange(e, education.id)}
                  name="degree"
                  type="text"
                  variant="filled"
                  placeholder="Degree"
                  color="#3094ec"
                />
                <Input
                  value={education.school || ""}
                  onChange={(e) => handleChange(e, education.id)}
                  name="school"
                  type="text"
                  variant="filled"
                  placeholder="School"
                  color="#3094ec"
                />
              </VStack>

              <HStack spacing={4} mt={4}>
                <FormControl>
                  <FormLabel htmlFor="startyr">Start Year</FormLabel>
                  <Input
                    value={education.startYr || ""}
                    onChange={(e) => handleChange(e, education.id)}
                    name="startYr"
                    id="startyr"
                    type="number"
                    variant="filled"
                    min="1900"
                    max="2030"
                    placeholder="Start Year"
                    color="#3094ec"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="endyr">End Year</FormLabel>
                  <Input
                    value={education.endYr || ""}
                    onChange={(e) => handleChange(e, education.id)}
                    name="endYr"
                    id="endyr"
                    type="number"
                    variant="filled"
                    min="1900"
                    max="2030"
                    placeholder="End Year"
                    color="#3094ec"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="grade">Grade</FormLabel>
                  <Input
                    value={education.grade || ""}
                    onChange={(e) => handleChange(e, education.id)}
                    name="grade"
                    id="grade"
                    type="text"
                    variant="filled"
                    placeholder="Grade"
                    color="#3094ec"
                  />
                </FormControl>
              </HStack>

              <Button
                rightIcon={<MdDelete />}
                onClick={() => deleteEducation(education.id)}
                mt={3}
                colorScheme={"red"}
              >
                Delete
              </Button>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>

      {educationList.length < 4 && (
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

export default Education;
