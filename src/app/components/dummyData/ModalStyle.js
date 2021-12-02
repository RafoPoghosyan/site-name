import React from 'react';

const yourCartStyle = {
    overlay: {
        background: "rgba(0, 0, 0, 0.5)",
    },
    content: {
        position: 'fixed',
        left: '100%',
        top: '0',
        transform: 'translateX(-100%)',
        zIndex: '1',
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderRadius: '0',
        padding: '0',
        maxHeight: '100vh',
        height: 'max-content',
        maxWidth: '760px',
        width: '100%',
        border: 'none',
        overflow: 'auto'
    },
};

const checkoutStyle = {
    overlay: {
        background: "rgba(0, 0, 0, 0.5)",
    },
    content: {
        position: 'fixed',
        left: '100%',
        top: '0',
        transform: 'translateX(-100%)',
        zIndex: '1',
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderRadius: '0',
        padding: '0',
        maxHeight: '100vh',
        height: 'max-content',
        maxWidth: '558px',
        width: '100%',
        border: 'none',
        overflow: 'auto'
    },
};

const foodCartInfo = {
    overlay: {
        background: "rgba(0, 0, 0, 0.5)",
    },
    content: {
        position: 'fixed',
        left: '100%',
        top: '0',
        transform: 'translateX(-100%)',
        zIndex: '1',
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderRadius: '0',
        padding: '0',
        minHeight: 'max-content',
        maxWidth: '521px',
        width: '100%',
        border: 'none',

    },
};

export {
    yourCartStyle,
    checkoutStyle,
    foodCartInfo
}