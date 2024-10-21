import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, FormControl, FormLabel, HStack, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, VStack, Textarea, Select, Text } from '@chakra-ui/react'
import { useResume } from '../../Context';
import { v4 as uuidv4 } from 'uuid';
import { MdDelete } from 'react-icons/md';

const Certificates = () => {

    const { Certificates, setCertificates } = useResume();

    const addMore = () => {
        setCertificates([...Certificates, Certificates]);
    }

    const handleChange = (e, id) => {
        const { name, value } = e.target;
        const updatedProject = Certificates.map((project) => (
            project.id === id ? Object.assign(project, { id: uuidv4(), [name]: value }) : project
        ));
        setCertificates(updatedProject);
    }

    const deleteProject = (id) => {
        setCertificates(Certificates.filter((elem) => elem.id !== id))
    }

    return (
        <>
            <Accordion allowToggle defaultIndex={[0]}>
                {
                    Certificates.map((project, index) => (
                        <AccordionItem key={index}>
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        <Text fontWeight={'medium'}>{project.name ? project.name : "Certificate"}</Text>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>

                                <VStack spacing={3} alignItems={'flex-end'}>
                                    <Input value={project.name} onChange={(e) => handleChange(e, project.id)} name='name' id='name' type='text' variant='filled' placeholder='Certificate Title' />

                                    <Input value={project.url} onChange={(e) => handleChange(e, project.id)} name='url' id='url' type='url' variant='filled' placeholder='Certificate URL' />

                                    <Textarea value={project.description} onChange={(e) => handleChange(e, project.id)} name='description' id='description' variant='filled' placeholder='Description...' />

                                    <Button rightIcon={<MdDelete />} onClick={() => deleteProject(project.id)} colorScheme={'red'}>Delete</Button>
                                </VStack>

                            </AccordionPanel>
                        </AccordionItem>
                    ))
                }
            </Accordion>

            {
                Certificates.length < 4 && (
                    <Button style={{backgroundColor: '#2894ec'}} my={5} onClick={addMore}>Add More</Button>
                )
            }
        </>
    )
}

export default Certificates
