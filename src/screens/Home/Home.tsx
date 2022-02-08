import { styles } from './styles'
import React from "react";
import { View } from "react-native";
import { TopBar } from '../../components/TopBar/TopBar';
import { ListItems } from '../../components/ListItems/ListItems';
import { InputItem } from '../../components/InputItem/InputItem';

export function Home() {
    return (
            <View style={styles.container}>
                <TopBar/>
                <ListItems />
                <InputItem />
            </View>
    )
}