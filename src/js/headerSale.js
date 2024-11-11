// Функция для добавления повторяющихся "SALE"
function generateSales(count) {
  const saleContainer = document.getElementById('sale');

  for (let i = 0; i < count; i++) {
    const saleBlock = document.createElement('p');
    saleBlock.classList.add('sale-block');

    // Создаём и добавляем 32 <span> с текстом "SALE" в каждый блок
    Array.from({ length: 32 }).forEach(() => {
      const span = document.createElement('span');
      span.textContent = '-99% ';
      saleBlock.appendChild(span);
    });

    saleContainer.appendChild(saleBlock);
  }
}

// Генерируем 2 блока, каждый с 32 <span>
generateSales(2);
