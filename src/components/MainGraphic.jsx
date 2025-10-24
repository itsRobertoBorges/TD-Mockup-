import React from 'react';


const MainGraphic = ({
    className = '',
    title = '',
    width = '100%',
    height = "auto",
    imageSrc = 'https://via.placeholder.com/1200x800',
                                       
}) => {
    const computedHeight = typeof height === 'number' ? `${height}px` : height;

    return (

        <div
            className={className}
            style={{
                width,
                height: computedHeight,
                display: 'flex',
                minHeight: '100vh',
                minWidth: '50vh',
                overflow: 'hidden'
            }}
        >
            <div
                style={{
                    flex: 1,
 
                    flex: '0 0 25%',
                    maxWidth: '25vw',
                    width: '25%',
                    color: '#007a3d',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '20px'
                }}
            >
                <h1 style={{ margin: 0, fontSize: '1.8rem' }}>{title}</h1>
                <p className='fade-in' style={{ paddingLeft: '120px', marginTop: '12px', fontSize: '45px', lineHeight: 1.3 }}>
                    Online Banking & Services To Meet Your Goals
                </p>
            </div>

            <div style={{ flex: 1 }}>
                <img
                    src={"src/assets/img/maingraphic.png"}
                    alt="Illustration"
                    className='fade-in'
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
            </div>
        </div>
    );
};



export default MainGraphic;