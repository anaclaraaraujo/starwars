import { Input } from "antd";

interface SearchInputProps {
    value: string;
    onChange: (value: string) => void;
}

export function SearchInput({ value, onChange }: SearchInputProps) {
    return (
        <Input
            placeholder="Search"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    );
}