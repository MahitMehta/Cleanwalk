import React from "react";
import { Dimensions, SafeAreaView, StyleSheet, Text } from "react-native";
import { useTheme } from "../../hooks/useTheme";

const { width, height } = Dimensions.get("window");

const HomeScreen = () => {
    const { palette } = useTheme();

    return (
        <SafeAreaView style={[ styles.container, { backgroundColor: palette.darkGrey }]}>
            <Text>
            
            </Text>
        </SafeAreaView>
    )
}

const styles= StyleSheet.create({
    container: {
        width,
        height,
    }
})

export default HomeScreen; 