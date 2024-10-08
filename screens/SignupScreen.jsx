import {
  Image,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
  FadeOut,
} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
// import SignupScreen from './SignupScreen';

const SignupScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="bg-white w-full h-full">
      <StatusBar styles="light" />
      <Image
        className="h-full w-full absolute"
        source={require('../assets/images/background.png')}
      />

      {/* ligths */}
      <View className=" flex-row justify-around w-full absolute ">
        <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify()}
          className="h-[225] w-[90]"
          source={require('../assets/images/light.png')}
        />
        <Animated.Image
          entering={FadeInUp.delay(400).duration(1000).springify()}
          className="h-[160] w-[65]"
          source={require('../assets/images/light.png')}
        />
      </View>

      {/* title ve form */}

      <View className="h-full w-full justify-around pt-48">
        {/* title */}
        <View className="flex items-center">
          <Animated.Text
            entering={FadeInUp.duration(1000).springify()}
            className="text-white font-bold tracking-wider mt-5 text-5xl ">
            Sign Up
          </Animated.Text>
        </View>
        {/* form */}
        <View className="flex items-center mx-4 space-y-4">
          <Animated.View
            entering={FadeInDown.duration(1000).springify()}
            className="bg-black/5 p-2 rounded-2xl w-full">
            <TextInput
              className="text-black"
              placeholder="User Name"
              placeholderTextColor={'gray'}
            />
          </Animated.View>

          <Animated.View
            entering={FadeInDown.delay(200).duration(1000).springify()}
            className="bg-black/5 p-2 rounded-2xl w-full">
            <TextInput
              className="text-black"
              placeholder="Email"
              placeholderTextColor={'gray'}
            />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(400).duration(1000).springify()}
            className="bg-black/5 p-2 rounded-2xl w-full mb-3">
            <TextInput
              secureTextEntry
              className="text-black"
              placeholder="Password"
              placeholderTextColor={'gray'}
            />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(600).duration(1000).springify()}
            className="w-full">
            <TouchableOpacity className=" w-full bg-sky-400 p-3 rounded-2xl mb-3">
              <Text className="text-xl font-bold text-white text-center">
                Sign Up
              </Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(800).duration(1000).springify()}
            className="flex-row justify-center">
            <Text className="text-black">Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text className="text-sky-600 ">Login</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default SignupScreen;
