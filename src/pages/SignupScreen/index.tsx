import React from "react";
import { SafeAreaView, ScrollView, View, Text, StyleSheet, Dimensions } from "react-native";
import { panGestureHandlerCustomNativeProps } from "react-native-gesture-handler/lib/typescript/handlers/PanGestureHandler";
import InputField from "../../components/InputField";
import BrandButton from "../../components/BrandButton";
import { NavigationRouteContext } from "@react-navigation/native";
import { useTheme } from "../../hooks/useTheme";
const { width, height } = Dimensions.get("window");

interface SignupScreenProps {
    navigation: any,
}

const SignupScreen : React.FC<SignupScreenProps> = ({ navigation }) => {
    const { palette } = useTheme();

    const handleLogin = () => {    
        navigation.navigate("login")
    };
    const handleHomeScreen = () => {    
        navigation.navigate("home")
    };

    const handleSelectGeofield = () => {
        navigation.navigate("signup-geolocation");
    };
    return (
        <SafeAreaView style={styles.container}> 
            <ScrollView contentContainerStyle={styles.contentContainer}>
                    <InputField 
                        placeholder="First Name"
                        style = {styles.firstContainer}
                    />
                    <InputField 
                        placeholder="Last Name"
                        style = {styles.lastContainer}
                    />
                    <InputField 
                        placeholder="Userame"
                        style = {styles.userContainer}
                    />
                    <InputField 
                        placeholder="Password"
                        style = {styles.passContainer}
                    />
                    <View>
                    <BrandButton onPress={handleHomeScreen} style={styles.buttonContainer} title="Sign Up" />
                    <BrandButton onPress={handleLogin} style = {styles.alreadyContainer} title = "Already have an account? Log in" />
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
    contentContainer: {
        display: 'flex',
        alignItems: "center",
        width,
        height: height - 150,
        backgroundColor: "#1F1F1F",
    },
    firstContainer: {
        zIndex: 1,
        width: 312,
        height: 55,
        maxWidth: 500,
        borderRadius: 10,
        marginTop: 100,
        marginVertical: 25,
        elevation: 7.5,
        backgroundColor: "#F2E8CF",
        
    },
    lastContainer: {
        zIndex: 1,
        width: 312,
        height: 55,
        maxWidth: 500,
        borderRadius: 10,
        marginVertical: 25,
        elevation: 7.5,
        backgroundColor: "#F2E8CF",
        
    },
    userContainer: {
        zIndex: 1,
        width: 312,
        height: 55,
        maxWidth: 500,
        borderRadius: 10,
        marginVertical: 25,
        elevation: 7.5,
        backgroundColor: "#F2E8CF",
        
    },
    passContainer: {
        zIndex: 1,
        width: 312,
        height: 55,
        maxWidth: 500,
        borderRadius: 10,
        marginVertical: 25,
        elevation: 7.5,
        backgroundColor: "#F2E8CF",
        
    },
        buttonContainer: {
            width: width * 0.9,
            height: 55,
            marginHorizontal: 10,
            marginVertical: 25,
            borderRadius: 5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
    },  alreadyContainer: {
        width: width * 0.9,
            height: 55,
            marginHorizontal: 10,
            marginVertical: 25,
            borderRadius: 5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "transparent",
    },
    
        input: {
        width: "100%",
        height: "100%",
        paddingLeft: 15,
        fontSize: 16,
    }
});

export default SignupScreen;