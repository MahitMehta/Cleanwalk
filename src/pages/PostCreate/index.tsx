import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Dimensions, View, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import BrandButton from "../../components/BrandButton";
import InputField from "../../components/InputField";
import { createPostMutation, ICreatePostDTO } from "../../graphql/mutations/createPost";
import { isNaN } from "lodash";
import Geolocation from "react-native-geolocation-service";

const { width } = Dimensions.get("screen");

const PostCreate = ({ navigation }: any) => {
    const [ formData, setFormData ] = useState<ICreatePostDTO>({});

    const [createPost, { data:_data, loading:_loading, error:_error }] = useMutation<unknown, { input: ICreatePostDTO }>(createPostMutation(), {
        variables: { input: { ...formData }}
    });
    
    const updateFormData = (key:keyof ICreatePostDTO) => (e:string) => {
        let val:any = e; 

        if (key === "latitude" || key === "longitude") {
            val = !isNaN(parseFloat(e)) ? parseFloat(e) : e;
        };

        setFormData({ ...formData, [ key ]: val })
    };

    const onSubmit = () => {
        if (!formData.description || !formData.latitude || !formData.longitude) {
            return; 
        }
        createPost().then(() => {
            navigation.navigate("home");
        })
    };

    const getCoordinates = async () => {
        Geolocation.getCurrentPosition((pos) => {
            setFormData({ ...formData, latitude: pos.coords.latitude, longitude: pos.coords.longitude });
        }, (e) => {
            console.log(e);
        }, { enableHighAccuracy: true });
    }

    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View>
                    <InputField 
                        value={formData.description}
                        onChangeText={updateFormData('description')}
                        placeholder="Description" 
                    />
                    <Button onPress={getCoordinates} title="Get Current Coordinates"></Button>
                    <InputField 
                        keyboardType="numeric"
                        value={formData.latitude?.toString()}   
                        onChangeText={updateFormData('latitude') || ""}
                        placeholder="Latitude"  
                    />
                    <InputField 
                        value={formData.longitude?.toString()}   
                        onChangeText={updateFormData('longitude')}
                        placeholder="Longitude"  
                    />
                </View>
                <BrandButton onPress={onSubmit} style={{ marginTop: 15}} title="Create Walk!" />
            </ScrollView>
        </SafeAreaView>
    )
}   

const styles = StyleSheet.create({
    container: {
        width,
        display: "flex",
    },
    contentContainer:{
        display: "flex",
        alignItems: 'center',
    }
})

export default PostCreate;