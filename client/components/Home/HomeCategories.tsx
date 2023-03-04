import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import axios, { AxiosResponse } from 'axios';
import config from '../../config.json';
import { Categorie } from '../../models/categorie';


type HomeCategoriesProps = {};

type HomeCategoriesState = {
  activeIndex: number;
  entries: any;
  activeSlide: any;
  categories: Categorie[];
};

export default class HomeCategories extends React.Component<HomeCategoriesProps, HomeCategoriesState> {
  private carousel: Carousel<any> | any;

  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      activeIndex: 0,
      activeSlide: 0,
      entries: [],
      categories: [],
    }
  }

  componentDidMount() {
    axios.get<Categorie[]>(`${config.apiUrl}/categories`).then((response: AxiosResponse<Categorie[]>) => {
      const tousFilms = new Categorie('999', 'TO', 'https://i.imgur.com/CCRoHeS.png')
      this.setState({ categories: [tousFilms, ...response.data] });
    });
  }

  _renderCategory({item, index}: { item: Categorie, index: number }) {
    return (
      <View style={{
        backgroundColor: 'none',
        borderRadius: 5,
        marginLeft: 0,
        marginRight: 0,
      }}>
        <Image source={{uri: item.image}} style={styles.imageStyles} resizeMode="center"/>
      </View>

    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Carousel
          activeSlideAlignment="start"
          layout={'default'}
          ref={ref => this.carousel = ref}
          data={this.state.categories}
          sliderWidth={400}
          itemWidth={200}
          renderItem={this._renderCategory}
          vertical={false}/>
      </View>
    );
  }
}

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
