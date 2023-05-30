"use client";

import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

export type ModalActiveProviderProps = { children: React.ReactNode }

export type ModalActiveContextProps = {
    showFormModal: boolean;
    setShowFormModal: Dispatch<SetStateAction<boolean>>;
}

export const ModalActiveContext = createContext<ModalActiveContextProps>({
    showFormModal: false,
    setShowFormModal: () => null,
})

export const ModalActiveProvider = ({
    children
}: ModalActiveProviderProps) => {
    const [showFormModal, setShowFormModal] = useState(false);

    return (
        <ModalActiveContext.Provider value={{ showFormModal, setShowFormModal }}>
            {children}
        </ModalActiveContext.Provider>
    )
}

export const useModalActiveContext = () => {
    return {...useContext(ModalActiveContext)}
}