import React from 'react';

const Tabs = (props) => {
    const { tabs, selected, setSelected, children } = props;
    
    return (
      <div>
        <ul className="nav nav-tabs">
        {
        tabs.map(tab => {
            const active = (tab === selected ? 'active ' : '' );
            return (
                <li className="nav-item" key={ tab }>
                    <a className={ "nav-link " + active} onClick={ () => setSelected(tab) }>
                        { tab }
                    </a>
                </li>
                );
            })
        }
          
    </ul>
        { children }
    </div>
    );
}
export default Tabs;