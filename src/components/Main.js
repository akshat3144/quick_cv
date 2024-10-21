import {
    Box,
    Container,
    Stack,
    Text,
    HStack,
    Heading,
    Button,
} from '@chakra-ui/react';
import Builder from './Builder';
import ResumePreview from './ResumePreview';
import ThemeSelect from './Theme/ThemeSelect';
import { useReactToPrint } from 'react-to-print';
import { useResume } from '../Context';
import { MdOutlineFileDownload } from 'react-icons/md';

const Main = () => {

    const { printElem } = useResume();

    const handlePrint = useReactToPrint({
        content: () => printElem.current,
    });

    return (
        <Container
            bg={'black'}
            minW={'full'}
            py={12} // Increased padding
            id='builder'
        >

            <Heading as='h4' size='xl' textAlign={'center'} color={'white'} style={{ fontFamily: 'Poppins' }} fontWeight={'medium'}>Builder Dashboard</Heading> {/* Increased heading size */}

            <Container maxW={'8xl'} px={10} my={4}> {/* Increased max width, padding, and margin */}

                <Stack justifyContent={'space-between'} pt={5} direction={{ base: 'column', sm: 'row' }}> {/* Increased padding top */}
                    <ThemeSelect />
                    <Button rightIcon={<MdOutlineFileDownload />} onClick={handlePrint} style={{ backgroundColor: '#2894ec', color: 'white'}}>Download</Button>
                </Stack>

            </Container>

            <Stack
                direction={{ base: 'column', md: 'row' }}
                gap={5} // Increased gap
                mx={{ base: 3, md: 14 }} // Increased margin x
                my={10} // Increased margin y
                alignItems={'flex-start'}
                justifyContent={'space-between'}
            >
                <Builder />
                <ResumePreview />
            </Stack>
        </Container>
    )
}

export default Main
