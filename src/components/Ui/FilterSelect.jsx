// components/FilterSelect.tsx
import { Select } from 'antd';
import { useEffect, useState } from 'react';

const { Option } = Select;

const FilterSelect = ({
    options = [],
    defaultValue = undefined,
    placeholder = 'Select...',
    onChange,
    allowClear = true,
    mode = undefined,
    style = { width: 200 },
    ...rest
}) => {
    const [selectedValue, setSelectedValue] = useState(defaultValue);

    useEffect(() => {
        setSelectedValue(defaultValue);
    }, [defaultValue]);

    const handleChange = (value) => {
        setSelectedValue(value);
        if (onChange) {
            onChange(value);
        }
    };

    return (
        <Select
            value={selectedValue}
            placeholder={placeholder}
            allowClear={allowClear}
            onChange={handleChange}
            mode={mode}
            style={style}
            {...rest}
        >
            {options.map(({ label, value }) => (
                <Option key={value} value={value}>
                    {label}
                </Option>
            ))}
        </Select>
    );
};

export default FilterSelect;
