import { Select } from 'antd';

export const useSelect = ({
    options,
    defaultValue,
    placeholder = 'Please select',
    disabled = false,
    mode,
    allowClear = true,
    onChange,
}) => ({
    SelectComponent: (
        <Select
            defaultValue={defaultValue}
            placeholder={placeholder}
            disabled={disabled}
            mode={mode}
            allowClear={allowClear}
            onChange={onChange}
            options={options}
        />
    ),
});
