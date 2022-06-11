import React, { useState } from 'react';
import {
    SafeAreaView, 
    Dimensions, 
    StyleSheet, 
    View, 
    Text, 
    KeyboardAvoidingView, 
    Keyboard,
    TouchableOpacity
} from 'react-native';
import BrandButton from '../../components/BrandButton';
import TextInput from '../../components/InputField';
import { useTheme } from '../../hooks/useTheme';
import { ILoginDTO, loginClientMutation } from "../../graphql/mutations/login";
import { useMutation } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { setAccessToken } from '../../store/actions/auth.actions';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { setAggregatedUser } from '../../store/actions/user.actions';
import WalkingManSVG from "../../SVG/WalkingMan";

const { width, height } = Dimensions.get("screen");

const LoginScreen = ({navigation} : any) => {

    const { palette } = useTheme();

    const [ formData, setFormData ] = useState<ILoginDTO>({});
    const [loginUser, { data:_data, loading:_loading, error:_error }] = useMutation<unknown, { input: ILoginDTO }>(loginClientMutation, { 
        variables: { input: { ...formData }}
    });

    const handleCreateAccount = () => {
        navigation.navigate("signup");
    }

    const dispatch = useDispatch();

    const handleHome = () => {
        navigation.navigate("home");
    };

    const handleLogin = () => {
        Keyboard.dismiss();
        
        if(!formData.email || !formData.pass) {return;}

        loginUser().then(({ data } : any) => {
            const { accessToken, ...aggregatedUser } = data.loginUser; 
            dispatch(setAggregatedUser(aggregatedUser));
            dispatch(setAccessToken(accessToken));
            handleHome();
        }).catch((_: any) => {
            console.log(_);
            // Handle Bad Request or Internal Server Errors
        }); 
    }

    const updateFormData = (key:keyof ILoginDTO) => (e:string) => {
        setFormData({ ...formData, [ key]: e })
    };

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: palette.darkGrey }]} >
            <KeyboardAvoidingView behavior={"position"}>
                <View style={styles.content}>
                    <View style={styles.wallet}>
                        <WalkingManSVG width={width * 0.65} />
                    </View>
                    <Text style={[ styles.header, { color: "#fff" } ]}>
                        Login to Account
                    </Text>
                    <TextInput 
                        onSubmitEditing={handleLogin}
                        onChangeText={updateFormData('email')}
                        placeholder="example@gmail.com"
                        keyboardType='email-address'
                    />
                    <TextInput 
                        onSubmitEditing={handleLogin}
                        onChangeText={updateFormData('pass')}
                        secureTextEntry={true}
                        placeholder="Password"
                    />
                    <BrandButton onPress={handleLogin} style={{ marginTop: 25}} title="Login" />
                    <View style={styles.orContainer}>
                        <View style={[styles.horizontalLineLeft]}/>
                        <Text style={[styles.or]}>Or</Text>
                        <View style={[styles.horizontalLineRight]}/>
                    </View>
                    <View style={{ marginTop: 30 }}>
                        <TouchableOpacity style={styles.loginContainer} onPress={handleCreateAccount}>
                            <Text style={[ styles.notice ]}>
                                Don't Have an Account?
                            </Text>
                            <FontAwesomeIcon color={"#fff"} icon={faAngleRight} />
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width,
        minHeight: height,
        display: 'flex',
    },
    content: {
        display: 'flex',
        alignItems: 'center',
        paddingVertical: 15,
        height: height - 75,
        flexDirection: "column",
        justifyContent: 'center',
    },
    wallet: {
        marginTop: height * 0.05,
    },
    loginContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: width,
        alignItems: 'center',
        marginBottom: 25,
    },
    header: {
        marginTop: 25,
        marginBottom: 25,
        fontWeight: "400",
        fontSize: 25,
    },
    notice: {
        textAlign: 'center',
        color: "#797979",
    },
    displayRect: {
        display: 'flex',
        position: 'absolute',
        bottom: 100,
        alignItems: 'center',
        width: '95%',
        height: '60%',
        borderRadius: 30,
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#16152F',
    },
    orContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 50,
        justifyContent: "space-around"
    },
    or: {
        color: '#8F8F8F',
        width: "10%",
        textAlign: 'center',
    },
    horizontalLineLeft: {
        borderBottomWidth: 1,
        borderBottomColor: '#8F8F8F',
        width: '35%',
    },
    horizontalLineRight: {
        borderBottomWidth: 1,
        borderBottomColor: '#8F8F8F',
        width: '35%'
    },
    input: {
        width: width * 0.75,
        height: 55,
        borderRadius: 5,
        paddingHorizontal: 15,
        marginVertical: 5,
    }
});

export default LoginScreen;