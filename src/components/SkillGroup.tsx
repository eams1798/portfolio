import { SkillComponent } from '../interfaces/typeSkills';
import { useTranslation } from 'react-i18next';
import Skill from './Skill';

const SkillGroup = ({title, skills}: {
    title: string, skills: SkillComponent[]
  }) => {
  const [ tS, ] = useTranslation("Skills");

  return (
    <div className="Skills-subcontainer">
      <h2 className="text-color2">{tS(title)}</h2>
      <ul className="skill-list">
        {skills.map(({defaultIcon, onHoverIcon}, index) => (
          <Skill
            key={`skill-${title}-${index}`}
            defaultIcon={defaultIcon}
            onHoverIcon={onHoverIcon} />
        ))}
      </ul>
    </div>
  );
}

export default SkillGroup;