import React, { memo } from 'react';

export const ChangeColor = memo(({ changeColor }) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <sp-button variant='primary' onClick={changeColor}>
                Change Color
            </sp-button>
        </div>
    );
});
