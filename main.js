var keys = document.querySelectorAll('.key');

for(i=0; i < keys.length; i++) {
    keys[i].addEventListener('click', function() {
        var input = document.querySelector('.inputView');
        var inputValue = input.innerHTML;
        var keyValue = this.innerHTML;

        if(keyValue == 'C') {
            input.innerHTML = '';
        } else if (keyValue == '=') {
            var equation = inputValue;
            equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
            input.innerHTML = eval(equation);
        } else {
            input.innerHTML += keyValue;
        }
    });
}