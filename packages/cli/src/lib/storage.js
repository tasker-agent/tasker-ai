// Local storage for CLI
// Stores session tokens, config, and cache

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { dirname } from 'path';

export const read = (filePath) => {
  try {
    return JSON.parse(readFileSync(filePath, 'utf8'));
  } catch (error) {
    return null;
  }
};

export const write = (filePath, data) => {
  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
};

export const remove = (filePath) => {
  try {
    unlinkSync(filePath);
  } catch (error) {
    // File doesn't exist, ignore
  }
};

export default {
  read,
  write,
  remove
};
