import { Link, Redirect, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import {Text, View, Image, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';



export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className='bg-primary h-full'>
        <ScrollView contentContainerStyle={{height: '100%'}}>
          <View className='w-full h-[85vh] justify-center items-center h-full px-4'>
            <Image source={images.logo} className='w-[130px] h-[84px]' resizeMode='contain'/>
            <Image source={images.cards} className='max-w-[380px] w-full h-[300px]' resizeMode='contain'/>

            <View className='relative mt-5'> 
              <Text className='text-3xl text-white font-bold text-center'>
                Discover With endless quality products with {' '}<Text className='text-secondary-100'>
                  AWAS
                </Text>
              </Text>

              <Image source={images.path} className='w-[136px] h-[15px] absolute -bottom-2 -right-7' resizeMode='contain'/>
            </View>
            <Text className='text-sm font-pregular text-gray-100 mt-7 text-center'>Where Creativity meets innovation</Text>

            <CustomButton title="Continue with email" handlePress={() => router.push('./sign_in')} containerStyles="w-full mt-7"/>

          </View>
        </ScrollView>
        <StatusBar backgroundColor='#161622' style='light'/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
