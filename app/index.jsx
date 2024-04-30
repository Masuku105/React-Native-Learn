import { Link, SplashScreen } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';


SplashScreen.preventAutoHideAsync();
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl pb-2 font-pblack">Aora</Text>
      <StatusBar style="auto" />
      <Link href="./profile" style={{color:'blue'}}>Profile</Link>
    </View>
  );
}


