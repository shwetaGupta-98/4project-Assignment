const steps = document.querySelectorAll('.step');
const nextBtn = document.getElementById('nextBtn');
let currentStep = 0;

nextBtn.addEventListener('click', () => {
  if (currentStep < steps.length - 1) {
    steps[currentStep].classList.remove('active');
    currentStep++;
    steps[currentStep].classList.add('active');
    alert(`Now on step ${currentStep + 1}`);
  } else {
    alert('Form submitted!');
  }
});
