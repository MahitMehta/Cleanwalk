import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import BrandButton from "../../components/BrandButton";
import { useTheme } from "../../hooks/useTheme";
import LogoSVG from "../../SVG/Logo";
import WalkingGirlSVG from "../../SVG/WalkingGirl";

const { width, height } = Dimensions.get("window");

interface BootupScreenProps {
    navigation: any,
}

const BootupScreen : React.FC<BootupScreenProps> = ({ navigation }) => {
    const { palette } = useTheme();

    const handleSignUp = () => {
        navigation.navigate("signup");
    };

    return (
        <SafeAreaView style={styles.container}> 
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.header}>
                    <LogoSVG width={100} />
                    <Text style={styles.headerText}>Cleanwalk</Text>
                    <WalkingGirlSVG width={width * 0.95} />
                </View>
                <View>
                    <BrandButton onPress={handleSignUp} style={styles.registerButton} title="Start Walking Today" />
                    <BrandButton 
                        style={[ styles.loginButton ]} 
                        title="Restart Trash Walking"
                        color={palette.milkWhite}
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
    contentContainer: {
        display: 'flex',
        alignItems: "center",
        width,
        height: height - 125,
        backgroundColor: "#1F1F1F",
        justifyContent: "space-between",
    },
    header: {
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
    },
    headerText: {
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