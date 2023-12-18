function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const resultElement = document.getElementById('result');

    if (weight !== '' && height !== '') {
        const bmi = weight / ((height / 100) ** 2);
        const bmiCategory = getBMICategory(bmi);

        resultElement.innerHTML = `<p>Your BMI is: ${bmi.toFixed(2)}</p><p class="${bmiCategory.className}">${bmiCategory.message}</p>`;
    } else {
        resultElement.innerHTML = 'Please enter valid weight and height.';
        resultElement.className = '';
    }
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return { message: 'You are underweight.', className: 'underweight' };
    } else if (bmi >= 18.5 && bmi < 25) {
        return { message: 'You have a normal weight.', className: 'normal' };
    } else if (bmi >= 25 && bmi < 30) {
        return { message: 'You are overweight.', className: 'overweight' };
    } else {
        return { message: 'You are obese. Please consult a doctor.', className: 'obese' };
    }
}
