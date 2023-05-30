import { Dispatch, HTMLInputTypeAttribute, SetStateAction } from "react";

export interface FormModalProps {
    showFormModal: boolean;
    setShowFormModal: Dispatch<SetStateAction<boolean>>;
}

export interface InputBoxProps {
    label: string;
    name: string;
    type: "text" | "number" | "textarea";
    placeholder: string;
    maxLength?: number;
}