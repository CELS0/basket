import { styles } from './styles';
import React, { useState } from "react";
import { View, Text } from "react-native";
import { Checkbox } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import { RectButton } from 'react-native-gesture-handler';
import { theme } from '../../global/styles/theme';

type  ItemProps = {
    nameItem: string;
    done: boolean;
}

type Props = {
    data: ItemProps
}

export function Item({data}: Props) {
    const {nameItem,done} = data;

    const [checked, setChecked] = useState(false);
    return (
        <View style={done ? styles.containerDone :styles.container}>
            <Checkbox
                status={done ? 'checked' : 'unchecked'}
                color={theme.colors.green}
                onPress={() => {
                    setChecked(!checked);
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