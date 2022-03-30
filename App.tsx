import React from "react";
import "intl";
import "intl/locale-data/jsonp/pt-BR";
import { StatusBar } from "react-native";

import { ThemeProvider } from "styled-components";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { Routes } from "./src/routes";

import theme from "./src/global/styles/theme";
import { AppRoutes } from "./src/routes/App.routes";
import { SignIn } from "./src/screens/signIn/SignIn";
import { AuthProvider } from "./src/hooks/auth";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}
