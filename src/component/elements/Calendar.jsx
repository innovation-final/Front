import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

function Calendar({ getCurrentDate }) {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const onChange = dates => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
        getCurrentDate(start, end);
    };

    return (
        <StyledDatePicker
            dateFormat="yyyy/MM/dd"
            startDate={startDate}
            endDate={endDate}
            onChange={onChange}
            selectsRange
        />
    );
}

export default Calendar;

const StyledDatePicker = styled(DatePicker)`
    padding: 5px 15px;
    width: 100%;
    box-sizing: border-box;
    border-radius: 10px;
    border: 1px solid ${props => props.theme.secondaryColor};
    font-size: 15px;
    font-weight: 600;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: center;

    &:focus {
        border: 2px solid ${props => props.theme.secondaryColor};
        outline: ${props => props.theme.secondaryColor};
    }
`;
