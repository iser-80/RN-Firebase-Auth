import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowSmallRightIcon } from "react-native-heroicons/mini";
import React, { useEffect, useState } from 'react'
import { auth, signOut } from '../../firebase';


export default function Welcome({ navigation }) {
  return (
    <View className="flex-1 bg-[#fd746c] py-5 relative">
      <LinearGradient className="absolute bottom-0 w-full h-[100%]" colors={['#fd746c', '#ff9068']} />
      <View className="flex mt-32 px-10">
        <Text className="text-5xl text-white" style={{fontFamily: 'kalnia-semiBold'}}>Welcome</Text>
        <Text className="text-xl text-orange-100 mt-2 ml-2" style={{fontFamily: 'poppins-semiBold'}}>To Firebase Authentication</Text>
        <Text className="text-xl text-orange-100 ml-2" style={{fontFamily: 'poppins-semiBold'}}>With React Native</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} className="flex flex-row rounded-xl shadow-md shadow-black/20 items-center justify-around mt-12 py-3 px-4 bg-blue-500">
          <Text className="text-xl text-white" style={{fontFamily: 'poppins-semiBold'}}>Get Started</Text>
          <ArrowSmallRightIcon size={35} color='white'/>
        </TouchableOpacity>
      </View>
      <Image className="absolute h-[50%] w-full bottom-0" source={require('../../assets/images/welcome.png')} />
    </View>
  )
}