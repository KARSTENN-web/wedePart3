document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('.form');

  forms.forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();

      const inputs = form.querySelectorAll('input, textarea, select');
      let valid = true;
      let errors = [];

      inputs.forEach(input => {
        const value = input.value.trim();
        const label = input.getAttribute('data-label') || input.name || input.id || 'field';

        // Check required fields
        if (input.hasAttribute('required') && !value) {
          valid = false;
          errors.push(`Please fill in the ${label}.`);
        }

        // Check email format
        if (input.type === 'email' && value) {
          const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
          if (!emailPattern.test(value)) {
            valid = false;
            errors.push('Please enter a valid email address.');
          }
        }

        // Check phone format
        if (input.type === 'tel' && value) {
          const phonePattern = /^\+?\d{7,15}$/;
          if (!phonePattern.test(value)) {
            valid = false;
            errors.push('Please enter a valid phone number.');
          }
        }
      });

      if (!valid) {
        alert(errors.join('\n'));
      } else {
        alert('Thank you! Your form has been submitted successfully.');
        form.reset();
      }
    });
  });

  // Add to Cart button alert
  document.querySelectorAll('.add-cart').forEach(button => {
    button.addEventListener('click', () => {
      const product = button.closest('.product').querySelector('h3')?.textContent || 'Product';
      alert(`${product} has been added to your cart!`);
    });
  });
});
