import React from 'react'
import { Box, Text, FormControl, Input, Center, Button, VStack, Container } from 'native-base'
import { NumericFormat } from 'react-number-format';

const InputNumber = ({ value, onChange }) => {
    return (
        <NumericFormat
            value={value}
            displayType={'text'}
            thousandSeparator={'.'}
            decimalSeparator={','}
            prefix='Rp'
            renderText={(formattedValue) => (
                <Input
                    value={formattedValue}
                    fontSize={[24, 47, 60]}
                    textAlign="center"
                    onChangeText={(text) => {
                        // Hilangkan titik ketika input berubah
                        const rawValue = text.replace(/\./g, '');
                        onChange(rawValue);
                    }}
                    keyboardType="numeric"
                />
            )}
        />
    )
}

export default InputNumber