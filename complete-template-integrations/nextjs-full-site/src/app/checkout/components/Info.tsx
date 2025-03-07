import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const products = [
  {
    name: 'Professional plan',
    desc: 'Monthly subscription',
    price: '$15.00',
  },
  {
    name: 'Dedicated support',
    desc: 'Included in the Professional plan',
    price: 'Free',
  },
  {
    name: 'Hardware',
    desc: 'Devices needed for development',
    price: '$69.99',
  },
  {
    name: 'Landing page template',
    desc: 'License',
    price: '$49.99',
  },
];

interface InfoProps {
  step: number;
  totalPrice?: string;
}

const totalAmount = '$134.98';

export default function Info({ step, totalPrice = totalAmount }: InfoProps) {
  return (
    <Box sx={{ maxWidth: 400, width: '100%' }}>
      <Typography variant="h4" gutterBottom>
        {step === 0 ? 'Shipping address' : step === 1 ? 'Payment details' : 'Review your order'}
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        {step === 0
          ? 'Please enter your shipping address.'
          : step === 1
          ? 'Please enter your payment details.'
          : 'Please review your order before placing it.'}
      </Typography>
      <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
        Total
      </Typography>
      <Typography variant="h4" gutterBottom>
        {totalPrice}
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText
              sx={{ mr: 2 }}
              primary={product.name}
              secondary={product.desc}
            />
            <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
              {product.price}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
