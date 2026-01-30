import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    const navType = useNavigationType();

    useEffect(() => {
        // Scroll to top only if the navigation type is NOT 'POP' (i.e. not a back/forward action)
        // This allows the browser to restore the previous scroll position naturally on 'POP'.
        if (navType !== 'POP') {
            window.scrollTo(0, 0);
        }
    }, [pathname, navType]);

    return null;
};

export default ScrollToTop;
