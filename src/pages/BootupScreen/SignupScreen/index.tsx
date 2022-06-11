import React from "react";
import { SafeAreaView, ScrollView, View, Text, StyleSheet, Dimensions } from "react-native";
import { panGestureHandlerCustomNativeProps } from "react-native-gesture-handler/lib/typescript/handlers/PanGestureHandler";
import InputField from "../../../components/InputField";

const { width, height } = Dimensions.get("window");

const SignupScreen = () => {
    return (
        <SafeAreaView style={styles.container}> 
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View
                    style = {styles.rectangle}>
                    <InputField 
                        placeholder="Username"
                        style = {styles.userContainer}
                    />
                    <InputField 
                        placeholder="Password"
                        style = {styles.passContainer}
                    />
                </View>

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
    rectangle: {
        height: 750,
        width: 330,
        backgroundColor: "#6A994E",
        position: 'relative',
        padding: 8,
        borderRadius: 10,

    },
    contentContainer: {
        display: 'flex',
        alignItems: "center",
        width,
        height: height - 150,
        backgroundColor: "#1F1F1F",
        justifyContent: "space-between",
    },
    userContainer: {
        zIndex: 1,
        width: 312,
        height: 55,
        maxWidth: 500,
        borderRadius: 10,
        marginVertical: 5,
        elevation: 7.5,
        backgroundColor: "#F2E8CF",
        justifyContent: "center",
        alignItems: "center",
    },
    passContainer: {
        zIndex: 1,
        width: 312,
        height: 55,
        maxWidth: 500,
        borderRadius: 10,
        marginVertical: 5,
        elevation: 7.5,
        backgroundColor: "#F2E8CF",
        justifyContent: "center",
        alignItems: "center",
    },
        input: {
        width: "100%",
        height: "100%",
        paddingLeft: 15,
        fontSize: 16,
    }
});

export default SignupScreen;