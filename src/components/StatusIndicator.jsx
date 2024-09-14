import React from 'react';

const StatusIndicator = ({ status }) => {
    if (!status) return null; // If there's no status to show, don't render anything

    return (
        <div className="status-indicator">
            {status === 'Searching' && (
                <p className="text-blue-500">🔍 Searching...</p>
            )}
            {status === 'No Results Found' && (
                <p className="text-red-500">❗ No Results Found</p>
            )}
            {status === 'Error' && (
                <p className="text-red-500">⚠️ An Error Occurred. Please try again.</p>
            )}
        </div>
    );
};

export default StatusIndicator;
