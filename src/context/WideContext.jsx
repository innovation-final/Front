import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

export const WideContext = React.createContext();

function WideStore({ children }) {
    const [wide, setWide] = useState(true);
    const wideWrapper = useMemo(() => ({ wide, setWide }), [wide]);

    return (
        <WideContext.Provider value={wideWrapper}>
            {children}
        </WideContext.Provider>
    );
}

WideStore.propTypes = {
    children: PropTypes.node,
};

export default WideStore;
