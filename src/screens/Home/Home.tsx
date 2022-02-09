import { styles } from './styles'
import React, { useEffect } from "react";
import { View } from "react-native";
import { Header } from '../../components/Header/Header';
import { ListItems } from '../../components/ListItems/ListItems';
import { InputItem } from '../../components/InputItem/InputItem';
import { useDataList } from '../../hooks/dataList';

export function Home() {
    const { persistsData } = useDataList();

    useEffect(() => {
       persistsData()
    }, [])
    
    return (
        <View style={styles.container}>
            <Header />
            <ListItems />
            <InputItem />
        </View>
    )
}