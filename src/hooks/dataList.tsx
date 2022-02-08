import React, { createContext, ReactNode, useContext, useState, useEffect } from 'react';

export interface Item {
    id: number;
    nameItem: string;
    done: boolean;
}

type AuthContextData = {
    item: Item[] | null;
    setList: (nameItem: string) => void;
}

type AuthProviderProps = {
    children: ReactNode;
}

export const DataListContext = createContext({} as AuthContextData);

const items:Item[] =[];
let cont = 0;

function DataListProvider({ children }: AuthProviderProps) {
    const [item, setItem] = useState<Item[]>([]);

    async function setList(nameItem: string) {
        const item: Item = {
            id: cont++,
            nameItem,
            done: false,
        }

        items.push(item)
        setItem(items)
    }


    return (
        < DataListContext.Provider value={{
            item,
            setList,
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