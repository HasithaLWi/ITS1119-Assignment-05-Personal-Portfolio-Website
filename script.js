
document.addEventListener('DOMContentLoaded', () => {

  const allSections = document.querySelectorAll('.visited-section');

  if (allSections.length === 0) return;

  const handleIntersection = (entries) => {

    entries.forEach(entry => {
      const element = entry.target;

      if (entry.isIntersecting) {
        element.classList.add('is-visible');

      } else {
        element.classList.remove('is-visible');
      }
    });
  };

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver(handleIntersection, observerOptions);

  for (const section of allSections) {
    observer.observe(section);
  }

});

console.log('Script loaded successfully');
console.log('All sections:', document.querySelectorAll('.visited-section'));


// how to navigate another webside in new tab

// 1. using href
// 2. using window.open
// 3. using window.location

function openNewTab(url) {
  window.open(url, '_blank');
}

// i want to open pdf file to download in current tab not new tab
//no i want full screen view of pdf file in current tab and i want to download pdf file when click

// for download the file 
// download pdf file function in current tab 


// for open the file in new tab

// open pdf file function in new tab
function openCVInNewTab() {
  window.open('assets/Hasitha Wijesinghe CV-26-01.pdf', '_blank');
  // document.title = "Hasitha Wijesinghe CV";
}

function validateContactForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  if (name === '' || email === '' || message === '') {
    alert('Please fill all the fields');
    return false;
  } else if (name.length < 3) {
    alert('Name must be at least 3 characters long');
    return false;
  } else if (!email.includes('@')) {
    alert('Invalid email');
    return false;
  } else {
    return true;
  }
}

function validateEmail(email) {
  const emailRegex = /[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function sendEmail() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  if (validateContactForm()) {
    const serviceID = "....";
    const templateID = "template_tomvhrs";

    emailjs.send(serviceID, templateID, {
      from_name: name,
      from_email: email,
      to_name: "Hasitha",
      message: message,
      title: name + " from " + email,
    })
      .then(() => {
        alert("Email sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  }
}




