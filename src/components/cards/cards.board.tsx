import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Cards } from './cards';

export default createBoard({
    name: '🧩 Cards',
    Board: () => <Cards />,
    environmentProps: {
        canvasWidth: 874
    }
});
