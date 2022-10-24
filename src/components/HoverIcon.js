import { useState } from 'react';
import './styles/HoverIcon.css';

const HoverIcon = ({MainComponent, HiddenComponent}) => {
  const [stateHiddenComp, setStateHiddenComp] = useState('');

  return (
    <div
      className={`MainComponent `}
      onMouseEnter={() => setStateHiddenComp('shown')}
      onMouseLeave={() => setStateHiddenComp('hidden')}>
      {stateHiddenComp === 'shown'?
      <div
        className={`HiddenComponentFloater`}>
          <div className="HiddenComponent">{HiddenComponent}</div>
      </div>: <></>}
      {MainComponent}
    </div>
  )
}

export default HoverIcon;
