import Scrollbar from "smooth-scrollbar";
import React from "react";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";

const SmoothScroll: React.FC = (): null => {

    const overscrollOptions = {
        enable: true,
        effect: 'bounce',
        damping: 0.15,
        maxOverscroll: 150,
        glowColor: '#fff',
    };
    const options = {
        damping: 0.07,
        plugins: {

            overscroll: { ...overscrollOptions },

        },
    }

    React.useEffect(() => {
        Scrollbar.use(OverscrollPlugin);
        Scrollbar.init(document.body, options);

        return () => {
            if (Scrollbar) Scrollbar.destroy(document.body);
        };
    }, []);

    return null;
};

export default SmoothScroll;