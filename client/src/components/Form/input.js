let input = document.getElementById('entry');

input.oninput = () => {
    if (input.value.charAt(0) === ' ') {
        input.value = '';
    }
}
