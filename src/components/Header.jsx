import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import { FaHome } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
    return (
        <AppBar position="static" color="primary">
            <Toolbar sx={{bgcolor: "blue"}}>
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    width="100%"
                    
                >
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <FaHome />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ textAlign: 'center' }}
                    >
                        {title}
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header;