import React, { useState, useCallback } from 'react';
import { applyColor } from '../photoshop/Colors';
import { ChangeColor } from './ChangeColor';
import { ColorList } from './ColorList';
import { AddColor } from './AddColor';
import { DeleteColor } from './DeleteColor';
import { ColorPicker } from './ColorPicker';

const App = () => {
    const defaultValues = [
        { r: 255, g: 0, b: 0 },
        { r: 0, g: 255, b: 0 },
        { r: 0, g: 0, b: 255 }
    ];

    const [colors, setColors] = useState(defaultValues);
    const [color, setColor] = useState({ r: 255, g: 0, b: 0 });
    const [colorIndex, setColorIndex] = useState(1);


    const changeColor = useCallback(() => {
        const colorValue = colors[colorIndex];
        applyColor(colorValue);

        setColorIndex(prev => {
            return (prev < colors.length - 1) ? prev + 1 : 0;
        });
    }, [colors, colorIndex]);


    const selectColor = useCallback(event => {
        const target = event.target;
        const index = Number(target.getAttribute('data-index'));
        if (index === colorIndex - 1) return;

        const colorValue = colors[index];
        applyColor(colorValue);

        setColorIndex(() => {
            return (index < colors.length - 1) ? index + 1 : 0;
        });
    }, [colors, colorIndex]);


    const addColor = useCallback(() => {
        setColors([...colors, color]);
    }, [colors, color]);


    const deleteColor = useCallback(() => {
        setColors(colors.filter((value, index) => (index !== colors.length - 1)));
    }, [colors]);


    const pickColor = useCallback(event => {
        const target = event.target;
        const part = target.getAttribute('data-part');
        switch (part) {
            case 'r':
                setColor(color => ({ ...color, 'r': target.value }));
                break;
            case 'g':
                setColor(color => ({ ...color, 'g': target.value }));
                break;
            case 'b':
                setColor(color => ({ ...color, 'b': target.value }));
                break;
        }
    }, [color]);


    return (
        <>
            <ChangeColor
                changeColor={changeColor}
            />
            <ColorList
                colors={colors}
                changeColor={selectColor}
            />
            <div style={{ marginTop: '14px', marginBottom: '8px' }}>
                <sp-divider></sp-divider>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '8px' }}>
                <AddColor
                    colors={colors}
                    addColor={addColor}
                />
                <DeleteColor
                    colors={colors}
                    deleteColor={deleteColor}
                />
            </div>
            <ColorPicker
                color={color}
                pickColor={pickColor}
            />
        </>
    );
};

export default App;
