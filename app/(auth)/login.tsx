import { router } from "expo-router";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // API call later
    router.replace("/home");
  };

  return (
    <View className="flex-1 bg-white justify-center px-6">
      <Text className="text-4xl font-bold mb-2">Welcome Back</Text>

      <Text className="text-gray-500 mb-8">Login to continue</Text>

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

      <Pressable className="mt-5" onPress={() => router.push("/register")}>
        <Text className="text-center text-blue-600">Create Account</Text>
      </Pressable>
    </View>
  );
}
