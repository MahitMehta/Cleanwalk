import { faEllipsis, faHandDots, faHeart, faListDots } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useMemo } from "react";
import { StyleSheet, Text, View, Dimensions, Image, Button, Linking } from "react-native";
import { useSelector } from "react-redux";
import { IPost } from "../../graphql/queries/getPosts";
import { IRootReducer } from "../../store/reducers";
import { getAccessToken } from "../../store/selectors/auth.selectors";
import NavigationSVG from "../../SVG/Navigation";
import Avatar from "../Avatar";
import moment from "moment";
import { faHeart as faHeartUnfilled} from "@fortawesome/free-regular-svg-icons";

const { width, height } = Dimensions.get("window");

interface PostsProps {
    post: IPost
}

const Post : React.FC<PostsProps> = ({ post }) => {
    const onClickWalk = () => {
        const coordinates = post.location?.coordinates; 
        if (!coordinates?.length) return;

        Linking.openURL(`http://www.google.com/maps/place/${coordinates[0]},${coordinates[1]}`)
    };

    const createdAt = useMemo(() => {
        return moment(post.createdAt).fromNow();
    }, [ post.createdAt ]);

    return (
        <View style={styles.container}>
           <View style={[ styles.contentContainer, { backgroundColor: "#111111"}]}>
                <View style={styles.header}>
                    <View style={styles.meta}>
                        <Avatar size={15} iconSize={20}/>
                        <View>
                            <Text style={styles.username}>{ post.user?.email }</Text>
                            <Text style={styles.createdAt}>{ createdAt} </Text>
                        </View>
                    </View>
                    <FontAwesomeIcon color="#fff" icon={faEllipsis} />
                </View>
                {
                    false ? (
                        <Image style={styles.image} source={{
                            uri: "https://images.firstpost.com/wp-content/uploads/2019/03/Garbage-1.jpg",
                            headers: undefined || {},
                            cache: "force-cache",
                        }} />
                    ) : (
                        <View style={styles.placeholder}>
                            <NavigationSVG width={width * 0.9}/>
                        </View>
                    )
                }
                <View style={styles.footer}>
                    <Text style={styles.description}>{ post.description }</Text>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: 'center'}}>
                        <Button onPress={onClickWalk} title="Begin Clean Walk" />
                        {
                            false ? (
                                <FontAwesomeIcon color="red" icon={faHeart} />
                            ) : (
                                <FontAwesomeIcon color="grey" icon={faHeartUnfilled} />
                            )
                        }
                    </View>
                </View>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
    },
    meta:{
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
    },
    description: {
        color: "white",
    },
    placeholder: {
        width,
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
    },
    createdAt: {
        color: "grey",
        marginLeft: 10,
    },
    contentContainer: {
        width: "100%",
        borderRadius: 5,
    },
    image:{
        width: "100%",
        aspectRatio: 1
    },
    footer: {
        width: "100%",
        padding: 15,
        display: "flex",
        alignItems: "center",
    },
    header: {
        padding: 10,
        paddingVertical: 5,
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
    },
    username: {
        color: "#fff",
        marginLeft: 10,
    }
})

export default Post; 