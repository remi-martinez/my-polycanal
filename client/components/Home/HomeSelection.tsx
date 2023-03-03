import React, { useEffect, useRef, useState } from 'react';
import {
  Image,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedbackComponent,
  View
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';
import axios, { AxiosResponse } from 'axios/index';
import config from '../../config.json';
import { Film } from '../../models/film';


type HomeSelectionProps = {};

type HomeSelectionState = {
  activeIndex: number;
  entries: any;
  activeSlide: any;
  carouselItems: Film[];
};

export const HomeSelection = (props: HomeSelectionProps) => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [carouselItems, setCarouselItems] = useState<Partial<Film[]>>([]);
  const carouselRef = useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    axios.get<Film[]>(`${config.apiUrl}/films/best`).then((response: AxiosResponse<Film[]>) => {
      setCarouselItems(response.data as Film[]);
    });
  })

  const openMovieDetails = (id: number) => {
    navigation.navigate('MovieDetails', {screen: 'MovieDetailsContent', params: { filmId: id }});
  }

  const _renderItem = ({item, index}: { item: Film | undefined, index: number }) => {
    return (
      <View style={styles.itemContainer}>
        <TouchableHighlight onPress={() => openMovieDetails(item?.id!)}>
          {item?.lienImg && <Image source={{uri: item.lienImg}} style={styles.imageStyles} resizeMode="contain"/>}
        </TouchableHighlight>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Carousel
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        activeSlideAlignment="start"
        layout={'default'}
        ref={carouselRef}
        data={carouselItems}
        sliderWidth={400}
        itemWidth={180}
        renderItem={_renderItem}
        onSnapToItem={(index: number) => {
          setActiveIndex(index);
          setActiveSlide(index);
        }}
        vertical={false}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyles: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 10
  },
  itemContainer: {
    backgroundColor: 'none',
    borderRadius: 5,
  }
});
