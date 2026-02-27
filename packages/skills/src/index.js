// Tasker AI Skills - Main entry point
// 12 prebuilt agent skill definitions

import { SKILLS_DEFINITIONS } from './definitions.js';

export const getAllSkills = () => {
  return SKILLS_DEFINITIONS;
};

export const getSkill = (skillId) => {
  return SKILLS_DEFINITIONS.find(s => s.id === skillId);
};

export const getSkillById = (id) => {
  return getSkill(id);
};

export const getSkillsByTag = (tag) => {
  return SKILLS_DEFINITIONS.filter(s => s.tags && s.tags.includes(tag));
};

export default {
  getAllSkills,
  getSkill,
  getSkillById,
  getSkillsByTag,
  SKILLS_DEFINITIONS
};
