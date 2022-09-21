import { useLocation } from 'react-router-dom';

function Redirect() {
    const location = useLocation();
    const { url } = location.state;
    if (url) window.location.href = url;
    return null;
}

export default Redirect;
