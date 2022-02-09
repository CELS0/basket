import React, { createContext, ReactNode, useContext, useState, useEffect } from 'react';

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


    async function setList(nameItem: string) {
        const item: Item = {
            id: cont++,
            nameItem,
            done: false,
        }

        items.push(item)

        const listRevert = items.reverse();
        setItem(listRevert)
        itemsDoneAll()
    }

    function updateItemDone(itemId: number) {
        const result = items.find(item => item.id === itemId);

        if (result) {
            result.done = !result.done;
            itemsDoneAll()
        };
    };

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
            visibleModal
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