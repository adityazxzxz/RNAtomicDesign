import { Image } from 'react-native';
import React from 'react';

import Onboarding from 'react-native-onboarding-swiper';

const Simple = ({ navigation }) => (
    <Onboarding
        onDone={() => navigation.navigate('Home')}
        onSkip={() => navigation.navigate('QRInput', { data: { "tes": "123" } })}
        pages={[
            {
                backgroundColor: '#fff',
                image: <Image source={require('../../components/img/circle.png')} />,
                title: 'Onboarding',
                subtitle: 'Done with React Native Onboarding Swiper',
            },
            {
                backgroundColor: '#fe6e58',
                image: <Image source={require('../../components/img/square.png')} />,
                title: 'The Title',
                subtitle: 'This is the subtitle that sumplements the title.',
            },
            {
                backgroundColor: '#999',
                image: <Image source={require('../../components/img/triangle.png')} />,
                title: 'Triangle',
                subtitle: "Beautiful, isn't it?",
            },
        ]}
    />
);

export default Simple;