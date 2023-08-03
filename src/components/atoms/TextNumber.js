import React from 'react'
import { Box, Text, FormControl, Input, Center, Button, VStack, Container } from 'native-base'
import { NumericFormat } from 'react-number-format';

const TextNumber = ({ value }) => {
    return (
        <Text fontSize={[24, 47, 69]}>
            Rp1.000.000
        </Text>
    )
}

export default TextNumber