import { Image, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { Film } from '../models/film';
import Spinner from 'react-native-loading-spinner-overlay';
import React, { useEffect, useState } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';
import config from '../config.json';
import Colors from '../constants/Colors';
import ButtonStyled from '../components/Shared/ButtonStyled';
import ButtonIcon from '../components/Shared/ButtonIcon';
import { NavigationProp } from '@react-navigation/native';


export default function MovieDetailsScreen({route, navigation}: { route: any, navigation: NavigationProp<any> }) {
  const {filmId} = route.params;
  const [film, setFilm] = useState<Partial<Film>>({} as Film);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    axios.get<Film>(`${config.apiUrl}/films/${filmId}`).then((response: AxiosResponse<Film>) => {
      setLoading(false);
      return setFilm(response.data as Film);
    }).catch((error: AxiosError) => {
      setLoading(false);
      setError(true);
    });
  }, [])

  const formatDuree = (duree?: number) => {
    if (!duree) return '';

    const hours = Math.floor(duree / 60);
    const mins = duree % 60;
    return `${hours}h${mins < 10 ? '0' : ''}${mins}`;
  }

  const formatDate = (date?: Date) => {
    if (!date) return '';
    return new Date(date).getFullYear().toString();
  }

  const formatCurrency = (amount?: number) => {
    if (!amount) return '';
    return amount.toLocaleString('fr-FR', {style: 'currency', currency: 'EUR', minimumFractionDigits: 0});
  }

  const spinnerContainer = () => {
    return (
      <View style={styles.containerCentered}>
        <Spinner visible={true}/>
      </View>
    )
  }

  const errorContainer = () => {
    return (
      <View style={styles.containerCentered}>
        <Text style={{color: Colors.danger}}>Une erreur est survenue lors du chargement du film.</Text>
      </View>
    )
  }

  const closeDetails = () => {
    navigation.goBack();
  }

  const editFilm = () => {

  }

  const deleteFilm = () => {

  }

  const moreInfos = () => {
    navigation.navigate('MoreDetails', { realisateur: film.noRea, filmId: film.id });
  }

  const contentContainer = () => {
    return (
      <View style={styles.container}>
        {film?.lienImg && <Image source={{uri: film.lienImg}} style={styles.imageStyles} resizeMode="contain"/>}
        <View style={styles.absoluteTopRight}>
          <ButtonIcon icon="close" onPress={closeDetails} style={{marginBottom: 10}}/>
          <ButtonIcon icon="pencil" onPress={editFilm} style={{marginBottom: 10}}/>
          <ButtonIcon icon="trash" onPress={deleteFilm} secondary={true}/>
        </View>
        <View style={styles.containerAligned}>
          <Text style={styles.title}>{film.titre}</Text>
        </View>
        <View style={[styles.containerInline, {marginHorizontal: 90}]}>
          <Text style={styles.subtitle}>Film {film.codeCat?.libelleCat}</Text>
          <Text style={styles.subtitle}>{formatDuree(film.duree)}</Text>
          <Text style={styles.subtitle}>{formatDate(film.dateSortie)}</Text>
        </View>
        <View style={[styles.container, {marginLeft: '20%', marginTop: '10%'}]}>
          <Text style={styles.textSecondary}>Réalisateur :
            <Text style={styles.textWhite}> {`${film.noRea?.prenRea} ${film.noRea?.nomRea} `}</Text>
          </Text>
          <Text style={styles.textSecondary}>Budget :
            <Text style={styles.textWhite}> {formatCurrency(film.budget)}</Text>
          </Text>
          <Text style={styles.textSecondary}>Montant recette :
            <Text style={styles.textWhite}> {formatCurrency(film.montantRecette)}</Text>
          </Text>
        </View>
        <View style={[styles.container, {marginTop: '-20%'}]}>
          <ButtonStyled
            title="Plus d'infos"
            onPress={moreInfos}
            style={{marginHorizontal: 20, backgroundColor: Colors.grey}}></ButtonStyled>
        </View>
      </View>
    );
  }

  return (contentContainer());
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    marginHorizontal: 20
  },
  containerAligned: {
    alignItems: 'center',
  },
  containerInline: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  containerCentered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: Colors.base
  },
  textSecondary: {
    color: Colors.secondary
  },
  textWhite: {
    color: Colors.white
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  imageStyles: {
    height: 400,
    width: '100%'
  },
  absoluteTopRight: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 20,
    right: 5,
  }
});
