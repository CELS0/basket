import {styles} from './styles'
import React, { useEffect, useState } from "react";
import { View,Text } from "react-native";
import { useDataList } from '../../hooks/dataList';


export function TopBar(){
    const [donAll, setDoneAll] = useState('');
    const { itemsDoneAll } = useDataList();

    useEffect(()=>{
        const result = itemsDoneAll();
        setDoneAll(result)
    },[])

    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                Lista de compras
            </Text>
            <Text style={styles.subtitle}>{donAll}</Text>
        </View>
    )
}