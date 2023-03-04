import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, TouchableHighlight, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import axios, { AxiosResponse } from 'axios';
import config from '../../config.json';
import { Categorie } from '../../models/categorie';
import { useNavigation } from '@react-navigation/native';


const HomeCategories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [entries, setEntries] = useState([]);
  const [categories, setCategories] = useState<Categorie[]>([]);
  const carousel = React.useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    axios.get<Categorie[]>(`${config.apiUrl}/categories`).then((response: AxiosResponse<Categorie[]>) => {
      const tousFilms = new Categorie('TO', 'TO', 'https://i.imgur.com/CCRoHeS.png')
      setCategories([tousFilms, ...response.data]);
    });
  }, []);

  const handleCategoryTouched = (code: string) => {
    navigation.navigate('SearchTab', { code: 'AC' });
  }

  const _renderCategory = ({ item, index }: { item: Categorie, index: number }) => {
    return (
      <TouchableHighlight onPress={() => handleCategoryTouched(item.id)}>
        <View style={{
          backgroundColor: 'none',
          borderRadius: 5,
          marginLeft: 0,
          marginRight: 0,
        }}>
          <Image source={{ uri: item.image }} style={styles.imageStyles} resizeMode="center" />
        </View>
      </TouchableHighlight>
    )
  }

  return (
    <View style={styles.container}>
      <Carousel
        activeSlideAlignment="start"
        layout={'default'}
        ref={carousel}
        data={categories}
        sliderWidth={400}
        itemWidth={200}
        renderItem={_renderCategory}
        vertical={false} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyles: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
  }
});

export default HomeCategories;
