const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
	e.preventDefault();
window.location.href = "index.html";
auth.signOut().then(() => {
		console.log('user signed out');

});
});