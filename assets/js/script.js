let array_images = [
    {filename: "badebro_st_oeksoe.jpg", title: "Badebro ved ST. Øksø"},
    {filename: "bjerg_trekking.jpg", title: "Bjerg trækning"},
    {filename: "istralandia.jpg", title: "Istralandia"},
    {filename: "ishav_lgstr.jpg", title: "Frossen havvand ved Løgstør"},
    {filename: "hav_agaeteÔü®.jpg", title: "Stort hav"}
];

for(let image of array_images) {
    let img = document.createElement('img');
    img.src = `../assets/images/${image.filename}`; 
    document.getElementById('gallery').appendChild(img)
    img.title = image.title;
}


