const input = document.querySelector('#favchap');
const btn = document.querySelector('button');
const list = document.querySelector('#list');

btn.addEventListener('click', function () { 
    if (list.children.length < 10) {
        if (input.value.trim() !== '') {
            const li = document.createElement('li');
            li.textContent = input.value;
            deleteBtn = document.createElement('button');
            deleteBtn.textContent = '❌';
            deleteBtn.addEventListener('click', function () {
                list.removeChild(li)
                input.focus();
            });
            li.appendChild(deleteBtn);
            list.appendChild(li);
            input.value = '';
        } 
    }
    else {
        alert('You can only have ten books in the list.')
    }
    input.focus();
});