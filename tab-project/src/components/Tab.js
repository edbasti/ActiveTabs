import React from 'react';

const Tab = (props) => {
    const { isSelected, children } = props;
    return (
        <>
            {isSelected &&
                <div className="tab-container">
                { children }
                </div>
            }
        </>
    )
}

export default Tab;