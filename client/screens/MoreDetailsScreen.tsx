import { Image, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import React, { useEffect, useState } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';
import config from '../config.json';
import Colors from '../constants/Colors';
import { NavigationProp } from '@react-navigation/native';
import { Personnage } from '../models/personnage';
import { Acteur } from '../models/acteur';


export default function MoreDetailsScreen({route, navigation}: { route: any, navigation: NavigationProp<any> }) {
  const {realisateur, filmId} = route.params;
  const [personnages, setPersonnages] = useState<Personnage[]>([]);
  const [acteurs, setActeurs] = useState<Acteur[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    axios.get<Personnage[]>(`${config.apiUrl}/personnages/film/${filmId}`).then((response: AxiosResponse<Personnage[]>) => {
      setLoading(false);
      setPersonnages(response.data as Personnage[]);
    }).catch((error: AxiosError) => {
      setLoading(false);
      setError(true);
    });
  }, [])

  const contentContainer = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Réalisateur</Text>
        <View style={styles.imageWithLegend}>
          {realisateur?.lienImg && <Image source={{uri: realisateur.lienImg}} style={styles.imageStyles} resizeMode="contain"/>}
          <Text style={{marginTop: 10}}>{`${realisateur?.prenRea} ${realisateur?.nomRea} `}</Text>
        </View>
        <View style={styles.separator}/>
        <Text style={styles.title}>Personnages</Text>
        <View style={styles.personnagesContainer}>
          {personnages.map((personnage: Personnage, index: number ) =>
            <View style={styles.imageWithLegend} key={index}>
              {realisateur?.lienImg && <Image source={{uri: personnage.acteur?.lienImg}} style={styles.imageStyles} resizeMode="contain"/>}
              <View style={styles.multiRowLegend} key={index}>
                <Text>{`${personnage.acteur?.prenAct} ${personnage.acteur?.nomAct}`}</Text>
                <Text style={styles.subtitle}>"{personnage.nomPers}"</Text>
              </View>
            </View>
          )}
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
    marginHorizontal: 20,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  imageWithLegend: {
    alignItems: 'center',
    width: 130,
  },
  personnagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: -20
  },
  multiRowLegend: {
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    alignItems: 'flex-start',
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
    width: 150,
    aspectRatio: 1
  },
  absoluteTopRight: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 20,
    right: 5,
  }
});
