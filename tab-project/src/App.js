import React, { useState } from 'react';
import './App.css';
import Tabs from './components/Tabs';
import Tab from './components/Tab';

const App = () => {
  const [selected, setSelected] = useState('Tab1');

    return (
      <div className="container">
        <div className="App mt-4 main-content">
          <Tabs tabs={['Tab1', 'Tab2', 'Tab3']} selected={ selected } setSelected={ setSelected }>
            <Tab isSelected={ selected === 'Tab1' }>
              <p>This is Tab 1 text.</p>
            </Tab>
            <Tab isSelected={ selected === 'Tab2' }>
              <h1>This is Tab 2 header</h1>
              <p>Ut tincidunt tincidunt erat. Fusce convallis metus id felis luctus adipiscing. 
                Vivamus quis mi. Nullam vel sem. Morbi ac felis.</p>
              <p>Maecenas vestibulum mollis diam.. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Suspendisse potenti. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.</p>
              <div className="button-wrapper">
                <button type="button" class="btn btn-primary">Primary</button>
              </div>
            </Tab>
            <Tab isSelected={selected === 'Tab3'}>
              <p>Tab3 with list</p>
              <ul>
                <li>List test 1</li>
                <li>List test 2</li>
                <li>List test 3</li>
              </ul>
            </Tab>
          </Tabs>
        </div>
      </div>
    );
}
export default App;