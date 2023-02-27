import { StyleSheet, Text, View } from 'react-native';
import { useContext, useState } from 'react';
import Colors from '../../constants/Colors';
import Input from '../Shared/Input';
import ButtonStyled from '../Shared/ButtonStyled';
import Checkbox from '../Shared/Checkbox';
import axios, { AxiosError, AxiosResponse } from 'axios';
import config from '../../config.json';
import { LoginResponse } from '../../models/login-response';
import { AuthContext } from '../../navigation';
import { StackActions, useNavigation } from '@react-navigation/native';

export const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const navigation = useNavigation();
  const [error, setError] = useState(false);
  const [validCredentials, setValidCredentials] = useState(true);
  const {login} = useContext(AuthContext);

  const submitForm = () => {
    setError(false);
    setValidCredentials(true);
    axios.post<LoginResponse>(`${config.apiUrl}/api/login`, {
      login: username,
      password: password
    })
      .then((response: AxiosResponse<LoginResponse>) => {
        const loginResponse = response.data as LoginResponse;
        login(loginResponse.token).then(() => navigation.dispatch(StackActions.replace('Root')))
      }).catch((error: AxiosError) => {
      if (error.code === AxiosError.ERR_BAD_REQUEST) {
        setValidCredentials(false);
      } else {
        setError(true);
      }
    })
  }

  return (
    <View style={styles.container}>
      {error && <Text style={styles.error}>Un problème est survenu lors de la connexion.</Text>}
      <Input
        onChangeText={setUsername}
        placeholder={'Nom d\'utilisateur'}
        error={!validCredentials ? 'Veuillez vérifier vos identifiants' : ''}/>
      <Input
        onChangeText={setPassword}
        placeholder={'Mot de passe'}
        password={true}
        error={!validCredentials ? 'Veuillez vérifier vos identifiants' : ''}
      />
      <Checkbox onChange={setRememberMe} style={{marginTop: 10}} label={'Rester connecté'}/>
      <ButtonStyled
        style={{marginTop: 77}}
        title="Valider"
        disabled={!username || !password}
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
