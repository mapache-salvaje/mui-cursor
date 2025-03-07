import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import Info from './Info';

interface InfoMobileProps {
  step: number;
}

export default function InfoMobile({ step }: InfoMobileProps) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h4" gutterBottom>
        {step === 0 ? 'Shipping address' : step === 1 ? 'Payment details' : 'Review your order'}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {step === 0
          ? 'Please enter your shipping address.'
          : step === 1
          ? 'Please enter your payment details.'
          : 'Please review your order before placing it.'}
      </Typography>
      {open && (
        <Box
          sx={{
            position: 'fixed',
            bottom: 0,
            right: 0,
            left: 0,
            bgcolor: 'background.paper',
            borderTop: 1,
            borderColor: 'divider',
            p: 2,
            zIndex: 1200,
          }}
        >
          <IconButton
            onClick={handleClick}
            sx={{ position: 'absolute', right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
          <Info step={step} />
        </Box>
      )}
      {!open && (
        <Box
          onClick={handleClick}
          sx={{
            mt: 2,
            py: 2,
            px: 3,
            bgcolor: 'background.paper',
            borderRadius: 1,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography>Show order summary</Typography>
          <ExpandMoreRoundedIcon />
        </Box>
      )}
    </Box>
  );
}
