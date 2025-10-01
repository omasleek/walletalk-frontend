export const shortenAddress = (address) => {
  if (!address) return '';
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export const formatBalance = (balance) => {
  return parseFloat(balance).toFixed(4);
};

export const isValidAddress = (address) => {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
};

export const getENSName = async (address, provider) => {
  try {
    const ensName = await provider.lookupAddress(address);
    return ensName || shortenAddress(address);
  } catch {
    return shortenAddress(address);
  }
};