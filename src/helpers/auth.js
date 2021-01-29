import {
  setGenericPassword,
  ACCESS_CONTROL,
  SECURITY_LEVEL,
  getGenericPassword,
} from 'react-native-keychain';
import TouchID from 'react-native-touch-id';
import {Platform} from 'react-native';

const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const credential = async (email, password) => {
  try {
    const isSet = await setGenericPassword(email, password, {
      accessControl: ACCESS_CONTROL.USER_PRESENCE,
      securityLevel: SECURITY_LEVEL.SECURE_HARDWARE,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCredential = async () => {
  try {
    const credential = await getGenericPassword({
      accessControl: ACCESS_CONTROL.USER_PRESENCE,
    });
    return credential;
  } catch (error) {
    console.log(error);
  }
 
};

export const login = async (email, password) => {
  return new Promise((resolve, reject) => {
    if (email && password) {
      if (validateEmail(email)) {
        if (password.length >= 6) {
          if ((email === 'fashmuyhee@gmail.com') & (password === 'p@$$word_')) {
            resolve({isLogin: true, message: 'Login Successful'});
            // setCredential
            credential(email, password);
          } else {
            reject({error: 'Email or Password Not Correct'});
          }
        } else {
          reject({error: 'password too short'});
        }
      } else {
        reject({error: 'email not valid'});
      }
    } else {
      reject({error: 'email and password are required'});
    }
  });
};


const checkBio = async () => {
  const optionalConfigObject = {
    unifiedErrors: false,
    passcodeFallback: false,
  };
  return new Promise((resolve, reject) => {
    TouchID.isSupported(optionalConfigObject)
      .then((biometryType) => {
        if (biometryType && biometryType != 'FaceID') {
          resolve(true);
        } else {
          let fingerprintLableForOS =
            Platform.OS == 'ios' ? 'Touch ID' : 'Fingerprint';
          reject(fingerprintLableForOS + ' is not available on this device');
        }
      })
      .catch((error) => {
        let errorCode = Platform.OS == 'ios' ? error.name : error.code;
        if (
          errorCode === 'LAErrorTouchIDNotEnrolled' ||
          errorCode === 'NOT_AVAILABLE' ||
          errorCode === 'NOT_ENROLLED'
        ) {
          let fingerprintLableForOS =
            Platform.OS == 'ios' ? 'Touch ID' : 'Fingerprint';
          resolve(
            fingerprintLableForOS +
              ' has no enrolled fingers. Please go to settings and enable ' +
              fingerprintLableForOS +
              ' on this device.',
          );
        } else {
          reject(
            Platform.OS == 'ios' ? error.message : translations.t(error.code),
          );
        }
      });
  });
};

const optionalConfigObject = {
  title: 'Authentication Required',
  imageColor: 'black',
  imageErrorColor: '#e00606',
  sensorDescription: 'Touch sensor',
  sensorErrorDescription: 'Failed',
  cancelText: 'Cancel',
};
export const biometricService = async () => {
  return new Promise((resolve, reject) => {
    checkBio().then((fingerprint) => {
      if (fingerprint) {
        let fingerprintLableForOS =
          Platform.OS == 'ios' ? 'Touch ID' : 'Fingerprint';

        TouchID.authenticate(
          'Login to Bookstore  using ' + fingerprintLableForOS,
          optionalConfigObject,
        )
          .then((success) => {
            resolve(success);
          })
          .catch((error) => {
            reject(error.code);
          });
      } else {
        reject({error: 'Please goto device settings to add finger print'});
      }
    });
  });
};
