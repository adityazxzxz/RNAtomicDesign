// screens/OnboardScreen.js
import React from 'react';
import { Box, Container, Content, Button, Text } from 'native-base';

const OnboardOne = ({ navigation }) => {
    return (

        <Box>
            <Text>Halaman Onboard - Langkah 1</Text>
            <Button onPress={() => navigation.navigate('OnboardTwo')}>
                <Text>Lanjut ke Langkah 2</Text>
            </Button>
        </Box>
    );
};

export default OnboardOne;
