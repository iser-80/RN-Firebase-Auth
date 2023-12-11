import { View, Text, Image, TextInput, TouchableOpacity, Touchable, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { signUp } from '../../firebase'

export default function Register({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View className=" flex-1 relative items-center">
        <LinearGradient className='w-full h-full absolute'colors={['#fd746c', '#ff9068']} />
        <Text className='text-4xl mt-20 text-white' style={{fontFamily: 'kalnia-semiBold'}} >Welcome Back!</Text>
        <Image className='w-[100%] h-[45%]' source={require('../../assets/images/login.png')} />
        <View className='flex mt-2 p-5 w-full items-center'>  
          <Text className='text-3xl text-white' style={{fontFamily: 'kalnia-semiBold'}} >Please Sign Up!</Text>
          <View className='py-4 px-5 mt-4 w-full border border-white rounded-3xl'>
            <TextInput
              className=' w-full text-lg text-white'
              placeholder='Email ..'
              onChangeText={(val) => setEmail(val)}
              value={email}
            />
          </View>
          <TextInput
            className='py-4 px-5 mt-2 w-full text-lg text-white border border-white rounded-3xl'
            placeholder='Password ..'
            onChangeText={(val) => setPassword(val)}
            value={password}
          />
          <TouchableOpacity onPress={() => signUp(email, password)} className='py-4 px-5 mt-4 bg-white w-full text-white rounded-3xl items-center'>
            <Text className='text-2xl text-blue-500' style={{fontFamily: 'kalnia-semiBold'}}>Register</Text>
          </TouchableOpacity>
          <View className='flex flex-row mt-3 items-center'>  
            <Text className='text-white'>Already Have An Account ? </Text>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Login')}>
              <Text className='text-blue-600' style={{fontFamily: 'poppins'}} >Go Sign In</Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}