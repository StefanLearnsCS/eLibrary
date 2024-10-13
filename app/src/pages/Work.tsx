import React from 'react'

export const Work: React.FC = () => {
    const electron = (window as any).electron;
    return (
        <div>
            <p> Work!!! </p>
            <p> The home directory is {electron.homeDir()} </p>
        </div>
    );
};