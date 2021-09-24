/**
 * Assuming you only need the formula to get the percentage of an amount just add the values of the following formula to the parameters
 * @param porcent porcent
 * @param amount amount
 * @param divider
 * @returns {object}
 */
export function ruleOfThree(
  porcent: number,
  amount: number,
  divider: number = 100
): { result: number; porcent: number; amount: number } {
  if (!porcent || porcent <= 0 || !amount || amount <= 0) {
    throw new Error(`wrong parameters: ${amount} ${porcent}`);
  }

  const result = (porcent / divider) * amount;
  return { result, porcent, amount };
}

function Rule(porcent: number, amount: number, divider: number = 100) {
  return ruleOfThree(porcent, amount, (divider = 100));
}

module.exports = Rule;
