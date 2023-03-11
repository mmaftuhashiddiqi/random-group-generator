const inputName = document.getElementById('input-name');
const groupCountElement = document.querySelectorAll('.group-count-element')
const generateButton = document.querySelector('.generate');
const groupResults = document.querySelector('.group-results');


let groupCount;

groupCountElement[0].addEventListener('click', function() {
    groupCount = 2;
    groupCountElement[6].value = '';
    for (let i = 0; i < groupCountElement.length; i++) {
        groupCountElement[i].classList.remove('group-count-visited');
    }
    groupCountElement[0].classList.add('group-count-visited');
});

groupCountElement[1].addEventListener('click', function() {
    groupCount = 3;
    groupCountElement[6].value = '';
    for (let i = 0; i < groupCountElement.length; i++) {
        groupCountElement[i].classList.remove('group-count-visited');
    }
    groupCountElement[1].classList.add('group-count-visited');
});

groupCountElement[2].addEventListener('click', function() {
    groupCount = 4;
    groupCountElement[6].value = '';
    for (let i = 0; i < groupCountElement.length; i++) {
        groupCountElement[i].classList.remove('group-count-visited');
    }
    groupCountElement[2].classList.add('group-count-visited');
});

groupCountElement[3].addEventListener('click', function() {
    groupCount = 5;
    groupCountElement[6].value = '';
    for (let i = 0; i < groupCountElement.length; i++) {
        groupCountElement[i].classList.remove('group-count-visited');
    }
    groupCountElement[3].classList.add('group-count-visited');
});

groupCountElement[4].addEventListener('click', function() {
    groupCount = 6;
    groupCountElement[6].value = '';
    for (let i = 0; i < groupCountElement.length; i++) {
        groupCountElement[i].classList.remove('group-count-visited');
    }
    groupCountElement[4].classList.add('group-count-visited');
});

groupCountElement[5].addEventListener('click', function() {
    groupCount = 7;
    groupCountElement[6].value = '';
    for (let i = 0; i < groupCountElement.length; i++) {
        groupCountElement[i].classList.remove('group-count-visited');
    }
    groupCountElement[5].classList.add('group-count-visited');
});

groupCountElement[6].addEventListener('click', function() {
    for (let i = 0; i < groupCountElement.length; i++) {
        groupCountElement[i].classList.remove('group-count-visited');
    }
    groupCountElement[6].classList.add('group-count-visited');
})

groupCountElement[6].addEventListener('input', function() {
    groupCount = parseInt(groupCountElement[6].value);
});


generateButton.addEventListener('click', function() {
    groupResults.innerHTML = '';

    const members = inputName.value.split('\n');
    const randomMembers = members.sort(() => Math.random() - 0.5);

    if (groupCount < 0) {
        groupCount = 0;
    }

    if (groupCount > randomMembers.length) {
        groupCount = randomMembers.length;
    }
    
    if (randomMembers.length === 1 && randomMembers[0] === "") {
        groupCount = undefined;
    }

    const part = (a, n) => {
        const b = Math.max(a.length / n);
        return [...Array(n)].map((_, i) => a.slice(i * b, (i + 1) * b));
    };
    const resultMembers = part(randomMembers, groupCount);

    for (let i = 0; i < groupCount; i++) {
        groupResults.insertAdjacentHTML(`beforeend`, `
        <div class="group-container">
            <table class="group">
                <thead>
                    <tr>
                        <th>Group ${i+1}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            ${resultMembers[i].map(member => `<li>${member}</li>`).join('')}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>`);
    }
});