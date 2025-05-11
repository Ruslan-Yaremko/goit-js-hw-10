import iziToast from "izitoast"; // Імпортуємо бібліотеку iziToast
import "izitoast/dist/css/iziToast.min.css"; // Імпортуємо стилі iziToast

// Отримуємо форму
const form = document.querySelector('.form');

// Обробка сабміту форми
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Запобігаємо стандартній поведінці форми

  // Отримуємо значення з форми
  const delayInput = form.querySelector('input[name="delay"]').value;
  const stateInput = form.querySelector('input[name="state"]:checked').value;

  // Перетворюємо значення затримки в число
  const delay = parseInt(delayInput, 10);

  // Створюємо проміс
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (stateInput === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  // Обробка промісу
  promise
    .then((delay) => {
      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    })
    .catch((delay) => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`,
      });
    });

  // Очищаємо інпут після відправки
  form.querySelector('input[name="delay"]').value = '';
});
