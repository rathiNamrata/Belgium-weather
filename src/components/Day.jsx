import { Paper, Box, Typography, Grid } from '@mui/material';

import PropTypes from 'prop-types';

import Hour from './Hour';

const Day = ({ day, dayWeather, dayOfWeek }) => {
    return (
        <Paper elevation={3} sx={{ padding: 2, margin: 2, bgcolor:"lightgreen", borderRadius: 5 }}>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                mb={2}
                sx={{ bgcolor:"green", borderRadius: 1 }}
            >
                <Box display="flex" justifyContent="center" alignItems="center">
                    <Typography variant="h5" component="span" sx={{ mr: 1 }}>
                        {dayOfWeek} : {day}
                    </Typography>
                    <Typography variant="h6" component="span">
                        °C
                    </Typography>
                </Box>
            </Box>
            <Grid container spacing={2}>
                {dayWeather.map((hourData, index) => (
                    <Grid key={index} item xs={12} sm={6} md={4}>
                        <Hour hourData={hourData} />
                    </Grid>
                ))}
            </Grid>
        </Paper>
    );
};

Day.propTypes = {
    day: PropTypes.string.isRequired,
    dayWeather: PropTypes.array.isRequired,
};

export default Day;