// screens/OnboardStepThreeScreen.js
import React from 'react';
import { Container, Box, Content, Button, Text } from 'native-base';

const OnboardTwo = ({ navigation }) => {
    return (
        <Box>
            <Text>Halaman Onboard - Langkah 3</Text>
            <Button onPress={() => navigation.navigate('OnboardThree')}>
                <Text>Lanjut ke Halaman Registrasi</Text>
            </Button>
        </Box >
    );
};

export default OnboardTwo;
