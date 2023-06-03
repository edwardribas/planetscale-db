export interface InputBoxProps {
    label: string;
    name: string;
    defaultValue?: string | number | null;
    type: "text" | "number" | "textarea";
    placeholder: string;
    maxLength?: number;
}