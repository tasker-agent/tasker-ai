// Auth command handlers

export const login = async (email) => {
  if (!email) {
    throw new Error('Email is required');
  }
  console.log(`Logging in with: ${email}`);
  // API call would go here
};

export const getMe = async () => {
  console.log('Fetching current user...');
  // API call would go here
};

export const logout = async () => {
  console.log('Logging out...');
  // API call would go here
};

export default {
  login,
  getMe,
  logout
};
