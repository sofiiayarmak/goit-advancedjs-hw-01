let formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

populateForm();

form.addEventListener('input', event => {
  const { name, value } = event.target;

  formData[name] = value.trim();

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});
