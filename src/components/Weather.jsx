import { Container, Box } from '@mui/material';
import PropTypes from 'prop-types';
import Day from './Day';
import organizeWeather from '../utils/organizeWeather';

const weather = ({ weather }) => {
    const organizedWeather = organizeWeather(weather);
        return (
        <Container>
            {Object.entries(organizedWeather).map(
                ([key, value], index) => (
                    <Box key={index} mb={4}>
                        <Day day={key} dayWeather={value.data} dayOfWeek={value.dayOfWeek}/>
                    </Box>
                )
            )}
        </Container>
    );
};

weather.propTypes = {
    weather: PropTypes.object.isRequired
};

export default weather;