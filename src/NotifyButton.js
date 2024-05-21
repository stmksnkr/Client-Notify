import React from 'react';
import { messaging } from './firebase';
import { getToken } from 'firebase/messaging';

import axios from 'axios';

const NotifyButton = () => {

    const requestPermission = async () => {
        const permission = await Notification.requestPermission();
        if (permission === "granted") {

            const token = await getToken(messaging, {
                vapidKey: "BNqA9KSCPbaW0YuPjthklmKePafb6tdkPQPlaOS67z6zrXQ0-wfQ0FVThokzcW0D04s2UwfxS26jqHZx3y2v_d4",
            });

            console.log("Token Gen", token);
            await sendTokenToServer(token);
        } else if (permission === "denied") {
            alert("You denied the notification");
        }
    };

    const sendTokenToServer = async (token) => {
        try {
            const response = await axios.post('https://notify-server-1.onrender.com/send', { fcmToken: token });
            console.log('Server response:', response.data);
        } catch (error) {
            console.error('Error sending token to server:', error);
        }
    };

    return (
        <>
            <button onClick={requestPermission}>Send Notification</button>
        </>

    );
};

export default NotifyButton;
