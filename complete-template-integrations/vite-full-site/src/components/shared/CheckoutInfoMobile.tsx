import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import CheckoutInfo from './CheckoutInfo';

interface CheckoutInfoMobileProps {
  step: number;
}

export default function CheckoutInfoMobile({ step }: CheckoutInfoMobileProps) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box 
      sx={{ 
        width: '100%', 
        px: 3, 
        pb: 3, 
        pt: 8,
        bgcolor: 'background.paper',
        height: '100%',
        overflow: 'auto'
      }} 
      role="presentation"
    >
      <IconButton
        onClick={toggleDrawer(false)}
        sx={{ position: 'absolute', right: 8, top: 8 }}
      >
        <CloseIcon />
      </IconButton>
      <CheckoutInfo step={step} />
    </Box>
  );

  return (
    <div>
      <Button
        variant="text"
        endIcon={<ExpandMoreRoundedIcon />}
        onClick={toggleDrawer(true)}
        sx={{ mb: 2 }}
      >
        View details
      </Button>
      <Drawer
        open={open}
        anchor="top"
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            top: 'var(--template-frame-height, 0px)',
            backgroundImage: 'none',
            backgroundColor: 'background.paper',
            maxHeight: '80vh',
          },
        }}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
} 