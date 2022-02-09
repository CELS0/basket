import { styles } from './styles';
import React from "react";
import { Text, View, TouchableOpacity, Modal } from "react-native";
import { useDataList } from '../../hooks/dataList';

type Props = {
    itemId: number,
}

export function CustomModalDelete({ itemId }: Props) {
    const { modalVisible, visibleModal, deleteItem } = useDataList();

    function handlerModalDelete(){
        deleteItem(itemId);
        visibleModal();
    }

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
                        onPress={visibleModal}>
                        <Text>Não</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonYes}
                        onPress={handlerModalDelete}
                        >
                        <Text>Sim</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}