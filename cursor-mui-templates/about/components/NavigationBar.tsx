import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import ColorModeIconDropdown from '../../shared-theme/ColorModeIconDropdown';

const logoStyle = {
  width: '140px',
  height: 'auto',
  cursor: 'pointer',
};

interface NavigationBarProps {
  toggleColorMode: () => void;
}

function NavigationBar({ toggleColorMode }: NavigationBarProps) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <AppBar
        component="nav"
        color="default"
        elevation={0}
        sx={{
          bgcolor: 'background.paper',
          display: { xs: 'none', md: 'none' },
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              direction: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              minHeight: `${theme.spacing(8)}`,
              [`& .MuiTypography-root`]: {
                mt: 0,
              },
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '-18px',
                px: 0,
              }}
            >
              <img
                src="/logo.svg"
                style={logoStyle}
                alt="logo of sitemark"
                onClick={() => scrollToSection('top')}
              />
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <MenuItem
                  onClick={() => scrollToSection('mission')}
                  sx={{ py: 2, px: 3 }}
                >
                  <Typography variant="body2" color="text.primary">
                    Mission
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('values')}
                  sx={{ py: 2, px: 3 }}
                >
                  <Typography variant="body2" color="text.primary">
                    Values
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('history')}
                  sx={{ py: 2, px: 3 }}
                >
                  <Typography variant="body2" color="text.primary">
                    History
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('team')}
                  sx={{ py: 2, px: 3 }}
                >
                  <Typography variant="body2" color="text.primary">
                    Team
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('contact')}
                  sx={{ py: 2, px: 3 }}
                >
                  <Typography variant="body2" color="text.primary">
                    Contact
                  </Typography>
                </MenuItem>
              </Box>
            </Box>
            <Box sx={{ display: { flex: 'none', md: 'flex' }, gap: 0.5 }}>
              <ColorModeIconDropdown onToggleColorMode={toggleColorMode} />
            </Box>
            <Box sx={{ display: { sm: '', md: 'none' } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: 'auto', padding: '10px' }}
              >
                <MenuIcon />
              </Button>
              <Drawer
                anchor="right"
                open={open}
                onClose={toggleDrawer(false)}
                sx={{
                  display: { xs: 'block', md: 'none' },
                  '& .MuiDrawer-paper': {
                    boxSizing: 'border-box',
                    width: 240,
                  },
                }}
              >
                <Box
                  sx={{
                    minWidth: '60dvw',
                    p: 2,
                    backgroundColor: 'background.paper',
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'end',
                      flexGrow: 1,
                    }}
                  >
                    <ColorModeIconDropdown onToggleColorMode={toggleColorMode} />
                    <MenuItem onClick={() => scrollToSection('mission')}>
                      Mission
                    </MenuItem>
                    <MenuItem onClick={() => scrollToSection('values')}>
                      Values
                    </MenuItem>
                    <MenuItem onClick={() => scrollToSection('history')}>
                      History
                    </MenuItem>
                    <MenuItem onClick={() => scrollToSection('team')}>
                      Team
                    </MenuItem>
                    <MenuItem onClick={() => scrollToSection('contact')}>
                      Contact
                    </MenuItem>
                  </Box>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default NavigationBar; 