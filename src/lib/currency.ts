/**
 * Format a number as Nigerian Naira currency
 * @param amount - The amount to format
 * @param options - Formatting options
 * @returns Formatted currency string
 */
export function formatNaira(
  amount: number,
  options: {
    showSymbol?: boolean;
    showDecimals?: boolean;
    compact?: boolean;
  } = {}
): string {
  const { showSymbol = true, showDecimals = false, compact = false } = options;

  const formatter = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: showDecimals ? 2 : 0,
    maximumFractionDigits: showDecimals ? 2 : 0,
    notation: compact ? 'compact' : 'standard',
  });

  let formatted = formatter.format(amount);

  // If we don't want the symbol, remove it
  if (!showSymbol) {
    formatted = formatted.replace('₦', '').trim();
  }

  return formatted;
}

/**
 * Format a number as Nigerian Naira without the currency symbol
 * @param amount - The amount to format
 * @returns Formatted number string
 */
export function formatNairaAmount(amount: number): string {
  return formatNaira(amount, { showSymbol: false });
}

/**
 * Format a number as Nigerian Naira with the currency symbol
 * @param amount - The amount to format
 * @returns Formatted currency string
 */
export function formatNairaCurrency(amount: number): string {
  return formatNaira(amount, { showSymbol: true });
} 