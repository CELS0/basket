import React, { createContext, ReactNode, useContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';


export interface Item {
    id: number;
    nameItem: string;
    done: boolean;
}

type AuthContextData = {
    item: Item[] | null;
    setList: (nameItem: string) => void;
    updateItemDone: (itemId: number) => void;
    contItemDone: string;
    modalVisible: boolean;
    visibleModal: () => void;
    deleteItem: (itemId: number) => void;
    persistsData: () => void;
}

type AuthProviderProps = {
    children: ReactNode;
}

export const DataListContext = createContext({} as AuthContextData);

const items: Item[] = [];
let cont = 0;

function DataListProvider({ children }: AuthProviderProps) {
    const [item, setItem] = useState<Item[]>([]);
    const [contItemDone, setContItemDone] = useState('')
    const [modalVisible, setModalVisible] = useState(false);

    async function persistsData() {
        const result = await AsyncStorage.getItem('@basket');

        if (result) {
            const list = JSON.parse(result) as Item[];

            list.map((item: Item) => {
                items.push(item)
            })

            setItem(items)
        }
    }

    async function setList(nameItem: string) {
        const newItem: Item = {
            id: items.length + 1,
            nameItem,
            done: false,
        }

        items.push(newItem)

        setItem(items)
        itemsDoneAll()

        await AsyncStorage.setItem('@basket', JSON.stringify(items))
    }

    async function updateItemDone(itemId: number) {
        const result = items.find(item => item.id === itemId);

        if (result) {
            result.done = !result.done;
            itemsDoneAll()
        };

    };

    function deleteItem(itemId: number) {
        const possition = items.findIndex(item => item.id === itemId);

        items.splice(possition, 1);
        itemsDoneAll();
    }

    function itemsDoneAll() {
        const itensDone = items.filter(item => item.done === true);

        setContItemDone(`${itensDone.length}/${items.length}`)

    }

    function visibleModal() {
        setModalVisible(!modalVisible)
    }


    return (
        < DataListContext.Provider value={{
            item,
            setList,
            updateItemDone,
            contItemDone,
            modalVisible,
            visibleModal,
            deleteItem,
            persistsData
        }
        }>
            {children}
        </DataListContext.Provider >
    )
}

function useDataList() {
    const context = useContext(DataListContext)

    return context;
}

export { DataListProvider, useDataList }