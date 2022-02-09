import { styles } from './styles'
import React from "react";
import { FlatList, Text, View } from "react-native";
import { Item } from '../Item/Item';
import { useDataList } from '../../hooks/dataList';

export function ListItems() {
    const { item } = useDataList();

    const listItem = item?.reverse()

    return (
        item?.length === 0
            ?
            <View style={styles.container}>
                <Text style={styles.title}>Nenhum item na lista</Text>
            </View>
            :
            <FlatList
                keyExtractor={item => String(item.id)}
                data={listItem}
                renderItem={({ item }) => (
                    <Item data={item} />
                )}
            />
    )
}