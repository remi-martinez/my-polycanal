import React from 'react';
import { FlatList, Image, ListRenderItem, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/Colors';

const ItemDisplay = ({title, description, thumbnail}: Item) => (
  <View style={styles.item}>
    <Image source={{uri: thumbnail}}
           style={styles.img}
           resizeMode="contain"/>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
  </View>
);

interface Item {
  id?: any,
  title: string,
  description: string,
  thumbnail: string,
}

interface ResultDisplayProps {
  searchPhrase: string,
  setClicked: React.Dispatch<React.SetStateAction<boolean>>,
  data: any,
}

const ResultDisplay: React.FC<ResultDisplayProps> = (props: ResultDisplayProps) => {
  const renderItem: ListRenderItem<Item> = ({item}) => {
    // when no input, show all
    if (props.searchPhrase === '') {
      return <ItemDisplay title={item.title} description={item.description} thumbnail={item.thumbnail}/>;
    }
    // filter of the title
    if (item.title.toUpperCase().includes(props.searchPhrase.toUpperCase().trim().replace(/\s/g, ''))) {
      return <ItemDisplay title={item.title} description={item.description} thumbnail={item.thumbnail}/>;
    }
    // filter of the description
    if (item.description.toUpperCase().includes(props.searchPhrase.toUpperCase().trim().replace(/\s/g, ''))) {
      return <ItemDisplay title={item.title} description={item.description} thumbnail={item.thumbnail}/>;
    }

    return null;
  };

  return (
    <SafeAreaView style={styles.list__container}>
      <View
        onStartShouldSetResponder={() => {
          props.setClicked(false);
          return true;
        }}
      >
        <FlatList
          data={props.data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  list__container: {
    margin: 10,
    height: '85%',
    width: '100%',
  },
  item: {
    margin: 30,
    borderBottomWidth: 2,
    borderBottomColor: 'lightgrey'
  },
  title: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    fontStyle: 'italic',
  },
  description: {
    color: Colors.white,
  },
  img: {
    width: 100,
    height: 100,
    aspectRatio: 1,
    marginVertical: 10,
  },
});

export default ResultDisplay;
