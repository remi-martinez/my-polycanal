import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Carousel, { getInputRangeFromIndexes, Pagination } from 'react-native-snap-carousel';


type HomeSelectionProps = {};

type HomeSelectionState = {
  activeIndex: number;
  entries: any;
  activeSlide: any;
  carouselItems: { title: string; text: string; }[];
};

export default class HomeSelection extends React.Component<HomeSelectionProps, HomeSelectionState> {
  private carousel: Carousel<any> | any;

  items = [
    {
      title: 'Item 1',
      text: 'Text 1',
    },
    {
      title: 'Item 2',
      text: 'Text 2',
    },
    {
      title: 'Item 3',
      text: 'Text 3',
    },
    {
      title: 'Item 3',
      text: 'Text 3',
    },
    {
      title: 'Item 3',
      text: 'Text 3',
    },
    {
      title: 'Item 3',
      text: 'Text 3',
    },
    {
      title: 'Item 3',
      text: 'Text 3',
    },
    {
      title: 'Item 3',
      text: 'Text 3',
    },
  ];

  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      activeIndex: 0,
      activeSlide: 0,
      carouselItems: this.items,
      entries: this.items,
    }
  }

  _renderItem({item, index} : {item: any, index: number}) {
    const imgUri = 'https://thumb.canalplus.pro/http/unsafe/253x400/filters:quality(80)/img-hapi.canalplus.pro:80/ServiceImage/ImageID/109420988';
    return (
      <View style={styles.itemContainer}>
        <Image source={{uri: imgUri}} style={styles.imageStyles} resizeMode="contain"/>
      </View>

    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Carousel
          inactiveSlideScale={1}
          activeSlideAlignment='start'
          layout={'default'}
          ref={ref => this.carousel = ref}
          data={ this.state.carouselItems }
          sliderWidth={400}
          itemWidth={180}
          renderItem={this._renderItem}
          onSnapToItem={index => this.setState({activeIndex: index, activeSlide: index})}
          vertical={false}/>
      </View>
    );
  }
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
