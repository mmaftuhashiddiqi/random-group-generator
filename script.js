const inputName = document.getElementById('input-name');
const groupCount2 = document.querySelector('.group-count-2');
const groupCount3 = document.querySelector('.group-count-3');
const groupCount4 = document.querySelector('.group-count-4');
const groupCount5 = document.querySelector('.group-count-5');
const groupCount6 = document.querySelector('.group-count-6');
const groupCount7 = document.querySelector('.group-count-7');
const groupCountCustom = document.querySelector('.group-count-custom');
const generateButton = document.querySelector('.generate');
const groupResults = document.querySelector('.group-results');


let groupCount;
groupCount2.addEventListener('click', function() {
    groupCount = 2;
    groupCountCustom.value = '';
    groupCount2.classList.add('button-visited');
    groupCount3.classList.remove('button-visited');
    groupCount4.classList.remove('button-visited');
    groupCount5.classList.remove('button-visited');
    groupCount6.classList.remove('button-visited');
    groupCount7.classList.remove('button-visited');
    groupCountCustom.classList.remove('input-visited');
});
groupCount3.addEventListener('click', function() {
    groupCount = 3;
    groupCountCustom.value = '';
    groupCount3.classList.add('button-visited');
    groupCount2.classList.remove('button-visited');
    groupCount4.classList.remove('button-visited');
    groupCount5.classList.remove('button-visited');
    groupCount6.classList.remove('button-visited');
    groupCount7.classList.remove('button-visited');
    groupCountCustom.classList.remove('input-visited');
});
groupCount4.addEventListener('click', function() {
    groupCount = 4;
    groupCountCustom.value = '';
    groupCount4.classList.add('button-visited');
    groupCount2.classList.remove('button-visited');
    groupCount3.classList.remove('button-visited');
    groupCount5.classList.remove('button-visited');
    groupCount6.classList.remove('button-visited');
    groupCount7.classList.remove('button-visited');
    groupCountCustom.classList.remove('input-visited');
});
groupCount5.addEventListener('click', function() {
    groupCount = 5;
    groupCountCustom.value = '';
    groupCount5.classList.add('button-visited');
    groupCount2.classList.remove('button-visited');
    groupCount3.classList.remove('button-visited');
    groupCount4.classList.remove('button-visited');
    groupCount6.classList.remove('button-visited');
    groupCount7.classList.remove('button-visited');
    groupCountCustom.classList.remove('input-visited');
});
groupCount6.addEventListener('click', function() {
    groupCount = 6;
    groupCountCustom.value = '';
    groupCount6.classList.add('button-visited');
    groupCount2.classList.remove('button-visited');
    groupCount3.classList.remove('button-visited');
    groupCount4.classList.remove('button-visited');
    groupCount5.classList.remove('button-visited');
    groupCount7.classList.remove('button-visited');
    groupCountCustom.classList.remove('input-visited');
});
groupCount7.addEventListener('click', function() {
    groupCount = 7;
    groupCountCustom.value = '';
    groupCount7.classList.add('button-visited');
    groupCount2.classList.remove('button-visited');
    groupCount3.classList.remove('button-visited');
    groupCount4.classList.remove('button-visited');
    groupCount5.classList.remove('button-visited');
    groupCount6.classList.remove('button-visited');
    groupCountCustom.classList.remove('input-visited');
});
groupCountCustom.addEventListener('input', function() {
    groupCount = parseInt(groupCountCustom.value);
    groupCountCustom.classList.add('input-visited');
    groupCount2.classList.remove('button-visited');
    groupCount3.classList.remove('button-visited');
    groupCount4.classList.remove('button-visited');
    groupCount5.classList.remove('button-visited');
    groupCount6.classList.remove('button-visited');
    groupCount7.classList.remove('button-visited');
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