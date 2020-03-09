import React from 'react';
import Box from '@material-ui/core/Box';

function Title() {
    return(
        <Box style={{ 'display': 'flex', 'align-items': 'center', 'flexDirection': 'column' }}>
            <h1>(React) Google Books Search</h1>
            <h3>Search for and Save Books of Interest</h3>
        </Box>
    )
}

export default Title;