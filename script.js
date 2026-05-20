document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('camp-registration-form');
  const message = document.getElementById('formMessage');

  if (!form || !message) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const youthName = document.getElementById('youthName').value.trim();
    const shirtSize = document.getElementById('shirtSize').value;

    message.textContent = `${youthName} has been registered and marked as committed to attend camp and pay the $10 fee. T-shirt size: ${shirtSize}.`;

    form.reset();
  });
});
