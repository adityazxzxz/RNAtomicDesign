import React, { useState } from 'react';
import { Box, Text, FormControl, Input, Center, Button, VStack } from 'native-base'
import InputNumber from '../components/atoms/InputNumber';

const QRInput = ({ route, navigation }) => {
    const { data } = route.params
    const [nominal, setNominal] = useState('');
    const handleInputChange = (inputValue) => {
        setNominal(inputValue);
    };
    return (
        <Center w="100%">
            <Box safeArea p="2" py="8" w="90%" >
                <VStack space={2} alignItems="center">
                    <Text bold fontSize="xl" mb="4">
                        NASI BEBEK PLANET VENUS
                    </Text>
                </VStack>
                <FormControl mb="5">
                    <FormControl.Label>INPUT NOMINAL</FormControl.Label>
                    <InputNumber value={nominal} onChange={handleInputChange} />
                </FormControl>
                <Button mt="2" colorScheme="indigo" onPress={() => navigation.navigate('PIN')}>
                    Submit
                </Button>
            </Box>
        </Center>
    )
}

export default QRInput;