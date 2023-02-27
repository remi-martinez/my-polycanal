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

export default class HomeCarousel extends React.Component<HomeCarouselProps, HomeCarouselState> {
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

  _renderItem({item, index} : {item: any, index: number}) {
    const imgUri = 'https://www.lepoint.fr/images/2019/07/22/19151092lpw-19151480-article-jpg_6376776_1250x625.jpg';
    return (
      <View style={{
        backgroundColor: 'none',
        borderRadius: 5,
        marginLeft: 25,
        marginRight: 25,
      }}>
        <Image source={{uri: imgUri}} style={styles.imageStyles} resizeMode="contain"/>
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
        inactiveDotStyle={{
          // Define styles for inactive dots here
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
