import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Sidebar } from './sidebar';

export default createBoard({
    name: 'Sidebar',
    Board: () => <Sidebar />
});
