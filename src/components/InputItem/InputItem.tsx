import { styles } from './styles';
import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import { theme } from '../../global/styles/theme';
import { useDataList } from '../../hooks/dataList';

export function InputItem() {
    const [nameItem, setNameItem] = useState('')

    const { setList } = useDataList();

    return (
        <View style={styles.container}>
            <TextInput style={styles.inputText}
                keyboardType={'ascii-capable'}
                placeholder={'Novo item da lista'}
                onChangeText={setNameItem}
            />
            <TouchableOpacity
            >
                <View style={styles.addItems}>
                    <Icon 
                    name="plus" 
                    color={theme.colors.blue} 
                    size={18} 
                    onPress={()=>setList(nameItem)} 
                    />
                </View>
            </TouchableOpacity>
        </View>
    )
}