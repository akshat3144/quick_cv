import { TabList, Tabs, Tab, TabPanels, TabPanel, Box, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useResume } from '../Context'
import About from './BuildSteps/About'
import Education from './BuildSteps/Education'
import Projects from './BuildSteps/Projects'
import Skills from './BuildSteps/Skills'
import Work from './BuildSteps/Work'
import Certificates from './BuildSteps/Certificates'
import Achievement from './BuildSteps/Achievements'

const Builder = () => {

    return (
        <Box
            bg={'black'}
            w={'full'}
            maxW={'xl'}
            // minH={'100vh'}
            rounded={'md'}
            shadow={'md'}
            overflow={'hidden'}
            color={'white'}
        >
            <Tabs isFitted variant='enclosed'>
                <TabList overflowX={'auto'} overflowY={'hidden'} sx={{ '::-webkit-scrollbar': { height: '4px' } }}>
                    <Tab><Text fontWeight={'medium'}>About</Text></Tab>
                    <Tab><Text fontWeight={'medium'}>Education</Text></Tab>
                    <Tab><Text fontWeight={'medium'}>Skills</Text></Tab>
                    <Tab><Text fontWeight={'medium'}>Work</Text></Tab>
                    <Tab><Text fontWeight={'medium'}>Projects</Text></Tab>
                    <Tab><Text fontWeight={'medium'}>Certificates</Text></Tab>
                    <Tab><Text fontWeight={'medium'}>Achievements</Text></Tab>
                </TabList>
                <TabPanels>
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
    )
}

export default Builder
