import { ActivityIndicator, StyleSheet } from 'react-native';
import { View } from '../components/Themed';
import SearchBar from '../components/Search/SearchBar';
import { useEffect, useState } from 'react';
import ResultDisplay from '../components/Search/ResultDisplay';
import { BehaviorSubject, debounceTime } from 'rxjs';

const searchChange: BehaviorSubject<string> = new BehaviorSubject('');
const searchChange$ = searchChange.asObservable();

export default function SearchTabScreen() {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState();

  const getData = async () => {
    const apiResponse = await fetch(
      'https://dummyjson.com/products/search?q=' + searchPhrase
    );
    const data = await apiResponse.json();
    setFakeData(data.products);
  };

  const handleSearchPhraseChanged = (val: any) => {
    searchChange.next(val);
  }

  useEffect(() => {
    const subscription = searchChange$
      .pipe(debounceTime(300))
      .subscribe((value) => {
        setSearchPhrase(value);
        getData();
      });

    return () => {
      return subscription.unsubscribe();
    }
  }, []);

  return (
    <View style={styles.container}>
      <SearchBar searchPhrase={searchPhrase}
                 searchPhraseChanged={(val: string) => handleSearchPhraseChanged(val)}
                 clicked={clicked}
                 setClicked={setClicked}></SearchBar>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
      <View>
        {!fakeData ? <ActivityIndicator size="large"/> :
          <ResultDisplay
            searchPhrase={searchPhrase}
            data={fakeData}
            setClicked={setClicked}
          />
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
});
