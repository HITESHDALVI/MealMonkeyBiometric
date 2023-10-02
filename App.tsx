import React,{useEffect,useState} from 'react'; 
import { 
  SafeAreaView, 
  StatusBar,
  StyleSheet, 
  useColorScheme, 
} from 'react-native';
import {
  Colors, 
} from 'react-native/Libraries/NewAppScreen'; 
import Login from './src/screens/Login';
import { NavigationContainer } from '@react-navigation/native'; 
import ThemeScreen from './src/navigation/ThemeScreen';
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics'

const rnBiometrics = new ReactNativeBiometrics({allowDeviceCredentials: true})
function App(): JSX.Element {
  
  const isDarkMode = useColorScheme() === 'dark';
  const [login, setLogin] = useState(false) 
  const backgroundStyle = {
    flex:1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const handleLogin=()=>{
    rnBiometrics.isSensorAvailable()
    .then((resultObject) => {
      const { available, biometryType } = resultObject
      console.log({resultObject})
      if (available && biometryType === BiometryTypes.TouchID) {
        console.log('TouchID is supported')
      } else if (available && biometryType === BiometryTypes.FaceID) {
        console.log('FaceID is supported')
      } else if (available && biometryType === BiometryTypes.Biometrics) {
        rnBiometrics.biometricKeysExist()
        .then((resultObject) => {
          console.log({resultObject})
          const { keysExist } = resultObject
          if (keysExist) {
            rnBiometrics.simplePrompt({promptMessage: 'Confirm fingerprint'})
            .then((resultObject) => {
              const { success } = resultObject
              if (success) {
                setLogin(true)
              } else {
                setLogin(false)
              }
            })
            .catch(() => {
              setLogin(false)
            })
          } else {
            rnBiometrics.simplePrompt({promptMessage: 'Confirm fingerprint'})
            .then((resultObject) => {
              const { success } = resultObject
              if (success) {
                setLogin(true)
              } else {
                setLogin(false)
              }
            })
            .catch(() => {
              setLogin(false)
            })
            rnBiometrics.createKeys()
              .then((resultObject) => {
                const { publicKey } = resultObject
                console.log(publicKey)
                // sendPublicKeyToServer(publicKey)
              })
            console.log('Keys do not exist or were deleted')
          }
        })   
      } else {
        console.log('Biometrics not supported')
      }
    })
}
  useEffect(() => { 
    handleLogin();
  }, [])

  return (
    <NavigationContainer> 
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
          /> 
        {login ? <ThemeScreen/> : <Login handleLogin={handleLogin}/>}
      </SafeAreaView>
    </NavigationContainer>  
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
