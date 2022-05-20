let array_images = [ //Array med objekter indeni. 
    {filename: "badebro_st_oeksoe.jpg", title: "Badebro ved ST. Øksø"}, //title viser titlen på billedet når man hoover musen over det.
    {filename: "bjerg_trekking.jpg", title: "Bjerg trækning"},
    {filename: "istralandia.jpg", title: "Istralandia"},
    {filename: "ishav_lgstr.jpg", title: "Frossen havvand ved Løgstør"},
    {filename: "snefald_rold_skov.jpg", title: "Snefald i en skov"},
    {filename: "hav_agaeteÔü®.jpg", title: "Stort hav"}
];

const MODAL = document.getElementById('modal')
const CLOSE = document.querySelector('.close'); 
CLOSE.onclick = function() {closeModal()}
window.onclick = function(e) {
    if(e.target === MODAL){
        closeModal()   
    }
}


for(let image of array_images) {
    let figure = document.createElement('figure');
    let img = document.createElement('img');
    img.src = `../assets/images/${image.filename}`; 
    document.getElementById('gallery').appendChild(img)
    img.title = image.title;
    img.onclick = function() { //En funktion der skal kalde en anden funktion som kan kalde det her modal vindue.
        showModal(image)
    }
}

function showModal(objImage) {
    MODAL.children[0].style.backgroundImage = `url('../assets/images/${objImage.filename}')` //Children er en liste over de childes der lægger i modal.
    MODAL.style.display = 'block';
}

function closeModal() {
    MODAL.style.display = 'none'
}


