import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Footer from './Footer';
import GitHubButton from './GitHubButton';

const Layout: React.FC<{}> = ({ children }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <div className='flex-1 px-2 lg:px-0 relative'>
                <div
                    className='absolute top-0 left-0 right-0 bottom-0'
                    style={{
                        backgroundColor: '#FDCB6E',
                        height: '32rem',
                        transform: 'skewY(-4deg)',
                        transformOrigin: 'top left',
                        zIndex: -1,
                    }}
                />
                <div className="ml-auto mr-auto max-w-4xl">
                    <div className='flex items-center justify-between py-4'>
                        <Link to='/' className='flex items-center'>
                            <div className='font-semibold text-2xl'>this</div>
                            <div className='mx-1 h-8 inline-flex items-center justify-center rounded-full text-white w-8' style={{ backgroundColor: '#6C5CE7' }}>vs</div>
                            <div className='font-semibold text-2xl'>that</div>
                        </Link>
                        <GitHubButton />
                    </div>
                    {children}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Layout;
