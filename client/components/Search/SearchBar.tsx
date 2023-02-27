import React, { useState } from 'react';
import { Button, Keyboard, StyleSheet, TextInput, View } from 'react-native';
import { Entypo, Feather } from '@expo/vector-icons';
import Colors from '../../constants/Colors';


interface SearchBarProps {
  searchPhraseChanged: any;
  searchPhrase: string,
  clicked: boolean,
  setClicked: React.Dispatch<React.SetStateAction<boolean>>,
}

const SearchBar: React.FC<SearchBarProps> = (props: SearchBarProps) => {
  const [clicked, setClicked] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState('');

  return (
    <View style={styles.container}>
      <View
        style={
          clicked
            ? styles.searchBar__clicked
            : styles.searchBar__unclicked
        }
      >
        <Feather
          name="search"
          size={20}
          color={Colors.white}
          style={{marginLeft: 1}}
        />
        <TextInput
          style={styles.input}
          placeholder="Rechercher"
          value={searchPhrase}
          onChangeText={(val) => {
            props.searchPhraseChanged(val);
            setSearchPhrase(val)
          }}
          onFocus={() => {
            setClicked(true);
          }}
        />
        {clicked && (
          <Entypo name="cross" size={20} color={Colors.white} style={{padding: 1}} onPress={() => {
            setSearchPhrase('')
          }}/>
        )}
      </View>
      {clicked && (
        <View>
          <Button
            color={Colors.secondary}
            title="Annuler"
            onPress={() => {
              Keyboard.dismiss();
              setClicked(false);
            }}
          ></Button>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    marginTop: 20,
    height: 50,
  },
  searchBar__clicked: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.grey5,
    borderRadius: 3,
    paddingLeft: 10,
    marginHorizontal: 10,
    padding: 8
  },
  searchBar__unclicked: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.grey5,
    borderRadius: 3,
    paddingLeft: 10,
    marginHorizontal: 10,
    padding: 8
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: Colors.white,
    marginLeft: 10,
    backgroundColor: Colors.grey5,
    height: 24
  },
});

export default SearchBar;
