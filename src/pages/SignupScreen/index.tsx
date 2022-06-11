import React, { useCallback, useEffect, useState } from 'react';
import {
    SafeAreaView, 
    Dimensions, 
    StyleSheet, 
    View, 
    Text, 
    KeyboardAvoidingView, 
    Keyboard
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BrandButton from '../../components/BrandButton';
import TextInput from '../../components/InputField';
import { createUserMutation, ICreateUserDTO } from '../../graphql/mutations/createUser';
import { useTheme } from '../../hooks/useTheme';
import { emailPattern } from '../../utils/patterns';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"; 
import { useDispatch } from 'react-redux';
import { setAccessToken } from '../../store/actions/auth.actions';
import { useMutation } from '@apollo/client';
import { setAggregatedUser } from '../../store/actions/user.actions';
import WalkingManSVG from '../../SVG/WalkingMan';

const { width, height } = Dimensions.get("screen");

const CreateAccountScreen = ({ route, navigation} : any) => {
    const [ formData, setFormData ] = useState<ICreateUserDTO>({});

    const [createUser, { data:_data, loading:_loading, error:_error }] = useMutation<unknown, { input: ICreateUserDTO }>(createUserMutation(), {
        variables: { input: { ...formData }}
    });
    const { theme: { background, text, grey }, palette } = useTheme();
    
    const handleLogin = () => {
        navigation.navigate("login");
    }

    const handleHome = () => {
        navigation.navigate("home");
    };

    const updateFormData = (key:keyof ICreateUserDTO) => (e:string) => {
        setFormData({ ...formData, [ key]: e })
    };

    const dispatch = useDispatch();

    const handleCreateAccount = () => {
        Keyboard.dismiss();
        if (!formData.email || !emailPattern.test(formData?.email)) return
        else if (!formData.pass || formData?.pass?.length < 8) return;
        createUser().then(({ data } : any) => {
            const { accessToken, ...aggregatedUser } = data.createUser; 
            dispatch(setAggregatedUser(aggregatedUser));
            dispatch(setAccessToken(accessToken));
            handleHome();
        }).catch((_: any) => {
            console.log(_)
;            // Handle Create Account Error (Duplicate Email)
        }); 
    };  

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: palette.darkGrey }]} >
            <KeyboardAvoidingView behavior={"position"}>
                <View style={styles.content}>
                    <View style={styles.wallet}>
                        <WalkingManSVG width={width * 0.65} />
                    </View>
                    <Text style={[ styles.header, { color: "#fff" } ]}>
                        Create Account
                    </Text>
                    <TextInput 
                        onSubmitEditing={handleCreateAccount}
                        onChangeText={updateFormData('email')}
                        placeholder="example@gmail.com"
                    />
                    <TextInput 
                        onSubmitEditing={handleCreateAccount}
                        onChangeText={updateFormData('pass')}
                        secureTextEntry={true}
                        placeholder="Password"
                    />
                    <BrandButton onPress={handleCreateAccount} style={{ marginTop: 25 }} title="Create Account" />
                    <View style={styles.orContainer}>
                        <View style={[styles.horizontalLineLeft]}/>
                        <Text style={[styles.or]}>Or</Text>
                        <View style={[styles.horizontalLineRight]}/>
                    </View>
                    <View style={{ marginTop: 30 }}>
                        <TouchableOpacity style={styles.loginContainer} onPress={handleLogin}>
                            <Text style={[ styles.notice ]}>
                                Already Have an Account? Login
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
});

export default CreateAccountScreen;