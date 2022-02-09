import { styles } from './styles'
import React, { useEffect } from "react";
import { Alert, BackHandler, View } from "react-native";
import { Header } from '../../components/Header/Header';
import { ListItems } from '../../components/ListItems/ListItems';
import { InputItem } from '../../components/InputItem/InputItem';
import { useDataList } from '../../hooks/dataList';

export function Home() {
    const { persistsData } = useDataList();

    useEffect(() => {
       persistsData()
    }, []);

    useEffect(() => {
        const backAction = () => {
          Alert.alert('Sair do Aplicativo', 'Você tem certeza que deseja sair do aplicativo?', [
            {
              text: 'Não',
              onPress: () => null,
              style: 'cancel',
            },
            { text: 'Sim', onPress: () => BackHandler.exitApp() },
          ]);
          return true;
        };
    
        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    
        return () => backHandler.remove();
      }, []);
    
    return (
        <View style={styles.container}>
            <Header />
            <ListItems />
            <InputItem />
        </View>
    )
}