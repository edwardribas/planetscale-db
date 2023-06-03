"use client";

import { UpdateJobInterface } from '@/api/models';
import { Dispatch, SetStateAction, createContext, useState } from 'react';

interface ModalContextProviderProps {
    children: React.ReactNode;
}

interface ModalContextInfoModal {
    active: boolean;
    mode: "edit" | "add";
    currentData?: UpdateJobInterface;
}

interface ModalContextValues {
    modalContextInfo: ModalContextInfoModal;
    setModalContextInfo: Dispatch<SetStateAction<ModalContextInfoModal>>
}

export const ModalContext = createContext<ModalContextValues>({
    modalContextInfo: {
        active: false,
        mode: "add",
    },
    setModalContextInfo: () => null,
})

export const ModalContextProvider = ({
    children
}: ModalContextProviderProps) => {
    const [modalContextInfo, setModalContextInfo] = useState<ModalContextInfoModal>({
        active: false,
        mode: "add",
    })

    return (
        <ModalContext.Provider value={{modalContextInfo, setModalContextInfo}}>
            {children}
        </ModalContext.Provider>
    )
};
