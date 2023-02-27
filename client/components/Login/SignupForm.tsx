import { StyleSheet, Text, View } from 'react-native';
import Input from '../Shared/Input';
import ButtonStyled from '../Shared/ButtonStyled';
import Colors from '../../constants/Colors';
import { useContext, useState } from 'react';
import { StackActions, useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../navigation';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { LoginResponse } from '../../models/login-response';
import config from '../../config.json';
import { SignupResponse } from '../../models/signup-response';

export const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const navigation = useNavigation();
  const [error, setError] = useState(false);
  const [userAlreadyExists, setUserAlreadyExists] = useState(false);
  const {login} = useContext(AuthContext);

  const loginUser = (_username: string, _password: string) => {
    axios.post<LoginResponse>(`${config.apiUrl}/api/login`, {
      login: _username,
      password: _password
    })
      .then((response: AxiosResponse<LoginResponse>) => {
        const loginResponse = response.data as LoginResponse;
        login(loginResponse.token).then(() => navigation.dispatch(StackActions.replace('Root')))
      }).catch((error: AxiosError) => setError(true));
  }

  const submitForm = () => {
    setError(false);
    setUserAlreadyExists(false);
    axios.post<SignupResponse>(`${config.apiUrl}/api/signup`, {
      login: username,
      password: password
    }).then((response: AxiosResponse<SignupResponse>) => {
      return response.data as SignupResponse;
    })
      .then((signupResponse) => {
        loginUser(signupResponse.login, password);
      })
      .catch((error: AxiosError) => {
        if (error.code === AxiosError.ERR_BAD_REQUEST) {
          setUserAlreadyExists(true);
        } else {
          setError(true);
        }
      });
  }

  return (
    <View style={styles.container}>
      {error && <Text style={styles.error}>Un problème est survenu lors de la connexion.</Text>}
      <Input
        onChangeText={setUsername}
        placeholder={'Nom d\'utilisateur'}
        error={userAlreadyExists ? 'Cet utilisateur existe déjà.' : ''}/>
      <Input
        onChangeText={setPassword}
        placeholder={'Mot de passe'}
        password={true}
      />
      <Input
        onChangeText={setPasswordRepeat}
        placeholder={'Confirmer le mot de passe'}
        password={true}
        error={(!!passwordRepeat && (password != passwordRepeat)) ? 'Les mots de passes doivent être identiques.' : ''}
      />
      <ButtonStyled
        style={{marginTop: 30}}
        title="Valider"
        disabled={!username || !password || (password != passwordRepeat)}
        onPress={submitForm}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
  },
  error: {
    color: Colors.danger
  }
});



