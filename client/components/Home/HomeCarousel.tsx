import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';


type HomeCarouselProps = {};

type HomeCarouselState = {
  activeIndex: number;
  entries: any;
  activeSlide: any;
  carouselItems: { title: string; text: string; }[];
};

type Item = {
  title: string
  text: string
  imgUri?: string
}

export default class HomeCarousel extends React.Component<HomeCarouselProps, HomeCarouselState> {
  private carousel: Carousel<any> | any;

  items: Item[] = [
    {
      title: 'The Game',
      text: '',
      imgUri: 'https://thumb.canalplus.pro/http/unsafe/655x367/filters:quality(80)/img-hapi.canalplus.pro:80/ServiceImage/ImageID/109432654'
    },
    {
      title: 'Drive',
      text: '',
      imgUri: 'https://m.media-amazon.com/images/I/51BANINoAxL.jpg'
    },
    {
      title: 'Inception',
      text: '',
      imgUri: 'https://www.joblo.com/wp-content/uploads/2010/05/inception-poster-quad-1.jpg'
    }
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

  _renderItem({item, index} : {item: Item, index: number}) {
    return (
      <View style={{
        backgroundColor: 'none',
        borderRadius: 5,
        marginLeft: 25,
        marginRight: 25,
      }}>
        <Image source={{uri: item?.imgUri}} style={styles.imageStyles} resizeMode="contain"/>
      </View>

    )
  }

  get pagination() {
    const {entries, activeSlide} = this.state;
    return (
      <Pagination
        activeDotIndex={activeSlide}
        dotsLength={entries.length}
        containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
        delayPressInDot={1}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: -4,
          backgroundColor: 'rgba(241,241,241,0.92)'
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}/>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Carousel
          layout={'default'}
          ref={ref => this.carousel = ref}
          data={ this.state.carouselItems }
          sliderWidth={400}
          itemWidth={400}
          renderItem={this._renderItem}
          onSnapToItem={index => this.setState({activeIndex: index, activeSlide: index})}
          vertical={false}/>
        { this.pagination }
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
    width: '100%'
  }
});
