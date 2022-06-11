import "react-native-gesture-handler";
import React, { ReactChild, Suspense } from 'react';
import { Provider as ReduxProvider, useSelector } from "react-redux";
import AppNavigator from './AppNavigator';
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from '@apollo/client';
import { PersistGate } from 'redux-persist/integration/react';
import config from './src/config';
import { IRootReducer } from "./src/store/reducers";
import { getAccessToken } from "./src/store/selectors/auth.selectors";
import store, { persistor } from "./src/store";
import { Dimensions, SafeAreaView, StyleSheet } from "react-native";
import { useTheme } from "./src/hooks/useTheme";

const { width, height } = Dimensions.get('window');

type ApolloClientWrapperProps = { children: ReactChild };

const client = new ApolloClient({ cache: new InMemoryCache() });

const ApolloClientWrapper: React.FC<ApolloClientWrapperProps> = ({ children }) => {
  const state = useSelector((state:IRootReducer) => state);
  const accessToken = getAccessToken(state);
  
  const link = new HttpLink({
    uri: `${config.api.url}/graphql`,
    headers: {
      "Authorization": `Bearer ${accessToken}`,
    }
  })

  client.setLink(link);

  return (
    <ApolloProvider client={client}>
      { children }
    </ApolloProvider>
  )
}

 const App = () => {
    const ReduxBlocker = () => {
      const { palette } = useTheme();
      return <SafeAreaView style={[ styles.container, { backgroundColor: palette.darkGrey }]}></SafeAreaView>;
    };

   return (
    <ReduxProvider store={store}>
      <PersistGate loading={<ReduxBlocker/>} persistor={persistor}>
        <ApolloClientWrapper>
          <Suspense fallback={<></>}>
            <AppNavigator />
          </Suspense>
        </ApolloClientWrapper>
      </PersistGate>
    </ReduxProvider>
   )
 }
 

const styles = StyleSheet.create({
  container: {
      flex: 1,
      width: width,
      height: height,
  },
});

export const apolloClient = client; 

export default App; 

