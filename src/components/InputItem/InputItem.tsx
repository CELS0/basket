import { styles } from './styles';
import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import { theme } from '../../global/styles/theme';
import { useDataList } from '../../hooks/dataList';
import { Alert } from 'react-native';
import { Audio } from 'expo-av';

export function InputItem() {
    const [nameItem, setNameItem] = useState('')

    const { setList, isActiveEdit, editItem, nameItem: NewName } = useDataList();

    async function validateInput() {
        if ((nameItem.trim()).length < 3) {
            Alert.alert('Nome do item com menos de 3 caracteres');
        } else {
            setList(nameItem);
            await playSound();
        };
    };

    async function playSound() {
        const { sound } = await Audio.Sound.createAsync(
            require('../../assets/add.mp3')
        );

        await sound.playAsync();
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.inputText}
                maxLength={26}
                keyboardType={'ascii-capable'}
                placeholder={'Novo item da lista'}
                children={NewName}
                onChangeText={setNameItem}
            />
            {
                isActiveEdit
                    ?
                    <TouchableOpacity
                        onPress={()=>editItem(nameItem)}
                    >
                        <View style={styles.addItems}>
                            <Icon
                                name="edit"
                                color={theme.colors.blue}
                                size={18}
                            />
                        </View>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity
                        onPress={validateInput}
                    >
                        <View style={styles.addItems}>
                            <Icon
                                name="plus"
                                color={theme.colors.blue}
                                size={18}
                            />
                        </View>
                    </TouchableOpacity>
            }

        </View>
    )
}