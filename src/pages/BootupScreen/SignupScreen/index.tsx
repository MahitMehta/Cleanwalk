import React from "react";
import { SafeAreaView, ScrollView, View, Text, StyleSheet, Dimensions } from "react-native";
import InputField from "../../../components/InputField";

const { width, height } = Dimensions.get("window");

const SignupScreen = () => {
    return (
        <SafeAreaView style={styles.container}> 
            <ScrollView contentContainerStyle={styles.contentContainer}>
              
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: "center",
        width,
        backgroundColor: "#1F1F1F",
        height,
    },
    contentContainer: {
        display: 'flex',
        alignItems: "center",
        width,
        height: height - 125,
        backgroundColor: "#1F1F1F",
        justifyContent: "space-between",
    }
});

export default SignupScreen;