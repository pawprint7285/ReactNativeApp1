import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from '../sections/Header.js';

export class Contact extends React.Component {
    static navigationOptions = {
        header: null
    };

render() {
    return (
        <View style={styles.container}>
            <Header message = 'Press to Login' />
            <Text style={{flex: 8}}>The contact form will go here</Text>
            <Text style={{flex: 6}}>The contact form will go here</Text>
        </View>
        );

    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
    