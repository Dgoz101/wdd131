function createForm() {
  const form = document.createElement('form');
  form.id = 'catForm';


  const firstNameInput = document.createElement('input');
  firstNameInput.type = 'text';
  firstNameInput.id = 'firstName';
  firstNameInput.placeholder = 'First Name';
  form.appendChild(firstNameInput);


  const lastNameInput = document.createElement('input');
  lastNameInput.type = 'text';
  lastNameInput.id = 'lastName';
  lastNameInput.placeholder = 'Last Name';
  form.appendChild(lastNameInput);


  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.id = 'email';
  emailInput.placeholder = 'Your Email';
  form.appendChild(emailInput);


  const catNameInput = document.createElement('input');
  catNameInput.type = 'text';
  catNameInput.id = 'catName';
  catNameInput.placeholder = "Cat's Name";
  form.appendChild(catNameInput);


  const genderSelect = document.createElement('select');
  genderSelect.id = 'gender';

  const selectOption = document.createElement('option');
  selectOption.value = "";
  selectOption.text = "Select";
  genderSelect.appendChild(selectOption);

  const maleOption = document.createElement('option');
  maleOption.value = 'male';
  maleOption.text = 'Male';
  genderSelect.appendChild(maleOption);

  const femaleOption = document.createElement('option');
  femaleOption.value = 'female';
  femaleOption.text = 'Female';
  genderSelect.appendChild(femaleOption);

  form.appendChild(genderSelect);


  const adoptionTypeSelect = document.createElement('select');
  adoptionTypeSelect.id = 'adoptionType';

  const selectOption2 = document.createElement('option');
  selectOption2.value = "";
  selectOption2.text = "Select";
  adoptionTypeSelect.appendChild(selectOption2);

  const adoptOption = document.createElement('option');
  adoptOption.value = 'adopt';
  adoptOption.text = 'Adopt';
  adoptionTypeSelect.appendChild(adoptOption);

  const putUpOption = document.createElement('option');
  putUpOption.value = 'putUp';
  putUpOption.text = 'Put Up for Adoption';
  adoptionTypeSelect.appendChild(putUpOption);

  form.appendChild(adoptionTypeSelect);


  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Submit';
  form.appendChild(submitButton);

  return form;
}


const formSection = document.querySelector('.form'); 
formSection.appendChild(createForm());


const catForm = document.getElementById('catForm');
catForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const catName = document.getElementById('catName').value;
  const gender = document.getElementById('gender').value;
  const adoptionType = document.getElementById('adoptionType').value;

  let hasErrors = false;


  if (firstName === '') {
    alert('Please enter your first name.');
    hasErrors = true;
  }

  if (lastName === '') {
    alert('Please enter your last name.');
    hasErrors = true;
  }

  if (email === '') {
    alert('Please enter your email address.');
    hasErrors = true;
  }

  if (catName === '') {
    alert('Please enter the cat\'s name.');
    hasErrors = true;
  }

  if (gender === '') {
    alert('Please select a gender.');
    hasErrors = true;
  }

  if (adoptionType === '') {
    alert('Please select an adoption type.');
    hasErrors = true;
  }


  if (!hasErrors) {
    alert('Form submitted successfully!'); 
  }
});