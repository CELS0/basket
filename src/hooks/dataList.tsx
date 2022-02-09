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
    deleteItem: () => void;
    persistsData: () => void;
    visibleModalDeleteId: (itemId: number) => void;
    notVisibleModal: () => void;
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
    const [deleteId, setDeleteId] = useState(0);

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
        console.log('Update', itemId)

        const result = items.find(item => item.id === itemId);

        if (result) {
            result.done = !result.done;
            itemsDoneAll()
        };

    };

    async function deleteItem() {
        if (deleteId) {
            const possition = items.findIndex(item => item.id === deleteId);

            items.splice(possition, 1);
            itemsDoneAll();

            await AsyncStorage.setItem('@basket', JSON.stringify(items))
            setModalVisible(false)
        }
    }

    function itemsDoneAll() {
        const itensDone = items.filter(item => item.done === true);

        setContItemDone(`${itensDone.length}/${items.length}`)

    }

    function visibleModalDeleteId(itemId: number) {
        setDeleteId(itemId);
        setModalVisible(true)
    }

    function notVisibleModal() {
        setModalVisible(false)
    }


    return (
        < DataListContext.Provider value={{
            item,
            setList,
            updateItemDone,
            contItemDone,
            modalVisible,
            deleteItem,
            persistsData,
            visibleModalDeleteId,
            notVisibleModal,
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