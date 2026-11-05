// Grab references to all the input and output elements from your HTML
const epsilonInput = document.getElementById('epsilon');
const deltaResult = document.getElementById('deltaResult');
const xSlider = document.getElementById('xValue');
const xDisplay = document.getElementById('display');
const fxResult = document.getElementById('fxResult');
const statusIndicator = document.getElementById('indicator');

function updateCalculator() {
    // 1. Get the epsilon value, fallback to 0.10 if invalid
    let epsilon = parseFloat(epsilonInput.value);
    if (isNaN(epsilon) || epsilon <= 0) epsilon = 0.10;

    // 2. Calculate delta (delta = epsilon / 2 for f(x) = 2x + 3 near c = 2)
    let delta = epsilon / 2;
    deltaResult.textContent = delta.toFixed(4);

    // 3. Get the current slider value for x
    let x = parseFloat(xSlider.value);
    xDisplay.textContent = x.toFixed(3);

    // 4. Calculate the function output: f(x) = 2x + 3
    let fx = 2 * x + 3;
    fxResult.textContent = fx.toFixed(3);

    // 5. Verify Pass/Fail condition: Is |f(x) - 7| <= epsilon?
    let targetOutput = 7.00;
    let error = Math.abs(fx - targetOutput);

    if (error <= epsilon) {
        statusIndicator.textContent = "PASS (Inside Quality Window)";
        statusIndicator.className = "status-pass";
    } else {
        statusIndicator.textContent = "FAIL (Outside Quality Window)";
        statusIndicator.className = "status-fail";
    }
}

// Listen for user changes on both the number input and the slider
epsilonInput.addEventListener('input', updateCalculator);
xSlider.addEventListener('input', updateCalculator);

// Run the function once on page load to initialize default values
updateCalculator();