import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { auth, signOut } from '../../firebase';

export default function Home({ navigation }) {
    const [user, setUser] = useState(null)

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((currentUser) => {
        setUser(currentUser)
      })
  
      if(unsubscribe){
        return unsubscribe
      }
    })
  
    const handleSignOut = async () => {
        try {
          await signOut();
          // After successful sign-out, you may want to navigate to the login screen or perform other actions
          navigation.navigate('Login'); // Replace 'Login' with the appropriate screen name
        } catch (error) {
          console.error('Sign-out failed:', error);
          // Handle sign-out failure (e.g., display an error message to the user)
        }
      };

  return (
    <View className='flex-1 relative'>
        <LinearGradient className='absolute w-full h-full' colors={['#29323c', '#485563']} />
        <View className='flex-1 py-20 items-center justify-between'>
            <View className='w-full h-1/2 items-center'>
                <Image className='h-[70%] w-full mt-20' source={require('../../assets/images/congratulation.png')} />
                <Text className='text-4xl text-white mt-2' style={{fontFamily: 'kalnia-semiBold'}}>Congratulation</Text>
                {user && <Text className='text-xl text-gray-50 mt-4 px-20 text-center' style={{fontFamily: 'poppins-semiBold'}}>{user.email}</Text>}
                <Text className='text-md text-gray-50 mt-2 px-20 text-center' style={{fontFamily: 'poppins'}}>You Just Sign Up ! Welcome To Our Community Now, Everything You Need Now Come To Us</Text>
            </View>
            <TouchableOpacity onPress={handleSignOut} className='py-4 px-5 bg-white w-[90%] text-white rounded-3xl items-center'>
                <Text className='text-2xl text-orange-600' style={{fontFamily: 'kalnia-semiBold'}}>Log Out</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}