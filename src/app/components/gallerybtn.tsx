import React from 'react';

const BoxButtons = () => {
    const buttons = [
        { number: 1, bgColor: '#FBEBB5' }, // Light yellow for button 1
        { number: 2, bgColor: '#FFF9E5' }, // Light pink for button 2
        { number: 3, bgColor: '#FFF9E5' }, // Light pink for button 3
    ];

    return (
        <div style={{ textAlign: 'center', marginTop: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginBottom: '70px' }}>
            {/* Buttons */}
            {buttons.map((btn) => (
                <button
                    key={btn.number}
                    style={{
                        padding: '10px 15px',
                        backgroundColor: btn.bgColor,
                        color: '#000',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        fontWeight: 'bold',
                    }}
                >
                    {btn.number}
                </button>
            ))}

            {/* "Next" Text */}
            <span style={{ marginLeft: '10px', fontSize: '16px', fontWeight: 'bold' }}>Next</span>
        </div>
    );
};

export default BoxButtons;
