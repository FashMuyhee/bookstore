import React, {useEffect, useState, useContext} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  ImageBackground,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import {Text, Button} from 'react-native-paper';
import {Container, Input} from '../components';
import loginBg from '../assets/img/login_bg.png';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {RNLocalAuthenticate} from 'react-native-local-authenticate';
import {Context} from '../store/context';
import {login, biometricService, getCredential} from '../helpers/auth';
import Snackbar from 'react-native-snackbar';

const Login = ({navigation}) => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pwdVisible, setPwdVisible] = useState(true);
  const [loading, setLoading] = useState(false);
  const [state, setState] = useContext(Context);

  useEffect(() => {
    handleBiometric();
  }, []);

  const handleBiometric = () => {
    biometricService()
      .then((data) => {
        getCredential().then((d) => {
          setLoading(true);

          login(d.username, d.password)
          .then((data) => {
              setTimeout(() => {
                setLoading(false);
                navigation.navigate('home');
              }, 2500);
              Snackbar.show({
                text: data.message.toUpperCase(),
                duration: Snackbar.LENGTH_SHORT,
                textColor: 'green',
                action: {
                  text: 'ok',
                  textColor: 'green',
                  onPress: () => {
                    Snackbar.dismiss();
                  },
                },
              });
            })
            .catch((error) => {
              setLoading(false);
              console.log(error);
            });
        });
      })
      .catch((error) => {
        setLoading(false);

        Snackbar.show({
          text: error.error.toUpperCase(),
          duration: Snackbar.LENGTH_SHORT,
          textColor: 'red',
          action: {
            text: 'ok',
            textColor: 'red',
            onPress: () => {
              Snackbar.dismiss();
            },
          },
        });
      });
  };

  const handleLogin = () => {
    setLoading(true);
    login(email, password)
      .then((data) => {
        setTimeout(() => {
          setLoading(false);
          navigation.navigate('home');
        }, 2500);
        Snackbar.show({
          text: data.message.toUpperCase(),
          duration: Snackbar.LENGTH_SHORT,
          textColor: 'green',
          action: {
            text: 'ok',
            textColor: 'green',
            onPress: () => {
              Snackbar.dismiss();
            },
          },
        });
      })
      .catch((error) => {
        setLoading(false);

        Snackbar.show({
          text: error.error.toUpperCase(),
          duration: Snackbar.LENGTH_SHORT,
          textColor: 'red',
          action: {
            text: 'ok',
            textColor: 'red',
            onPress: () => {
              Snackbar.dismiss();
            },
          },
        });
      });
  };

  return (
    <Container style={{paddingLeft: 0, paddingRight: 0}}>
      <StatusBar hidden={true} />
      <ImageBackground
        source={loginBg}
        style={styles.loginBg}
        imageStyle={{resizeMode: 'stretch'}}>
        <View style={styles.textContainer}>
          <View style={styles.curve} />
          <View
            style={{
              width: '50%',
              height: 80,
              marginTop: '35%',
            }}>
            <Text style={{color: 'white', fontSize: 34}}>
              Adventures in literature.
            </Text>
            <Text style={{color: 'white', fontSize: 16, marginTop: 35}}>
              Join our community
            </Text>
          </View>
        </View>
        <View style={styles.loginForm}>
          <Text style={styles.loginTitle}>Log in</Text>
          <KeyboardAvoidingView style={{marginTop: 5}}>
            <Input
              placeholder="Email"
              autoCompleteType="email"
              keyboardType="email-address"
              onChangeText={(email) => setEmail(email)}
              returnKeyType="next"
            />
            <View style={styles.passwordText}>
              <Input
                placeholder="Password"
                secureTextEntry={pwdVisible}
                onChangeText={(password) => setPassword(password)}
                returnKeyType="done"
              />
              <FeatherIcon
                name={pwdVisible ? 'eye' : 'eye-off'}
                color="#828285"
                size={20}
                style={styles.eyeIcon}
                onPress={() => setPwdVisible(!pwdVisible)}
              />
            </View>
            <Button
              loading={loading}
              accessibilityLabel="Login button"
              mode="contained"
              style={styles.button}
              onPress={handleLogin}
              disabled={loading}>
              <Text style={styles.buttonText}>
                {loading ? 'Signing in...' : 'Sign in'}
              </Text>
            </Button>
          </KeyboardAvoidingView>
          <MaterialIcon
            name="fingerprint"
            size={35}
            style={styles.thumbPrint}
            onPress={handleBiometric}
          />
        </View>
      </ImageBackground>
    </Container>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginBg: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  textContainer: {
    width: '100%',
    height: '50%',
    paddingLeft: 28,
    paddingRight: 28,
    marginTop: 44,
  },
  curve: {
    backgroundColor: 'white',
    width: 17.84,
    height: 36,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  loginForm: {
    backgroundColor: 'white',
    height: '45%',
    width: '100%',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: 42,
  },
  loginTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
  },
  eyeIcon: {position: 'absolute', top: 33, left: '90%'},
  button: {
    height: 46,
    textTransform: 'capitalize',
    color: 'white',
    marginTop: 20,
  },
  buttonText: {color: 'white', textTransform: 'none', fontSize: 18},
  thumbPrint: {
    textAlign: 'center',
    marginVertical: 20,
  },
});
