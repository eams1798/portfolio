export type SkillIcon = JSX.Element;
export interface SkillComponent {
  defaultIcon: SkillIcon,
  onHoverIcon: SkillIcon
};
export interface SkillGroupType {
  groupName: string,
  skills: SkillComponent[]
}