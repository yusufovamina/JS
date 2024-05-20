document.getElementById('checkForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

document.getElementById('number').addEventListener('input', function() {
    validateNumber();
});

document.getElementById('name').addEventListener('input', function() {
    validateName();
});

function validateForm() {
    let numberValid = validateNumber();
    let nameValid = validateName();

    if (numberValid && nameValid) {
        alert('Форма успешно отправлена!');
    }
}

function validateNumber() {
    let numberInput = document.getElementById('number');
    let numberError = document.getElementById('numberError');
    let numberValue = numberInput.value;
    let numberPattern = /^\d{2}[A-Z]{2}\d{3}$/;

    if (numberPattern.test(numberValue)) {
        numberError.style.display = 'none';
        return true;
    } else {
        numberError.textContent = 'Неправильный формат номера. Формат: 2 цифры кода, 2 буквы серии, 3 цифры номера.';
        numberError.style.display = 'block';
        return false;
    }
}

function validateName() {
    let nameInput = document.getElementById('name');
    let nameError = document.getElementById('nameError');
    let nameValue = nameInput.value;

    if (nameValue.length > 0 && nameValue[0] === nameValue[0].toUpperCase()) {
        nameError.style.display = 'none';
        return true;
    } else {
        nameError.textContent = 'Первая буква должна быть заглавной.';
        nameError.style.display = 'block';
        return false;
    }
}
