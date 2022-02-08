import { styles } from './styles';
import React from "react";
import { TextInput, View } from "react-native";
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import { theme } from '../../global/styles/theme';

export function InputItem() {
    return (
        <View style={styles.container}>
            <TextInput style={styles.inputText}
                keyboardType={'ascii-capable'}
                placeholder={'Novo item da lista'}
            />
            <RectButton
            >
                <View style={styles.addItems}>
                    <Icon name="plus" color={theme.blue} size={18}/>
                </View>
            </RectButton>
        </View>
    )
}