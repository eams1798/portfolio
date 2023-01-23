import { useState } from 'react';
import './styles/HoverIcon.css';

const Skill = ({defaultIcon, onHoverIcon}: {
  defaultIcon: JSX.Element, onHoverIcon: JSX.Element
}) => {
  const [stateHiddenComp, setStateHiddenComp] = useState<string>('');

  return (
    <li className="skill-item">
      <div
        className={`defaultIcon `}
        onMouseEnter={() => setStateHiddenComp('shown')}
        onMouseLeave={() => setStateHiddenComp('hidden')}>
        {stateHiddenComp === 'shown'?
        <div
          className={`onHoverIconFloater`}>
            <div className="onHoverIcon">{onHoverIcon}</div>
        </div>: <></>}
        {defaultIcon}
      </div>
    </li>
  )
}

export default Skill;