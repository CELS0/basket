import { styles } from './styles';
import React, { useState } from "react";
import { View, Text } from "react-native";
import { Checkbox } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import { RectButton } from 'react-native-gesture-handler';
import { theme } from '../../global/styles/theme';

export function Item() {
    const [checked, setChecked] = useState(false);
    return (
        <View style={styles.container}>
            <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                color={theme.colors.green}
                onPress={() => {
                    setChecked(!checked);
                }}
            />
            <Text style={checked ? styles.done : styles.content}>
                Arroz - pacote 5kg
            </Text>
            <RectButton  style={styles.deleteButton}>
                    <Icon name="closecircle" color={theme.colors.red} size={21} />
            </RectButton>
        </View>
    )
}