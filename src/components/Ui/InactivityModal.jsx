import { Button, Modal } from 'antd';
import React, { useEffect } from 'react';

const InactivityModal = ({ visible, onLogout, onStay }) => {
    useEffect(() => {
        const handleKeyPress = () => {
            onStay();
        };

        const handleMouseMove = () => {
            onStay();
        };

        window.addEventListener('keypress', handleKeyPress);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('keypress', handleKeyPress);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [onStay]);

    return (
        <Modal
            title="Session Inactivity"
            visible={visible}
            onCancel={onLogout}
            footer={[
                <Button key="stay" onClick={onStay}>
                    Stay Logged In
                </Button>,
                <Button key="logout" type="primary" onClick={onLogout}>
                    Log Out
                </Button>,
            ]}
        >
            <p>
                Your session is about to expire due to inactivity. Would you
                like to stay logged in?
            </p>
        </Modal>
    );
};

export default InactivityModal;
