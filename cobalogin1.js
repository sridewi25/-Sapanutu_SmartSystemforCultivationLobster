const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const email = loginForm['login-email'].value;
	const password = loginForm['login-password'].value;
	auth.signInWithEmailAndPassword(email, password).then(cred => {
		console.log(cred.user);	
		window.location.href = "setelahlogin1.html";

		const modal = document.querySelector('#modal-login');
		M.Modal.getInstance(modal).close();
		loginForm.reset();
	}); 
});
