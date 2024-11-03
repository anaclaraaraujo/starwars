import { Select } from "antd";

interface FilterProps {
  options: Array<{ value: string; label: string }>
  selectedValue: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function Filter({ options, selectedValue, onChange, placeholder }: FilterProps) {
  return (
    <Select
      value={selectedValue}
      onChange={onChange}
      placeholder={placeholder || 'Select an option'}
    >
      <Select.Option value="">All</Select.Option>
      {options.map(
        option => (
          <Select.Option key={option.value} value={option.value}>
            {option.label}
          </Select.Option>
        )
      )}
    </Select>
  )
}