import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Constant from 'expo-constants';

function Screen({children, style}) {
    return (
        <SafeAreaView style ={[styles.screen, style]}>
            <View style ={[styles.view, style]}>
                {children}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constant.statusBarHeight,
        flex: 1,
        
    },

    view: {
        flex: 1,
    },
})

export default Screen;