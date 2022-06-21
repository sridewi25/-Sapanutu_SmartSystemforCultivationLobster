const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const email = signupForm['signup-email'].value;
	const password = signupForm['signup-password'].value;

	auth.createUserWithEmailAndPassword(email, password).then(cred => {
		console.log(cred.user);
		window.location.href = "login.html";
		const modal = document.querySelector('#modal-signup');
		M.Modal.getInstance(modal).close();
		signupForm.reset();
	}); 
});

