import { styles } from './styles';
import React from "react";
import { Text, View, TouchableOpacity, Modal } from "react-native";
import { useDataList } from '../../hooks/dataList';

type Props = {
    itemId: number,
}

export function CustomModalDelete() {
    const { modalVisible, deleteItem,notVisibleModal} = useDataList();

    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
        >

            <View style={styles.container}>
                <Text style={styles.title}>Você tem certeza que deseja apagar esse item?</Text>

                <View style={styles.content}>
                    <TouchableOpacity
                        style={styles.buttonNot}
                        onPress={notVisibleModal}>
                        <Text>Não</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonYes}
                        onPress={()=>deleteItem()}
                        >
                        <Text>Sim</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}