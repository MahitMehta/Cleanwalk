import { useQuery } from "@apollo/client";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useEffect} from "react";
import { Dimensions, RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Post from "../../components/Post";
import { getPostsQuery, IPost } from "../../graphql/queries/getPosts";
import { useTheme } from "../../hooks/useTheme";

const { width, height } = Dimensions.get("window");

const HomeScreen = ({ navigation } : any) => {
    const { palette } = useTheme();

    const { data:postsData, refetch:refetchPosts, loading } = useQuery(getPostsQuery(), { 
        fetchPolicy: "cache-first",
        variables: {}
    });

    const posts = postsData?.getPosts || [];

    useEffect(() => {
        navigation.setOptions({
            title: "",
            headerRight: () => (
                <TouchableOpacity>
                    <FontAwesomeIcon size={25} color="#fff" icon={faPlus} />
                </TouchableOpacity>
            ),
            headerLeft: () => (
                <Text style={styles.headerText}></Text>
            ),
        })
    });

    const onRefreshPosts = () => {
        refetchPosts();
    };

    return (
        <SafeAreaView style={[ styles.container, { backgroundColor: palette.darkGrey }]}>
           <View style={{ flex: 1 }}>
                <ScrollView 
                    refreshControl={
                        <RefreshControl
                            tintColor="#fff"
                            titleColor="#fff"
                            refreshing={loading}
                            onRefresh={onRefreshPosts}
                        />
                    }
                    contentContainerStyle={{ paddingBottom: 100 }}>
                    {
                        posts.map((post:IPost, index:number) => {
                            return <Post key={index} post={post} />
                        })
                    }
                </ScrollView>
           </View>
        </SafeAreaView>
    )
}

const styles= StyleSheet.create({
    container: {
        width,
        height,
    },
    headerText: {
        color: "#fff",
        fontSize: 20,
    },
    header: {
        display: "flex",
        flexDirection: "row",
        width,
        justifyContent: "space-between",
    }
})

export default HomeScreen; 