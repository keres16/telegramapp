// Проверяем, что код выполняется в Telegram Web App
if (window.Telegram && window.Telegram.WebApp) {
    const tg = window.Telegram.WebApp;
  
    // Инициализация приложения
    tg.ready();
  
    // Элементы DOM
    const counterElement = document.getElementById('counter');
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');
  
    let counter = 0;
  
    // Обработчики кнопок
    incrementButton.addEventListener('click', () => {
      counter++;
      updateCounter();
    });
  
    decrementButton.addEventListener('click', () => {
      counter--;
      updateCounter();
    });
  
    // Функция обновления счетчика
    function updateCounter() {
      counterElement.textContent = counter;
      tg.MainButton.text = `Сохранить ${counter}`;
      tg.MainButton.show();
    }
  
    // Настройка MainButton (кнопки внизу экрана)
    tg.MainButton.onClick(() => {
      tg.sendData(JSON.stringify({ action: 'save', value: counter }));
    });
  } else {
    alert('Это приложение работает только внутри Telegram!');
  }