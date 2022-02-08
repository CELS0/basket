import { styles } from './styles';
import React, { useState } from "react";
import { View, Text } from "react-native";
import { Checkbox } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import { RectButton } from 'react-native-gesture-handler';
import { theme } from '../../global/styles/theme';
import { useDataList } from '../../hooks/dataList';

type  ItemProps = {
    id: number,
    nameItem: string;
    done: boolean;
}

type Props = {
    data: ItemProps
}

export function Item({data}: Props) {
    const {nameItem,done, id} = data;
    console.log(nameItem,done, id)

    const { updateItemDone } = useDataList();

    return (
        <View style={done ? styles.containerDone :styles.container}>
            <Checkbox
                status={done ? 'checked' : 'unchecked'}
                color={theme.colors.green}
                onPress={() => {
                    updateItemDone(id)
                }}
            />
            <Text style={done ? styles.contentDone : styles.content}>
                {nameItem}
            </Text>
            <RectButton  style={styles.deleteButton}>
                    <Icon name="closecircle" color={theme.colors.red} size={21} />
            </RectButton>
        </View>
    )
}