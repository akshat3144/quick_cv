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
  Textarea,
  Select,
  Text,
  Icon,
} from "@chakra-ui/react";
import { useResume } from "../../Context";
import { v4 as uuidv4 } from "uuid";
import { MdDelete, MdAdd } from "react-icons/md";

const Projects = () => {
  const { projects, setProjects } = useResume();

  const addMore = () => {
    setProjects([...projects, projects]);
  };

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    const updatedProject = projects.map((project) =>
      project.id === id
        ? Object.assign(project, { id: uuidv4(), [name]: value })
        : project
    );
    setProjects(updatedProject);
  };

  const deleteProject = (id) => {
    setProjects(projects.filter((elem) => elem.id !== id));
  };

  return (
    <>
      <Accordion allowToggle defaultIndex={[0]}>
        {projects.map((project, index) => (
          <AccordionItem key={index}>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text fontWeight={"medium"}>
                    {project.name ? project.name : "Project Name"}
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <VStack spacing={3} alignItems={"flex-end"}>
                <Input
                  value={project.name}
                  onChange={(e) => handleChange(e, project.id)}
                  name="name"
                  id="name"
                  type="text"
                  variant="filled"
                  placeholder="Project Name"
                  color="#3094ec"
                />

                <Input
                  value={project.url}
                  onChange={(e) => handleChange(e, project.id)}
                  name="url"
                  id="url"
                  type="url"
                  variant="filled"
                  placeholder="Project URL"
                  color="#3094ec"
                />

                <Textarea
                  value={project.description}
                  onChange={(e) => handleChange(e, project.id)}
                  name="description"
                  id="description"
                  variant="filled"
                  placeholder="Description..."
                  color="#3094ec"
                />

                <Button
                  rightIcon={<MdDelete />}
                  onClick={() => deleteProject(project.id)}
                  colorScheme={"red"}
                >
                  Delete
                </Button>
              </VStack>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>

      {projects.length < 4 && (
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

export default Projects;
