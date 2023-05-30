import { Dispatch, SetStateAction } from "react";

export interface FormModalProps {
    showFormModal: boolean;
    setShowFormModal: Dispatch<SetStateAction<boolean>>;
}