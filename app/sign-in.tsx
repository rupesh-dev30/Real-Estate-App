import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";

export default function SignIn() {
  const handleLogin = () => {
    console.log("Login button clicked");
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          className="w-full h-4/6"
          resizeMode="contain"
        />
        <View className="px-10">
          <Text className="text-center uppercase font-rubik text-black-200 text-2xl -mt-10 mb-4">
            Welcome to EState
          </Text>
          <Text className="text-4xl font-rubik-bold text-center text-black-300 mt-2">
            Let&apos;s Get You Closer To {"\n"}{" "}
            <Text className="text-primary-300">Your Ideal Home</Text>
          </Text>
          <Text className="font-rubik text-center mt-5 text-xl text-black-200">
            Login to EState with Google{" "}
          </Text>

          <TouchableOpacity
            className="bg-white shadow-lg shadow-zinc-800 rounded-full w-full py-5 mt-4"
            onPress={handleLogin}
          >
            <View className="flex flex-row items-center justify-center gap-2">
              <Image
                source={icons.google}
                className="w-6 h-6"
                resizeMode="contain"
              />
              <Text className="text-xl font-rubik-medium text-black-300 ml-2">
                Sign Up with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
