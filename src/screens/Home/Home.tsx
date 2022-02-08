import { styles } from './styles'
import React from "react";
import { View } from "react-native";
import { TopBar } from '../../components/TopBar/TopBar';
import { ListItems } from '../../components/ListItems/ListItems';
import { InputItem } from '../../components/InputItem/InputItem';

const mock = [
    {
        id: 1,
        nameItem: 'Arroz - pacote 5kg',
        done: false,
    },
    {
        id: 2,
        nameItem: 'Arroz - pacote 5kg',
        done: true,
    },
    {
        id: 3,
        nameItem: 'Arroz - pacote 5kg',
        done: true,
    },
    {
        id: 4,
        nameItem: 'Arroz - pacote 5kg',
        done: false,
    },
    {
        id: 5,
        nameItem: 'Arroz - pacote 5kg',
        done: false,
    },
    {
        id: 6,
        nameItem: 'Arroz - pacote 5kg',
        done: false,
    },
    {
        id: 7,
        nameItem: 'Arroz - pacote 5kg',
        done: false,
    },
    {
        id: 7,
        nameItem: 'Arroz - pacote 5kg',
        done: true,
    },
    {
        id: 7,
        nameItem: 'Arroz - pacote 5kg',
        done: true,
    },
    {
        id: 7,
        nameItem: 'Arroz - pacote 5kg',
        done: false,
    },
    {
        id: 7,
        nameItem: 'Arroz - pacote 5kg',
        done: false,
    }
]

export function Home() {
    return (
            <View style={styles.container}>
                <TopBar done={'3/8'} />
                <ListItems items={mock} />
                <InputItem />
            </View>
    )
}