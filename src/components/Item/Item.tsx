import { styles } from './styles';
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Checkbox } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import { theme } from '../../global/styles/theme';
import { useDataList } from '../../hooks/dataList';
import { CustomModalDelete } from '../CustomModalDelete/CustomModalDelete';

type ItemProps = {
    id: number,
    nameItem: string;
    done: boolean;
}

type Props = {
    data: ItemProps
}

export function Item({ data }: Props) {
    const { nameItem, done, id } = data;

    const { updateItemDone, visibleModal } = useDataList();

    return (
        <View style={done ? styles.containerDone : styles.container}>
            <Checkbox
                status={done ? 'checked' : 'unchecked'}
                color={theme.colors.green}
                onPress={() => {
                    updateItemDone(id);
                }}
            />
            <Text style={done ? styles.contentDone : styles.content}>
                {nameItem}
            </Text>
            <TouchableOpacity style={styles.deleteButton} onPress={visibleModal}>
                <Icon name="closecircle" color={theme.colors.red} size={21} />
            </TouchableOpacity>
            <CustomModalDelete itemId={id}/>
        </View>
    )
}