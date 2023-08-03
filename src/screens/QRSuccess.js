import React, { useState } from 'react';
import { Box, Text, FormControl, Input, Center, Button, VStack, Image } from 'native-base'
import TextNumber from '../components/atoms/TextNumber';

const QRSuccess = ({ route, navigation }) => {
    return (
        <Center w="100%">
            <Box safeArea p="2" py="8" w="90%" >
                <VStack space={2} alignItems="center">
                    <Text bold fontSize="xl" mb="6" mt="10">
                        NASI BEBEK PLANET VENUS
                    </Text>

                    <Image size={"2xl"} alt="Check" source={require('../../src/components/img/check.png')} mt="10" />

                    <TextNumber value="10000" />
                </VStack>
                <Button mt="10" colorScheme="indigo" onPress={() => navigation.navigate('Home')}>
                    QR Scan
                </Button>
            </Box>
        </Center>
    )
}

export default QRSuccess;