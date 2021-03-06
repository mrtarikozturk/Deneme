import React from 'react';
import { View, TextInput, StyleSheet, Platform } from 'react-native';


const Input = (props) => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder={props.holder} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        padding: Platform.OS == 'android' ? 0 : 15,
        margin: 10,
        borderRadius: 10,
        marginVertical: 20,
    }
});


export { Input }