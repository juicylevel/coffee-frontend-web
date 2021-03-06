import { useEffect } from 'react';
import getSize from 'get-size';

const centeringFrameContent = () => {
    try {
        const frameContentEl = document.querySelector('main > section > article > *');

        const appWrapperHeight   = getSize('.app-layout-wrapper').innerHeight;
        const appHeaderHeight    = getSize('.app-layout-wrapper > header').outerHeight;
        const frameHeaderHeight  = getSize('main > section > h5').outerHeight;
        const frameContentHeight = getSize('main > section > article > *').innerHeight;

        const frameContentMarginTop = Math.max(
            (appWrapperHeight - frameContentHeight) / 2 - 
            (appHeaderHeight + frameHeaderHeight), 
            0
        );
        
        frameContentEl.style.marginTop = `${frameContentMarginTop}px`;
        
    } catch (error) {
        // some elements have not yet been drawn
    }
};

export default () => {
    useEffect(() => {
        centeringFrameContent();

        window.addEventListener('resize', centeringFrameContent);

        const observer = new MutationObserver(centeringFrameContent);
        const rootEl = document.querySelector('#root');
        observer.observe(rootEl, {
            childList: true,
            characterData: true,
            subtree: true,
        });

        return () => {
            window.removeEventListener('resize', centeringFrameContent);
            observer.disconnect();
        };
    }, []);
};