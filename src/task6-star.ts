// Допустимые статусы заказа
export type OrderStatus = "new" | "processing" | "shipped" | "delivered" | "cancelled";

// Функция парсинга статуса из строки
// Если строка — допустимый статус, вернуть его
// Иначе вернуть null
export function parseStatus(raw: string): OrderStatus | null {
  // Напишите код здесь
}

// Функция проверки возможности перехода между статусами
// Разрешённые переходы:
//   new -> processing, cancelled
//   processing -> shipped, cancelled
//   shipped -> delivered
//   delivered -> (никуда)
//   cancelled -> (никуда)
export function canTransition(from: OrderStatus, to: OrderStatus): boolean {
  // Напишите код здесь
}

// Функция получения списка доступных следующих статусов
// Возвращает массив статусов, в которые можно перейти из текущего
export function getNextStatuses(current: OrderStatus): OrderStatus[] {
  // Напишите код здесь
}