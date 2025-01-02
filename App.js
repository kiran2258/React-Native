// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TouchableOpacity,
//   Alert,
// } from 'react-native';
// import React from 'react';

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>App</Text>
//       <Image
//         style={styles.img}
//         source={{
//           uri: 'https://images.pexels.com/photos/887173/pexels-photo-887173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//         }}
//       />
//       {/* <Button title="Press Me"></Button> */}
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => Alert.alert('pressed!')}>
//         <Text style={styles.btnText}>Press Me</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     width: '100%',
//     height: '100%',
//     backgroundColor: '#555',
//     padding:20,
//     gap:60,
//   },
//   text: {
//     color: 'white',
//     fontSize: 50,
//     fontWeight: 'bold',
//   },
//   img: {
//     width: 200,
//     height: 300,
//   },
//   button: {
//     backgroundColor: 'blue',
//     padding: 10,
//     margin: 10,
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   btnText:{
//     color: 'white',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
// });


import React from 'react';
import {Image, ScrollView, Text} from 'react-native';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
};

const App = () => (
  <ScrollView>
    <Text style={{fontSize: 96}}>Scroll me plz</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 96}}>If you like</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 96}}>Scrolling down</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 96}}>What's the best</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 96}}>Framework around?</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 80}}>React Native</Text>
  </ScrollView>
);

export default App;