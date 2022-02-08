import { styles } from './styles'
import React from "react";
import { ScrollView } from "react-native";
import { Item } from '../Item/Item';

export function ListItems() {
    return (
        <ScrollView style={styles.container}>
            <Item />
        </ScrollView>
    )
}