import './styles/PFSkills.css';
import { useTranslation } from 'react-i18next';
import dataSkills from '../data/dataSkills';
import SkillGroup from './SkillGroup';

const PFSkills = () => {
  const [ tS, ] = useTranslation("Skills");
  return (
    <div id="Skills" className="Skills-container">
      <h1 className="text-color2">{tS("skills")}</h1>
      {dataSkills.map(({groupName, skills}) => (
        <SkillGroup
          key={groupName}
          title={groupName}
          skills={skills}/>
      ))}
    </div>
  );
}

export default PFSkills;
