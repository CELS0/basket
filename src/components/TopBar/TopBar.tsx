import {styles} from './styles'
import React from "react";
import { View,Text } from "react-native";

type Props = {
    done: string;
}

export function TopBar({done}:Props){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                Lista de compras
            </Text>
            <Text style={styles.subtitle}>{done}</Text>
        </View>
    )
}