const transactionData2 = {
  Транспорт: {
    total: 4000,
    СТО: 10000,
    Мойка: 1500,
    Полировка: 550,
    Шины: 2000,
    Диски: 9000,
    Форсунки: 4600,
    Колодки: 1400,
    Амортизаторы: 2200,
    Зеркало: 1100,
    Масло: 560,
  },
};

export const nestedValues = Object.values(transactionData2)[0];
console.log("🚀 ~ nestedValues:", nestedValues);
