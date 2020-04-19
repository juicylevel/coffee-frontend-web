import { useEffect } from 'react';

export default ({
    loading,
    hasNext,
    onFetchNext,
}) => {
    useEffect(() => {
        const handleScroll = () => {
            const contentHeight = document.body.scrollHeight;
            const windowHeight = window.innerHeight;
            const diff = contentHeight - windowHeight;

            if (window.pageYOffset >= diff) {
                onFetchNext();
            }
        };

        if (!loading && hasNext) {
            window.addEventListener('scroll', handleScroll);
        } else {
            window.removeEventListener('scroll', handleScroll);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [
        loading,
        hasNext,
        onFetchNext,
    ]);
};