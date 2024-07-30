document.addEventListener('DOMContentLoaded', () => {
    // Form Validation
    const form = document.querySelector('.f');
    const inputs = form.querySelectorAll('input');
    const submitButton = form.querySelector('button');

    submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        let valid = true;

        inputs.forEach(input => {
            if (input.value === '') {
                valid = false;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '';
            }
        });

        if (valid) {
            alert('Form submitted successfully!');
            form.reset(); // Clear form fields
        } else {
            alert('Please fill out all fields.');
        }
    });

    // Fare Estimation
    const pickupLocationInput = document.getElementById('pickupLocation');
    const destinationInput = document.getElementById('destination');
    const estimateFareButton = document.getElementById('estimateFare');
    const fareResult = document.getElementById('fareResult');

    estimateFareButton.addEventListener('click', () => {
        const pickupLocation = pickupLocationInput.value;
        const destination = destinationInput.value;

        if (pickupLocation && destination) {
            // Here you can implement actual fare calculation logic or use a mock estimate
            const fareEstimate = calculateFare(pickupLocation, destination);
            fareResult.textContent = `Estimated fare from ${pickupLocation} to ${destination} is ${fareEstimate} INR`;
        } else {
            fareResult.textContent = 'Please enter both pickup location and destination.';
        }
    });

    function calculateFare(pickup, destination) {
        // Mock calculation for demonstration purposes
        // In a real application, you might use a formula or API to get this data
        const fareInUSD = (Math.random() * 20 + 10).toFixed(2); // Random fare between $10 and $30
        const conversionRate = 83; // 1 USD = 83 INR (approximate)
        const fareInINR = (fareInUSD * conversionRate).toFixed(2);
        return fareInINR;
    }

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Update button color on hover
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = 'lightgreen';
        });
        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = 'darkgreen';
        });
    });
});
