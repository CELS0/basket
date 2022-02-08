import { styles } from './styles'
import React, { useEffect, useState } from "react";
import { FlatList, ScrollView } from "react-native";
import { Item } from '../Item/Item';
import { useDataList } from '../../hooks/dataList';

type ItemProps = {
    id: number;
    nameItem: string;
    done: boolean;
}

type Props = {
    items: ItemProps[];
}

export function ListItems({ items }: Props) {
    // const [listItem, setListItem] = useState<ItemProps[] | null>([])

    const { item } = useDataList();

    // useEffect(() => {
    //     setListItem(item)
    // },[]);

    return (
        <FlatList
            keyExtractor={item => String(item.id)}
            data={item}
            renderItem={({ item }) => (
                <Item data={item} />
            )}
        />
    )
}