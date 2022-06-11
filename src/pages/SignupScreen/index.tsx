import React from "react";
import { SafeAreaView, ScrollView, View, Text, StyleSheet, Dimensions } from "react-native";
import { panGestureHandlerCustomNativeProps } from "react-native-gesture-handler/lib/typescript/handlers/PanGestureHandler";
import BrandButton from "../../components/BrandButton";
import InputField from "../../components/InputField";

const { width, height } = Dimensions.get("window");

const SignupScreen = ({ navigation } : any) => {
    const handleSelectGeofield = () => {
        navigation.navigate("signup-geolocation")
    }

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
                <BrandButton onPress={handleSelectGeofield} title="Select Geofield" />
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
        width: 330,
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