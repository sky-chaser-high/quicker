import React, { memo } from 'react';
import { AddIcon } from './Icons';

export const AddColor = memo(({ colors, addColor }) => {
    return (
        <>
            {colors.length >= 10
                ? <sp-action-button quiet disabled><AddIcon /></sp-action-button>
                : <sp-action-button quiet onClick={addColor}><AddIcon /></sp-action-button>
            }
        </>
    );
});
