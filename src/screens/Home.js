// screens/OnboardStepThreeScreen.js
import React from 'react';
import { Box } from 'native-base'
import { useIsFocused } from '@react-navigation/native';
import QRScanner from '../components/molecules/QRScanner';


const Register = ({ navigation }) => {
    const isFocused = useIsFocused();
    onSuccess = e => {
        navigation.navigate('QRInput', { data: e.data })
    };
    if (isFocused) return (<QRScanner onRead={this.onSuccess} />)
    else return (<Box> </Box>)
};

export default Register;
