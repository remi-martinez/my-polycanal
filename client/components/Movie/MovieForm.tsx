import { Text, View } from '../Themed';
import Input from '../Shared/Input';
import EditableField from '../Shared/EditableField';
import Picker from 'react-native-picker-select';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import { Film } from '../../models/film';
import ButtonIcon from '../Shared/ButtonIcon';

type MovieFormProps = {
  film: Partial<Film>
  mode: 'edition' | 'creation'
  outputEvent: React.Dispatch<React.SetStateAction<Partial<FormData> | undefined>>
}

type FormData = {
  lienImg: string
  titre: string
  libelleCat: string
  duree: number
  dateSortie: Date
  nomRea: string
  budget: number
  montantRecette: number
}

export default function MovieForm({film, mode, outputEvent, ...props}: MovieFormProps) {

  const [createMode, setCreateMode] = useState(false);
  const [formData, setFormData] = useState<Partial<FormData>>({});
  const [date, setDate] = useState(new Date());
  const [codeCat, setCodeCat] = useState('');
  const [real, setReal] = useState('');

  useEffect(() => {
    if (mode === 'edition') {
      setCreateMode(false);
      setCodeCat(film.codeCat?.id!);
      setReal(`${film.noRea?.prenRea} ${film.noRea?.nomRea}`)
      setFormData({
        lienImg: film.lienImg,
        titre: film.titre,
        libelleCat: film.codeCat?.libelleCat,
        duree: film.duree,
        dateSortie: film.dateSortie,
        nomRea: `${film.noRea?.prenRea} ${film.noRea?.nomRea}`,
        budget: film.budget,
        montantRecette: film.montantRecette
      })
    }
    if (mode === 'creation') {
      setCreateMode(true);
      setCodeCat('');
      clearForm();
    }
  }, [])

  const saveEdition = () => {
    outputEvent(formData);
  }

  const abortEdition = () => {
    outputEvent(undefined);
  }

  const clearForm = () => {
    film = {}
    setFormData({
      lienImg: undefined,
      titre: undefined,
      libelleCat: undefined,
      duree: undefined,
      dateSortie: new Date(),
      nomRea: undefined,
      budget: undefined,
      montantRecette: undefined
    })
  }

  const actionsButtons = () => {
    return (
      <View style={[ createMode ? styles.absoluteBottomMiddleCreation : styles.absoluteBottomMiddle]}>
        {!createMode && <ButtonIcon icon="close" onPress={abortEdition} secondary={true} style={{marginHorizontal: 20}}/>}
        <ButtonIcon icon="check" onPress={saveEdition} secondary={true} style={{backgroundColor: Colors.success}}/>
      </View>
    );
  }

  const handleDatePickerChange = (timestamp: number) => {
    setDate(new Date(timestamp));
    setFormData({...formData, dateSortie: new Date(timestamp)});
  }

  const handleCatPickerChange = (val: string) => {
    setCodeCat(val);
    setFormData({...formData, libelleCat: val});
  }

  const editContentContainer = () => {
    return (
      <View style={styles.container}>
        <Input value={film.lienImg}
               width={createMode ? 320 : 360}
               placeholder="Lien du poster"
               onChangeText={(val: string) => setFormData({...formData, lienImg: val})}/>
        {actionsButtons()}
        <EditableField value={film.titre}
                       placeholder="Nom du film"
                       size={28}
                       height={40}
                       style={[styles.title, {fontSize: 28, textAlign: 'center'}]}
                       onChangeText={(val: string) => setFormData({...formData, titre: val})}/>
        <View style={styles.containerInline}>
          <View style={createMode ? { marginRight: 10 } : {}}>
            <Text style={{marginTop: 10}}>Catégorie</Text>
            <View style={styles.pickerWrapper}>
              <Picker
                style={{inputIOS: {color: 'white', paddingTop: 13, paddingLeft: 5}}}
                placeholder={{label: 'Catégorie', value: null}}
                value={codeCat}
                onValueChange={(val) => handleCatPickerChange(val)}
                items={[
                  {label: 'Comédie', value: 'CO'},
                  {label: 'Policier', value: 'PO'},
                  {label: 'Action', value: 'AC'},
                  {label: 'Western', value: 'WE'},
                ]}
              />
            </View>
          </View>
          <View style={createMode ? { marginRight: 10 } : {}}>
            <Input label="Durée"
                   placeholder="Durée"
                   value={film.duree?.toString()}
                   width={100}
                   onChangeText={(val: string) => setFormData({...formData, duree: +val})}/>
          </View>
          <View>
            <Text style={{marginTop: 10}}>Date de sortie</Text>
            <RNDateTimePicker style={{width: 100, height: 50}}
                              value={date}
                              onChange={(e) => handleDatePickerChange(e.nativeEvent.timestamp!)}/>
          </View>
        </View>
        <View style={[styles.container, createMode ? {marginLeft: 0} : {marginLeft: '5%', marginTop: '10%'}]}>
          <Input label="Réalisateur"
                 value={real}
                 onChangeText={(val: string) => setFormData({...formData, nomRea: val})}/>
          <Input label="Budget"
                 value={film.budget?.toString()}
                 onChangeText={(val: string) => setFormData({...formData, budget: +val})}/>
          <Input label="Montant recette"
                 value={film.montantRecette?.toString()}
                 onChangeText={(val: string) => setFormData({...formData, montantRecette: +val})}/>
        </View>
      </View>
    );
  }

  return (editContentContainer());

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    marginHorizontal: 20
  },
  containerInline: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  pickerWrapper: {
    height: 48,
    width: 100,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: Colors.grey,
    paddingHorizontal: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.125))',
    marginTop: 7,
  },
  absoluteBottomMiddle: {
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 180,
    right: 125,
    zIndex: 99,
    flexDirection: 'row',
  },
  absoluteBottomMiddleCreation: {
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 100,
    right: 150,
    zIndex: 99,
    flexDirection: 'row',
  }
});
