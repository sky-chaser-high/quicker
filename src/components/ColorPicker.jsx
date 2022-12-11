import React, { memo } from 'react';

export const ColorPicker = memo(({ color, pickColor }) => {
    return (
        <div style={{ marginTop: '8px' }}>
            <div style={{
                backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`,
                width: '100%',
                height: '50px',
                borderRadius: '3px'
            }}></div>
            <div style={{ display: 'flex', marginTop: '8px' }}>
                <sp-slider
                    data-part='r'
                    variant='filled'
                    fill-offset='left'
                    min={0}
                    max={255}
                    value={color.r}
                    style={{ width: '100%' }}
                    onInput={pickColor}
                >
                    <sp-label slot='label'>R</sp-label>
                </sp-slider>
            </div>
            <div style={{ display: 'flex', marginTop: '8px' }}>
                <sp-slider
                    data-part='g'
                    variant='filled'
                    fill-offset='left'
                    min={0}
                    max={255}
                    value={color.g}
                    style={{ width: '100%' }}
                    onInput={pickColor}
                >
                    <sp-label slot='label'>G</sp-label>
                </sp-slider>
            </div>
            <div style={{ display: 'flex', marginTop: '8px' }}>
                <sp-slider
                    data-part='b'
                    variant='filled'
                    fill-offset='left'
                    min={0}
                    max={255}
                    value={color.b}
                    style={{ width: '100%' }}
                    onInput={pickColor}
                >
                    <sp-label slot='label'>B</sp-label>
                </sp-slider>
            </div>
        </div>
    );
});
