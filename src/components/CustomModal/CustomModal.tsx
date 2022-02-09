import { styles } from './styles';
import React, { useRef } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Modalize } from 'react-native-modalize';

export function CustomModal() {
    const modalizeRef = useRef<Modalize>(null);

    const onOpen = () => {
        modalizeRef.current?.open();
    };

    return (
        <Modalize
            ref={modalizeRef}
            snapPoint={280}
        >

            <View style={styles.container}>
                <Text style={styles.title}>Você tem certeza que deseja apagar esse item?</Text>

                <View style={styles.content}>
                    <TouchableOpacity
                        style={styles.buttonNot}
                        onPress={onOpen}>
                        <Text>Não</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonYes}
                        onPress={onOpen}>
                        <Text>Sim</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modalize>
    );
}