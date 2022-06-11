import React from "react";
import { SafeAreaView, ScrollView, View, Text, StyleSheet, Dimensions } from "react-native";
import { panGestureHandlerCustomNativeProps } from "react-native-gesture-handler/lib/typescript/handlers/PanGestureHandler";
import InputField from "../../components/InputField";
import BrandButton from "../../components/BrandButton";
import { NavigationRouteContext } from "@react-navigation/native";
import { useTheme } from "../../hooks/useTheme";
