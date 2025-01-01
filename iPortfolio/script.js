function downloadResume() {
    const link = document.createElement('a');
    link.href = './sridhar_resume.pdf'; 
    link.download = 'Sridhar_Resume.pdf';
    link.click();
}

const form = document.querySelector('.inputForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData.entries());

    try {
        const response = await fetch('https://sridhars-webapp-restapi-postgres-v2.onrender.com', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formObject),
        });

        const result = await response.json();
        if (response.ok) {
            alert(result.message);
        } else {
            alert('Error: ' + result.message);
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        alert('An error occurred while submitting the form.');
    }
});
