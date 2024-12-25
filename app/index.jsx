import { StatusBar, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
  return (
    <>
      <StatusBar style="auto" />
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-center">Aora!</Text>
        <StatusBar style="auto" />
        <Link href="/profile" style={{ color: "blue" }}>
          Go to Profile
        </Link>
        <Text className="text-3xl text-center">Aora!</Text>
      </View>
    </>
  );
};

export default index;

// const styles = StyleSheet.create({
//   container:{height:"100%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}
// })
