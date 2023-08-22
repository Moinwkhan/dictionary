apiurl = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

let btn = document.getElementById('btn')
let output = document.getElementById('output1')
let input = document.getElementById('input')
let sound = document.getElementById('sound')

btn.addEventListener("click", () => {
    let input = document.getElementById('input').value;
    fetch(`${apiurl}${input}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            document.getElementById('output1').style.display = 'grid';
            output.innerHTML = `
        <p id="word">${input || "Sorry, I have no data"}</p>
    <p id="lang">${data[0].phonetic || ""}</p>
            <img id="play" onclick="playsound()" src="circle-play-solid.svg" alt="">
    <div id="info">
        <p>${data[0].meanings[0].partOfSpeech || ""}</p>
        <p><b>Meanings :</b></p>
        <p id="meaning1">
        ${data[0].meanings[0].definitions[0].definition}</p>
        <p id="meaning2">
        ${data[0].meanings[0].definitions[1].definition}</p>
        <p id="example"><b>Example :</b> ${data[0].meanings[0].definitions[0].example || data[0].meanings[0].definitions[1].example || `Sorry, I have no example on ${data[0].word}`}</p>
        <b>source : </b><a id="source" href="${data[0].sourceUrls}">${data[0].sourceUrls}</a>
        </div>`
            sound.setAttribute("src", `${data[0].phonetics[0].audio || data[0].phonetics[1].audio || data[0].phonetics[2].audio || data[0].phonetics[3].audio || data[0].phonetics[4].audio}`);
            input.value = ""
        })
})
function playsound() {
    sound.play();
}

function darkmode() {
    document.getElementById('output').style.backgroundColor = 'grey';
    document.getElementById('output1').style.backgroundColor = '#192734';
    document.getElementById('output1').style.color = 'white';
    document.getElementById('sound').style.backgroundColor = 'white';
    document.getElementById('body').style.backgroundColor = '#D1E0D9';
}
function lightmode() {
    document.getElementById('output').style.backgroundColor = '#E3164B';
    document.getElementById('output1').style.backgroundColor = 'burlywood';
    document.getElementById('output1').style.color = 'black';
    document.getElementById('body').style.backgroundColor = '#D9D1E0';
}
