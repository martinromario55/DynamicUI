import { StyleSheet, View, Text, SafeAreaView, Platform } from 'react-native'

import CustomButton from './components/CustomButton/CustomButton'

export default function App() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={[styles.box]}>
          <Text style={styles.text}>Hello World!</Text>
          <CustomButton
            onPress={() => console.log('Pressed')}
            title="Press Me"
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: 'plum',
  },
  container: {
    flex: 1,
    backgroundColor: 'plum',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  box: {
    padding: 20,
  },
  text: {
    ...Platform.select({
      ios: {
        fontSize: 24,
        color: 'purple',
        fontStyle: 'italic',
      },
      android: {
        fontSize: 30,
        color: 'blue',
      },
    }),
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
