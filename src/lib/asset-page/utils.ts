export const formatUSD = (value: string) => {
  const numbersOnly = parseInt(value.replace(/[^\d]/g, ''));
  if (!numbersOnly) return '';
  return numbersOnly.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};
