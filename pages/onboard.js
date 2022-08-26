import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  StatusBar,
  FlatList,
  Text,
  Image,
  View,
} from 'react-native';

const { width, height } = Dimensions.get('window');
let sliders = [
  {
    id: '1',
    image: require('../assets/1.png'),
    title: 'Tired App',
    subtitle: 'Built With Love For Fatigue, Tired and Morose Moments ',
  },
  {
    id: '2',
    image: require('../assets/1.png'),
    title: 'First Page',
    subtitle: 'Lorem Ipsum is simply dummy text of the printing ',
  },
  {
    id: '3',
    image: require('../assets/1.png'),
    title: 'Third Page',
    subtitle: 'Lorem Ipsum is simply dummy text of the printing ',
  },
  {
    id: '4',
    image: require('../assets/1.png'),
    title: 'First Page',
    subtitle: 'Lorem Ipsum is simply dummy text of the printing ',
  },
];
const COLORS = { primary: '#282534', white: '#fff' };

const Slide = ({ item }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Image
        source={item.image}
        style={{ height: '75%', width, resizeMode: 'contain' }}
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
    </View>
  );
};

const Footer = () =>{
  
}
const Onboarding = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <StatusBar style={{ color: COLORS.primary }} />
      <FlatList
        pagingEnabled
        data={sliders}
        contentContainerStyle={{ height: height * 0.75 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Slide item={item} />}
      />
      <Footer/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: -20,
    textAlign: 'center',
  },
  subtitle: {
    color: COLORS.white,
    fontSize: 13,
    marginTop: 10,
    textAlign: 'center',
    maxWidth: '70%',
    lineHeight: 23,
  },
});
export default Onboarding;
