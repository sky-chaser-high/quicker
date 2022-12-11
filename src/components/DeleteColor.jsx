import React, { memo } from 'react';
import { DeleteIcon } from './Icons';

export const DeleteColor = memo(({ colors, deleteColor }) => {
    return (
        <>
            {colors.length <= 3
                ? <sp-action-button quiet disabled><DeleteIcon /></sp-action-button>
                : <sp-action-button quiet onClick={deleteColor}><DeleteIcon /></sp-action-button>
            }
        </>
    );
});
