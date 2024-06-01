function downloadResume() {
    const link = document.createElement('a');
    link.href = './sridhar_resume.pdf'; 
    link.download = 'Sridhar_Resume.pdf';
    link.click();
}