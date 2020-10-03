import React from 'react';
import Button from '@material-ui/core/Button';

function ToggleButton(props: any) {
    const { onChange, visible, mainLabel, alternativeLabel } = props

    return <Button 
        variant="contained"
        color="primary"
        onClick={ () => onChange(!visible)}
        >
            { visible ? mainLabel : alternativeLabel }
        </Button>
    }

export default ToggleButton;
