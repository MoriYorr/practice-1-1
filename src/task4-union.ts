// Тип валюты — только три варианта
export type Currency = "RUB" | "USD" | "EUR";

// Курсы конвертации (упрощенно, относительно RUB):
// 1 USD = 90 RUB
// 1 EUR = 100 RUB

export function convert(amount: number, from: Currency, to: Currency): number {
  // Напишите код здесь
  // Алгоритм:
  // 1. Если from === to, вернуть amount
  // 2. Иначе конвертировать from -> RUB, потом RUB -> to
  if (from === to) {
        return amount;
    }

    // Сначала переводим в RUB
    let amountInRub: number;

    if (from === "USD") {
        amountInRub = amount * 90;
    } else if (from === "EUR") {
        amountInRub = amount * 100;
    } else {
        amountInRub = amount;
    }

    // Затем из RUB переводим в нужную валюту
    if (to === "USD") {
        return amountInRub / 90;
    }

    if (to === "EUR") {
        return amountInRub / 100;
    }

    return amountInRub;
}

export function formatCurrency(amount: number, currency: Currency): string {
  // Вернуть строку вида "100 RUB" или "50.5 USD"
  // Напишите код здесь
  return amount + " " + String(currency)
}