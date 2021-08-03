
const inputAgeCat= document.getElementById('ageCatInput')
const textAgeDiv = document.getElementById('totalAgeCatText')
const catHumanYears = (catYears) => {
    if (catYears === 1) {
        return catYears + 14;
    } else if (catYears === 2) {
        return catYears + 22
    } else if (catYears > 2) {
        return (catYears* 4) + 16;
    };
}
inputAgeCat.addEventListener('keyup', (event) => {
    console.log('HERE', inputAgeCat.value)
    const ageCat = Number(inputAgeCat.value);
    let totalAge = catHumanYears(ageCat)
    if (typeof totalAge === 'undefined') {
        totalAge = ''
    }
    textAgeDiv.innerText = `${totalAge}` ;
    console.log('TOTAL AGE',totalAge)
})

