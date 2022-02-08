import {styles} from './styles'
import React from "react";
import { View,Text } from "react-native";
import { useDataList } from '../../hooks/dataList';


export function TopBar(){
    const { contItemDone } = useDataList();

    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                Lista de compras
            </Text>
            <Text style={styles.subtitle}>{contItemDone}</Text>
        </View>
    )
}