import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import * as Yup from 'yup';
import {Formik} from 'formik';

const validationSchema = Yup.object({
  passwordLength: Yup.string().required('This need to be added'),
});

const App = () => {
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);
  const [password, setPassword] = useState('');
  const [lowerCase, setLowercase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [specialCase, setSpecialCase] = useState(false);

  const handlePasswordReset = () => {
    setLowercase(false);
    setIsPasswordGenerated(false);
    setPassword('');
    setUpperCase(false);
    setSpecialCase(false);
  };

  const handleSubmit = values => {
    console.warn(values);
    let charList = '';
    const upperCaseTemplate = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseTemplate = upperCaseTemplate.toLowerCase();
    const specialCaseTemplate = '!@£$%^&*(){}';

    if (lowerCase) {
      charList += lowerCaseTemplate;
    }
    if (upperCase) {
      charList += upperCaseTemplate;
    }
    if (specialCase) {
      charList += specialCaseTemplate;
    }

    createPassword(charList, values.passwordLength);
  };

  const createPassword = (charList, passwordlength) => {
    let result = '';

    for (let i = 0; i < passwordlength; i++) {
      let index = Math.floor(Math.random() * charList.length);
      result += charList[index];
    }
    setPassword(result);
    setIsPasswordGenerated(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.generatePassword}>
          <Formik
            initialValues={{passwordLength: ''}}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}>
            {({
              values,
              errors,
              touched,
              handleReset,
              handleChange,
              handleSubmit,
              isValid,
              /* and other goodies */
            }) => (
              <View>
                <View style={styles.inputWrapper}>
                  <View>
                    <Text style={styles.label}> Enter No Of Characters</Text>
                    {touched.passwordLength && errors.passwordLength && (
                      <Text style={styles.errorText}>
                        {errors.passwordLength}
                      </Text>
                    )}
                  </View>

                  <TextInput
                    style={styles.inputField}
                    onChangeText={handleChange('passwordLength')}
                    value={values.passwordLength}
                    placeholder="Ex. 5"
                  />
                </View>
                <View style={styles.hrStyle}></View>
                <View style={[styles.inputWrapper, styles.gap]}>
                  <Text style={styles.label}>Lower case</Text>
                  <BouncyCheckbox
                    isChecked={lowerCase}
                    onPress={() => setLowercase(!lowerCase)}
                    fillColor="#123456"
                  />
                </View>
                <View style={[styles.inputWrapper, styles.gap]}>
                  <Text style={styles.label}>Upper case</Text>
                  <BouncyCheckbox
                    isChecked={upperCase}
                    onPress={() => setUpperCase(!upperCase)}
                    fillColor="#7ef78e"
                  />
                </View>
                <View style={[styles.inputWrapper, styles.gap]}>
                  <Text style={styles.label}>Special case</Text>
                  <BouncyCheckbox
                    isChecked={specialCase}
                    onPress={() => setSpecialCase(!specialCase)}
                    fillColor="#2459ed"
                  />
                </View>
                <View style={styles.buttonWrapper}>
                  <Pressable
                    onPress={() => handleSubmit()}
                    disabled={!isValid}
                    style={[styles.btnPrimary, styles.btn]}>
                    <Text
                      style={[
                        styles.label,
                        styles.btnText,
                        !isValid && styles.disableBtn,
                      ]}>
                      Generate Password
                    </Text>
                  </Pressable>
                  <Pressable
                    style={[styles.btnWarning, styles.btn]}
                    onPress={() => {
                      handleReset();
                      handlePasswordReset();
                    }}>
                    <Text style={styles.label}>Reset</Text>
                  </Pressable>
                </View>
              </View>
            )}
          </Formik>
          {isPasswordGenerated && (
            <View style={styles.card}>
              <Text style={styles.label}>Long Press To Copy & Share</Text>
              <Text selectable style={styles.passwordText}>
                Password:- {password}
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  generatePassword: {
    padding: 5,
    borderRadius: 5,
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputField: {
    height: 40,
    width: 100,
    padding: 5,
    margin: 5,
    backgroundColor: '#fffafa',
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#123456',
    borderRadius: 4,
  },
  label: {
    fontSize: 20,
    fontWeight: '600',
  },
  hrStyle: {
    borderBottomColor: '#123456',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 8,
  },
  gap: {
    marginVertical: 5,
  },
  buttonWrapper: {
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  btn: {
    padding: 5,
    elevation: 3,
    borderRadius: 4,
  },
  btnPrimary: {
    backgroundColor: '#123456',
  },
  btnWarning: {
    backgroundColor: '#edbe21',
  },
  btnText: {
    color: '#ffffff',
  },
  errorText: {
    color: 'red',
  },
  disableBtn: {
    backgroundColor: '#f5f0f0',
    borderWidth: 1,
    borderColor: '#f5f0f0',
    color: '#000000',
  },
  card: {
    height: 150,
    backgroundColor: '#f5ebeb',
    padding: 8,
    marginVertical: 35,
    elevation: 15,
    shadowColor: '#123456',
    borderRadius: 7,
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowRadius: 4,
    shadowOpacity: 0.25,
  },
  passwordText: {
    fontSize: 20,
    fontWeight: '500',
  },
});

export default App;
