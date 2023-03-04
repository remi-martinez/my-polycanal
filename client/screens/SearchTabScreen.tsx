import { ActivityIndicator, Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity } from 'react-native';
import { View } from '../components/Themed';
import SearchBar from '../components/Search/SearchBar';
import React, { useEffect, useState } from 'react';
import { BehaviorSubject, debounceTime } from 'rxjs';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { Film } from '../models/film';
import config from '../config.json';
import { useNavigation } from '@react-navigation/native';
import Colors from '../constants/Colors';
import { Categorie } from '../models/categorie';

const searchChange: BehaviorSubject<string> = new BehaviorSubject('');
const searchChange$ = searchChange.asObservable();

export default function SearchTabScreen({ route, nav }: {route: any, nav: any}) {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState<Film[]>([]);
  const [categories, setCategories] = useState<Categorie[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('TO');
  const navigation = useNavigation();

  const getData = async (_search: string) => {
    if(!_search) { // Pas de recherche : on fetch tous les films
      axios.get<Film[]>(`${config.apiUrl}/films`).then((response: AxiosResponse<Film[]>) => {
        const movies = response.data as Film[];

        if (selectedCategory != 'TO') {
          const filteredMovies = movies.filter((film: Film) => {
            return film.codeCat.id == 'AC'
          });
          setData(filteredMovies);
        } else {
          setData(movies);
        }
      }).catch((error: AxiosError) => {
        console.log(error);
      });
    }

    axios.get<Film[]>(`${config.apiUrl}/films/search/${_search}`).then((response: AxiosResponse<Film[]>) => {
      const movies = response.data as Film[];

      if (selectedCategory != 'TO') {
        const filteredMovies = movies.filter((film: Film) => {
          return film.codeCat.id == 'AC'
        });
        setData(filteredMovies);
      } else {
        setData(movies);
      }
    }).catch((error: AxiosError) => {
      console.log(error);
    });
  };

  const handleSearchPhraseChanged = (val: any) => {
    searchChange.next(val);
  }

  useEffect(() => {
    if (route.params?.code) {
      setSelectedCategory(route.params.code);
    }

    axios.get<Categorie[]>(`${config.apiUrl}/categories`).then((response: AxiosResponse<Categorie[]>) => {
      setCategories(response.data as Categorie[])
    }).catch((error: AxiosError) => {
      console.log(error);
    });


    const subscription = searchChange$
      .pipe(debounceTime(300))
      .subscribe((value) => {
        setSearchPhrase(value);
        getData(value);
      });

    return () => {
      return subscription.unsubscribe();
    }
  }, [route.params]);

  const changeSelectedCategory = (code: string) => {
    setSelectedCategory(code)

    if (code !== 'TO') {
      const filteredMovies = (data.filter((film: Film) => {
        return film.codeCat.id === code
      }));
      setData(filteredMovies);
    } else {
      getData(searchPhrase);
    }
  }

  const openMovieDetails = (id: number) => {
    navigation.navigate('MovieDetails', {screen: 'MovieDetailsContent', params: { filmId: id }});
  }

  const categoriesContainer = () => {
    return ( !categories ? <View></View> :
        <View style={styles.categoriesContainer}>
          <TouchableOpacity style={[selectedCategory == 'TO' ? styles.category__selected : styles.category__unselected]}
                            onPress={() => changeSelectedCategory('TO')}>
            <Text style={[{color: (selectedCategory == 'TO' ? Colors.white : Colors.secondary)}]}>
              Tous
            </Text>
          </TouchableOpacity>
          {categories.map((cat: Categorie, index: number) => {
            const categoryIsSelected = selectedCategory == cat.id;
            return (
                <TouchableOpacity key={index}
                                  style={[categoryIsSelected ? styles.category__selected : styles.category__unselected]}
                                  onPress={() => changeSelectedCategory(cat.id)}>
                  <Text style={[{color: (categoryIsSelected ? Colors.white : Colors.secondary)}]}>
                    { cat.libelleCat }
                  </Text>
                </TouchableOpacity>

            );
          })}
        </View>
    );
  }

  return (
    <View style={styles.container}>
      <SearchBar searchPhrase={searchPhrase}
                 searchPhraseChanged={(val: string) => handleSearchPhraseChanged(val)}
                 clicked={clicked}
                 setClicked={setClicked}></SearchBar>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
      {categoriesContainer()}
      <View style={styles.filmsContainer}>
        {!data ? <ActivityIndicator size="large"/> :
          data.map((film: Film, index: number) =>
              <View key={index}>
                <TouchableHighlight onPress={() => openMovieDetails(film?.id!)}>
                  {film?.lienImg && <Image source={{uri: film?.lienImg}} style={styles.imageStyles} resizeMode="contain"/>}
                </TouchableHighlight>
              </View>
            )
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '100%',
  },
  item: {
    color: 'white',
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  filmsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 0
  },
  imageStyles: {
    width: 170,
    aspectRatio: 1,
    marginHorizontal: -16,
    marginBottom: 10
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: 10,
  },
  category__unselected: {
    padding: 5,
    marginHorizontal: 10,
    borderRadius: 3,
    backgroundColor: 'transparent'
  },
  category__selected: {
    padding: 5,
    marginHorizontal: 10,
    borderRadius: 3,
    backgroundColor: Colors.secondary
  }
});
