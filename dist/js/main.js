// Initialize Firebase
const config = {
  apiKey: 'AIzaSyAAmo_5vBgUqev10H0KPQQXxiv5d7xxtx0',
  authDomain: 'myportfoliocontactform.firebaseapp.com',
  databaseURL: 'https://myportfoliocontactform.firebaseio.com',
  projectId: 'myportfoliocontactform',
  storageBucket: 'myportfoliocontactform.appspot.com',
  messagingSenderId: '1078434481705',
};
firebase.initializeApp(config);
// Get a refrence to the messages collection
const messagesRef = firebase.database().ref('messages');

// Listen for form submit
const submitForm = (e) => {
  e.preventDefault();
  // Get Values
  const name = getInputValue('name');
  const email = getInputValue('email');
  const subject = getInputValue('subject');
  const message = getInputValue('message');

  // save message
  saveMessage(name, email, subject, message);
};

document.getElementById('contact-form').addEventListener('submit', submitForm);

// get values from the form
const getInputValue = id => document.getElementById(id).value;

// Save messages to Firebase
const saveMessage = (name, email, subject, message) => {
  const newMessageRef = messagesRef.push();
  newMessageRef.set(({
    name,
    email,
    subject,
    message,
  }));

  // show modal
  // using Sweet Alert library
  swal("Thank you!", "Your message has been sent successfully.", "success");
  // document.getElementById('modal').style.display = 'block';
  
  // reseting the form
  document.querySelector('.form').reset();

  // hide modal
  // setTimeout(() => {
  //   document.getElementById('modal').style.display = 'none';
  // }, 5000);
};

// Uncheck the checkbox for showing the specific page 
// after click on the related button(return to the first state of checkbox)
const checkbox = document.getElementById('navi-toggle');
const btnLink = document.querySelectorAll('.navigation-link');
const unCheck = () => checkbox.checked = false;

btnLink.forEach(btn => (
  btn.addEventListener('click', unCheck)
));
