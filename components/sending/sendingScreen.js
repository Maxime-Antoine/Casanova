'use strict'

import React, { Component } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';

export default class SendingScreen extends Component {
    static navigationOptions = {
        title: 'Sending',
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>
                Sending screen
                </Text>
                <Button
                    title="Back to main screen"
                    onPress={() => navigate('Main', {})}
                />
            </View>
        );
    }
}