import MainHeader from '@/components/Headers/MainHeader';
import { Button, Form, Input, Select } from 'antd';

const options = [];
for (let i = 10; i < 36; i++) {
    options.push({
        value: i.toString(36) + i,
        label: i.toString(36) + i,
    });
}
const handleChange = (value) => {
    console.log(`selected ${value}`);
};

const RegularCampaign = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted');
    };
    return (
        <div>
            <MainHeader title={'Regular Campaign'} />
            <Form
                layout="horizontal"
                onSubmit={handleSubmit}
                className="grid grid-flow-col grid-cols-5 gap-5"
            >
                <Form.Item>
                    <Select
                        mode="tags"
                        placeholder="Select a Tag"
                        onChange={handleChange}
                        tokenSeparators={[',']}
                        allowClear
                        options={options}
                    />
                </Form.Item>
                <Form.Item>
                    <Input placeholder="Campaign Description" />
                </Form.Item>
                <Form.Item>
                    <Input placeholder="Campaign Image" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary">Create Campaign</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default RegularCampaign;
