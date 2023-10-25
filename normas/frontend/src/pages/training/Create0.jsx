import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';

const PerfilCard = ({ nome, idade, email, fotoUrl }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={fotoUrl}
        alt={nome}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {nome}, {idade}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {email}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PerfilCard;
