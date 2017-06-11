// Create an array of all the keys
var keys = document.querySelectorAll('.key');

for (i = 0; i < keys.length; i++) {
    // Add a click listener for whichever key is clicked
    keys[i].addEventListener('click', function () {
        // Create a variable for the input view
        var input = document.querySelector('.inputView');
        // Create a string of the text contained in the input view
        var inputValue = input.innerHTML;
        // Create a variable that gets the text contained in the key
        var keyValue = this.innerHTML;

        // First condition for the clear button to set the input to an empty string
        if (keyValue == 'C') {
            input.innerHTML = '';
        // Second condition for the evaluate button to trigger the eval method
        } else if (keyValue == '=') {
            var equation = inputValue;
            // Replace multiplication and division characters with their JS counterparts
            equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
            // Run the evaluation with the new string
            input.innerHTML = eval(equation);
        } else {
            // Append the clicked key's value to the end of the input string
            input.innerHTML += keyValue;
        }
    });
}