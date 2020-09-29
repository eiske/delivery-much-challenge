import React from 'react';
import { Typography } from '@material-ui/core';

const CardGeneration = ({ generationName }) => {
  return (
    <div className='card'>
      <div className='card-header'>
        <Typography variant='h4'>{generationName}</Typography>
      </div>
    </div>
  );
};

export default CardGeneration;
