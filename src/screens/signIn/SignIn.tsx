import React from "react";
import { useState } from "react";
import { Platform } from "react-native";
import { ActivityIndicator, Alert } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import AppleSvg from "../../assets/apple.svg";
import GoogleSvg from "../../assets/google.svg";
import LogoSvg from "../../assets/logo.svg";
import { SignSocialButton } from "../../components/signInSocialButton/SignSocialButton";
import theme from "../../global/styles/theme";
import { useAuth } from "../../hooks/auth";

import {
  Container,
  Header,
  TitleWrapper,
  Title,
  SignInTitle,
  Footer,
  FooterWrapper,
} from "./styles";

export function SignIn() {
  const { signInWithGoogle, signInWithApple } = useAuth();

  const [isLoading, setIsLoading] = useState(false);

  async function handleSignInWithGoogle() {
    setIsLoading(true);
    try {
      return await signInWithGoogle();
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possivel conectar a conta Google");
      setIsLoading(false);
    }
  }

  async function handleSignInWithApple() {
    setIsLoading(true);
    try {
      return await signInWithApple();
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possivel conectar a conta Apple");
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSvg width={RFValue(120)} height={RFValue(68)} />

          <Title>
            Controle suas {"\n"} finanças de forma {"\n"} muito simples
          </Title>
        </TitleWrapper>

        <SignInTitle>
          Faça seu login {"\n"} com uma das contas abaixo
        </SignInTitle>
      </Header>

      <Footer>
        <FooterWrapper>
          <SignSocialButton
            title="Entrar com Google"
            svg={GoogleSvg}
            onPress={handleSignInWithGoogle}
          />
          {Platform.OS === "ios" && (
            <SignSocialButton
              title="Entrar com Apple"
              svg={AppleSvg}
              onPress={handleSignInWithApple}
            />
          )}
        </FooterWrapper>

        {isLoading && (
          <ActivityIndicator
            color={theme.colors.shape}
            style={{ marginTop: 18 }}
          />
        )}
      </Footer>
    </Container>
  );
}
