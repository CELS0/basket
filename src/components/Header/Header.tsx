import { styles } from './styles'
import React from "react";
import { View, Text } from "react-native";
import { useDataList } from '../../hooks/dataList';


export function Header() {
    const { contItemDone } = useDataList();
    console.log(contItemDone);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Lista de compras
            </Text>
            {contItemDone !== '0/0' &&
                <Text style={styles.subtitle}>{contItemDone}</Text>
            }
            
        </View>
    )
}