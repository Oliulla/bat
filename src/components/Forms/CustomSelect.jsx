import { Select } from 'antd';
import React from 'react';

const { Option } = Select;

const CustomSelect = ({
    label,
    options,
    defaultValue,
    onSelect,
    isMultiple = false,
    placeholder = 'Select an option',
    allowClear = true,
    className = '',
    ...rest
}) => {
    const handleChange = (value) => {
        if (onSelect) {
            onSelect(value);
        }
    };

    return (
        <div className="mb-4 w-full">
            {label && (
                <label className="mb-2 block text-gray-700">{label}</label>
            )}
            <Select
                mode={isMultiple ? 'multiple' : undefined}
                defaultValue={defaultValue}
                onChange={handleChange}
                placeholder={placeholder}
                allowClear={allowClear}
                className={className}
                style={{ width: '100%' }}
                {...rest}
            >
                {options.map((option) => (
                    <Option key={option.value} value={option.value}>
                        {option.label}
                    </Option>
                ))}
            </Select>
        </div>
    );
};

export default CustomSelect;
