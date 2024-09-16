/*const allStar = document.querySelectorAll('.rating .star')
const ratingValue = document.querySelector('.rating input')

allStar.forEach((item, idx)=> {
	item.addEventListener('click', function () {
		let click = 0
		ratingValue.value = idx + 1

		allStar.forEach(i=> {
			i.classList.replace('bxs-star', 'bx-star')
			i.classList.remove('active')
		})
		for(let i=0; i<allStar.length; i++) {
			if(i <= idx) {
				allStar[i].classList.replace('bx-star', 'bxs-star')
				allStar[i].classList.add('active')
			} else {
				allStar[i].style.setProperty('--i', click)
				click++
			}
		}
	})
})*/

// Get a reference to the feedback form
const feedbackForm = document.getElementById('feedbackForm');

// Add submit event listener to the form
feedbackForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from submitting normally

    // Get the feedback data from the form
    const rating = document.querySelector('.rating input[name="rating"]').value;
    const opinion = document.querySelector('textarea[name="opinion"]').value;

    // Save the feedback data to Firestore
    firebase.firestore().collection('feedback').add({
        rating: rating,
        opinion: opinion,
        timestamp: firebase.firestore.FieldValue.serverTimestamp() // Optionally, you can include a timestamp
    })
    .then(() => {
        console.log('Feedback submitted successfully!');
        // Optionally, you can display a success message or redirect the user to a thank you page
    })
    .catch((error) => {
        console.error('Error submitting feedback:', error);
        // Optionally, you can display an error message to the user
    });
});
