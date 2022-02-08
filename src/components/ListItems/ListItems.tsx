import { styles } from './styles'
import React from "react";
import { FlatList, ScrollView } from "react-native";
import { Item } from '../Item/Item';

type ItemProps = {
    id: number;
    nameItem: string;
    done: boolean;
}

type Props = {
    items: ItemProps[];
}

export function ListItems({ items }: Props) {
    return (
        <FlatList
            keyExtractor={item => String(item.id)}
            data={items}
            renderItem={({ item }) => (
                <Item data={item}/>
            )}
        />
    )
}