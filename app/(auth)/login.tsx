import { router } from "expo-router";
import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    router.replace("/(tabs)/home");
  };

  return (
    <View>
      <Text>Welcome Back</Text>
      <Text>Login to Continue</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        className="border border-gray-300 rounded-xl p-4 mb-4"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        className="border border-gray-300 rounded-xl p-4 mb-6"
      />

      <Pressable onPress={handleLogin} className="bg-blue-600 rounded-xl p-4">
        <Text className="text-white text-center font-bold">Login</Text>
      </Pressable>
      <Pressable
        className="mt-5"
        onPress={() => router.push("/(auth)/register")}
      >
        <Text className="text-center text-blue-600">Create Account</Text>
      </Pressable>
    </View>
  );
}
