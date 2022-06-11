import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Dimensions, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import BrandButton from "../../components/BrandButton";
import InputField from "../../components/InputField";
import { createPostMutation, ICreatePostDTO } from "../../graphql/mutations/createPost";

const { width, height } = Dimensions.get("screen");

const PostCreate = ({ navigation }: any) => {
    const [ formData, setFormData ] = useState<ICreatePostDTO>({});

    const [createPost, { data:_data, loading:_loading, error:_error }] = useMutation<unknown, { input: ICreatePostDTO }>(createPostMutation(), {
        variables: { input: { ...formData }}
    });
    
    const updateFormData = (key:keyof ICreatePostDTO) => (e:string) => {
        let val:any = e; 

        if (key === "latitude" || key === "longitude") {
            val = parseFloat(e);
        };

        setFormData({ ...formData, [ key ]: val })
    };

    const onSubmit = () => {
        if (!formData.description || !formData.latitude || !formData.longitude) {
            return; 
        }
        console.log(formData);
        createPost().then(() => {
            navigation.navigate("home");
        })
    };

    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View>
                    <InputField 
                        onChangeText={updateFormData('description')}
                        placeholder="Description" 
                    />
                    <InputField 
                        onChangeText={updateFormData('latitude')}
                        placeholder="Latitude"  
                    />
                    <InputField 
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