import React, { createContext, ReactNode, useContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

export interface Item {
    id: string;
    nameItem: string;
    done: boolean;
};

type AuthContextData = {
    item: Item[] | null;
    setList: (nameItem: string) => void;
    updateItemDone: (itemId: string) => void;
    contItemDone: string;
    modalVisible: boolean;
    deleteItem: () => void;
    persistsData: () => void;
    visibleModalDeleteId: (itemId: string) => void;
    notVisibleModal: () => void;
};

type AuthProviderProps = {
    children: ReactNode;
};

export const DataListContext = createContext({} as AuthContextData);

const items: Item[] = [];

function DataListProvider({ children }: AuthProviderProps) {
    const [item, setItem] = useState<Item[]>([]);
    const [contItemDone, setContItemDone] = useState('')
    const [modalVisible, setModalVisible] = useState(false);
    const [deleteId, setDeleteId] = useState('');

    async function persistsData() {
        const result = await AsyncStorage.getItem('@basket');

        if (result) {
            const list = JSON.parse(result) as Item[];

            list.map((item: Item) => {
                items.push(item);
            });

            setItem(items);
            itemsDoneAll();
        };
    };

    async function setList(nameItem: string) {
        const newItem: Item = {
            id: String(uuid.v4()),
            nameItem,
            done: false,
        };

        items.push(newItem);
        setItem(items);

        itemsDoneAll();

        await AsyncStorage.setItem('@basket', JSON.stringify(items));
    };

    async function updateItemDone(itemId: string) {
        const result = items.find(item => item.id === itemId);

        if (result) {
            result.done = !result.done;
            itemsDoneAll();
            await AsyncStorage.setItem('@basket', JSON.stringify(items));
        };
    };

    async function deleteItem() {
        if (deleteId) {
            const possition = items.findIndex(item => item.id === deleteId);

            items.splice(possition, 1);
            itemsDoneAll();

            await AsyncStorage.setItem('@basket', JSON.stringify(items));
            notVisibleModal();
        };
    };

    function itemsDoneAll() {
        const itensDone = items.filter(item => item.done === true);

        setContItemDone(`${itensDone.length}/${items.length}`);
    };

    function visibleModalDeleteId(itemId: string) {
        setDeleteId(itemId);
        setModalVisible(true);
    };

    function notVisibleModal() {
        setModalVisible(false);
    };


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
    );
};

function useDataList() {
    const context = useContext(DataListContext)

    return context;
};

export { DataListProvider, useDataList };