import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

function ImageScreen(props) {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                style={{ width: 100, height: 100 }}
                resizeMode="contain" // 필요에 따라 cover, stretch 등 가능
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ImageScreen;