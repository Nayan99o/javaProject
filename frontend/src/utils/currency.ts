/**
 * Formats amounts as Indian Rupees using Indian digit grouping.
 * Example: formatINR(1200) -> ₹1,200.00
 */
export const formatINR = (
  amount: number | string | null | undefined
): string => {
  const value = typeof amount === 'number' ? amount : Number(amount ?? 0);

  if (!Number.isFinite(value)) {
    return '₹0.00';
  }

  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};
