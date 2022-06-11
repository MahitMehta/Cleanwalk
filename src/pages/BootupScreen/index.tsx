import React from "react";
import { SafeAreaView, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import BrandButton from "../../components/BrandButton";
import { useTheme } from "../../hooks/useTheme";
import LogoSVG from "../../SVG/Logo";
import WalkingGirlSVG from "../../SVG/WalkingGirl";

const { width, height } = Dimensions.get("window");

const BootupScreen = () => {
    const { palette } = useTheme();
    return (
        <SafeAreaView style={styles.container}> 
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <LogoSVG width={100} />
                <Text style={styles.header}>Cleanwalk</Text>
                <WalkingGirlSVG width={width * 0.95} />
                <BrandButton style={styles.registerButton} title="Start Walking Today" />
                <BrandButton 
                    style={[ styles.loginButton ]} 
                    title="Restart Trash Walking"
                    color={palette.milkWhite}
                />
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
        backgroundColor: "#1F1F1F",
    },
    header: {
        fontWeight: "700",
        fontSize: 30,
        color: "#fff",
    },
    registerButton: {
        marginTop: 35,
    },
    loginButton: {
        backgroundColor: "transparent"

    }
}); 

export default BootupScreen;