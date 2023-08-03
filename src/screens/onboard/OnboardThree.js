// screens/OnboardStepThreeScreen.js
import React from 'react';
import { Box, Container, Content, Button, Text } from 'native-base';

const OnboardThree = ({ navigation }) => {
    return (
        <Box>
            <Text>Halaman Onboard - Langkah 3</Text>
            <Button onPress={() => navigation.navigate('Register')}>
                <Text>Lanjut ke Halaman Registrasi</Text>
            </Button>
        </Box>
    );
};

export default OnboardThree;
