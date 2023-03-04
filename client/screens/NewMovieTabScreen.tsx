import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import MovieForm from '../components/Movie/MovieForm';
import { useState } from 'react';
import { Film } from '../models/film';
import axios, { AxiosError, AxiosResponse } from 'axios/index';
import config from '../config.json';
import { useNavigation } from '@react-navigation/native';

type FormData = {
  lienImg: string
  titre: string
  libelleCat: string
  duree: number
  dateSortie: Date
  nomRea: string
  budget: number
  montantRecette: number
}

export default function NewMovieTabScreen() {
  const [film, setFilm] = useState<Partial<Film>>({} as Film);
  const navigation = useNavigation();

  const createMovie = (val: ((prevState: (Partial<FormData> | undefined)) => (Partial<FormData> | undefined)) | Partial<FormData> | undefined) => {
    if (val) {
      val = val as FormData;
      axios.post<Film>(`${config.apiUrl}/films`, {
        'titre': val.titre,
        'duree': val.duree,
        'dateSortie': val.dateSortie,
        'budget': val.budget,
        'montantRecette': val.montantRecette,
        'noRea': 9,
        'codeCat': val.libelleCat?.substring(0, 2).toUpperCase(),
        'lienImg': val.lienImg
      }).then((response: AxiosResponse<Film>) => {
        const _film = response.data as Film;
        setFilm(_film);
        navigation.navigate('MovieDetails', {screen: 'MovieDetailsContent', params: { filmId: _film.id }});
        setFilm({});
      }).catch((error: AxiosError) => {
        console.log(error);
      });
    }
  }

  return (
    <View style={styles.container}>
      <MovieForm film={film}
                 mode='creation'
                 outputEvent={(val) => {createMovie(val)}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
