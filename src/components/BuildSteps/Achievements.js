import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, FormControl, FormLabel, HStack, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, VStack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useResume } from '../../Context';

const Achievement = () => {

    const { AchievementList, setAchievementList } = useResume();

    const addMore = () => {
        setAchievementList([...AchievementList, AchievementList]);
    }

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const updatedAchievement = AchievementList.map((edu, i) => (
            index === i ? Object.assign(edu, { [name]: value }) : edu
        ));

        setAchievementList(updatedAchievement);
    }

    return (
        <>
            <Accordion allowToggle defaultIndex={[0]}>
                {
                    AchievementList.map((Achievement, index) => (
                        <AccordionItem key={index}>
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        <Text fontWeight={'medium'}>{Achievement.degree ? Achievement.degree : "Achievement"}</Text>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>

                                <VStack spacing={4}>
                                    <Input onChange={(e) => handleChange(e, index)} name='degree' type='text' variant='filled' placeholder='Name' />
                                    <Input onChange={(e) => handleChange(e, index)} name='school' type='text' variant='filled' placeholder='Description' />
                                </VStack>

                            </AccordionPanel>
                        </AccordionItem>
                    ))
                }
            </Accordion>

            {
                AchievementList.length < 4 && (
                    <Button style={{backgroundColor: '#2894ec'}} my={5} onClick={addMore}>Add More</Button>
                )
            }

        </>
    )
}

export default Achievement
