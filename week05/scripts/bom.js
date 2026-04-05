const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

button.addEventListener('click', function () { 
    if (list.children.length < 10) {
        if (input.value.trim() !== '') {
            const li = document.createElement('li');
            li.textContent = input.value;
            deleteButton = document.createElement('button');
            deleteButton.textContent = '❌';
            deleteButton.addEventListener('click', function () {
                list.removeChild(li)
                input.focus();
            });
            li.appendChild(deleteButton);
            list.appendChild(li);
            input.value = '';
        } 
    }
    else {
        alert('You can only have ten books in the list.')
    }
    input.focus();
});

chaptersArray.forEach(chapter => {
    
    displayList(chapter);
});

button.addEventListener("click", () => {
    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setCharpterList();
        input.value = '';
        input.focus();
    }
});

function displayList(item) {
    let li = document.createElement('li');
   
    let deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener("click", function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
    console.log('I like to copy the code instead of typing it out myself and trying to understand it.');
}

function setCharpterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setCharpterList();
}