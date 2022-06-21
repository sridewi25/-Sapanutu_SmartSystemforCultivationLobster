var config = {
 apiKey: "AIzaSyCz-puOUyzg0gkVlgb_eRNLMJQMNd75tBA",
  authDomain: "hujan-384e4.firebaseapp.com",
  databaseURL: "https://hujan-384e4.firebaseio.com",
  projectId: "hujan-384e4",
  storageBucket: "hujan-384e4.appspot.com",
  messagingSenderId: "343494290614"
};
firebase.initializeApp(config);

//Reference for form collection(3)
let formMessage = firebase.database().ref('register');

//listen for submit event//(1)
document
  .getElementById('registrationform')
  .addEventListener('submit', formSubmit);

//Submit form(1.2)
function formSubmit(e) {
  e.preventDefault();
  // Get Values from the DOM
  let name = document.querySelector('#name').value;
  let password = document.querySelector('#password').value;
  let email = document.querySelector('#email').value;
  //send message values
  sendMessage(name, password, email);

  //Show Alert Message(5)
  document.querySelector('.alert').style.display = 'block';

  //Hide Alert Message After Seven Seconds(6)
  setTimeout(function() {
    document.querySelector('.alert').style.display = 'none';
  }, 7000);

  //Form Reset After Submission(7)
  document.getElementById('registrationform').reset();
}

//Send Message to Firebase(4)

function sendMessage(name, password, email) {
  let newFormMessage = formMessage.push();
  newFormMessage.set({
    name: name,
    password: password,
    email: email
  });
}