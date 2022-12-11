import React, { memo } from 'react';

export const ColorList = memo(({ colors, changeColor }) => {
    return (
        <div style={{ display: 'flex', marginTop: '14px', marginBottom: '8px' }}>
            {
                colors.map((color, index) => (
                    <div
                        data-index={index}
                        style={{
                            textAlign: 'center',
                            width: '21px',
                            height: '21px',
                            backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`
                        }}
                        onClick={changeColor}
                    >
                    </div>
                ))
            }
        </div>
    );
});
