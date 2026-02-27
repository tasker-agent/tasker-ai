// Configuration management
// Stores and retrieves CLI configuration from ~/.tasker/

import { homedir } from 'os';
import { join } from 'path';

const CONFIG_DIR = join(homedir(), '.tasker');

export const getConfigPath = () => CONFIG_DIR;

export const getSessionPath = () => join(CONFIG_DIR, 'session');

export const getConfigFilePath = () => join(CONFIG_DIR, 'config.json');

export default {
  getConfigPath,
  getSessionPath,
  getConfigFilePath
};
