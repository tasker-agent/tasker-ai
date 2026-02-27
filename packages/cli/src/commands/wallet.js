// Wallet command handlers

export const info = async () => {
  console.log('Fetching wallet info...');
  // API call would go here
};

export const transactions = async (options = {}) => {
  console.log('Fetching wallet transactions...');
  // API call would go here
};

export default {
  info,
  transactions
};
