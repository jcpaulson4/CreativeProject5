/* global localStorage */

let header1 = "Spirit Dragons";
let image1 = "/creativeproj1/Images/riot/spirit.jpg";
let text1 = "The Spirit Dragons of Runeterra are a ghostly group of dragons. They are connected to either the ethereal plane or to nature itself, and as such can manipulate those magics.";
let title1 = "https://leagueoflegends.fandom.com/wiki/Camavoran_Dragon_(Legends_of_Runeterra)";

let header2 = "Fire Dragons";
let image2 = "/creativeproj1/Images/riot/fire.jpg";
let text2 = "Perhaps the most common of the dragons to inhabit Runeterra, Fire Dragons manipulate fire magic and can spit hot fire and magma at any who make them angry or threaten their territory.";
let title2 = "https://leagueoflegends.fandom.com/wiki/Fused_Firebrand_(Legends_of_Runeterra)";

let header3 = "Water Dragons";
let image3 = "/creativeproj1/Images/riot/water.jpg";
let text3 = "Water Dragons are cool, usually friendly creatures. Beware to those who make them angry, for these dragons will use their water magic to carry interlopers away or drown them -- whichever suits the situtation best.";
let title3 = "https://leagueoflegends.fandom.com/wiki/Kai%27Sa/LoL/Cosmetics";

let header4 = "Earth Dragons";
let image4 = "/creativeproj1/Images/riot/earth.jpg";
let text4 = "Earth Dragons are strong, reliable creatures. They use their earth magic and obsidian-hard scales to protect their homes and crush any who threaten them.";
let title4 = "https://leagueoflegends.fandom.com/wiki/Mountain_Drake_(Legends_of_Runeterra)";

let header5 = "Air Dragons";
let image5 = "/creativeproj1/Images/riot/air.jpg";
let text5 = "Air Dragons are wily, clever dragons who manipulate air magic to fly in unusual patterns and to quickly dance around foes. If not careful, a person can be tossed high in the air and just dropped for making them angry.";
let title5 = "https://leagueoflegends.fandom.com/wiki/The_Empyrean_(Legends_of_Runeterra)";

let header6 = "Ice Dragons";
let image6 = "/creativeproj1/Images/riot/ice.jpg";
let text6 = "Ice Dragons are among the more sinsiter of the dragons. Sly and sneaky, these dragons hunt prey by freezing them in their tracks or shooting them with sharp icicles.";
let title6 = "https://leagueoflegends.fandom.com/wiki/Shyvana/LoL/Cosmetics";

let header7 = "Storm Dragons";
let image7 = "/creativeproj1/Images/riot/storm.jpg";
let text7 = "Storm Dragons use their lightning magic to create storms and zap enemies. Easy to anger and hard to calm down, it is wisest to avoid these dragons altogether.";
let title7 = "https://leagueoflegends.fandom.com/wiki/Ao_Shin_(Little_Legend)_(Teamfight_Tactics)";

let header8 = "Hextech Dragons";
let image8 = "/creativeproj1/Images/riot/hextech.jpg";
let text8 = "A wonder of Piltover engineering, these dragons were created to combat the neighboring enemy city, Zaun, and other potential threats. These dragons are machines that utilize hextech - a technology which combines spirit magic and elemental magic.";
let title8 = "https://leagueoflegends.fandom.com/wiki/Hextech_Drake";

let header9 = "Chemtech Dragons";
let image9 = "/creativeproj1/Images/riot/chemtech.jpg";
let text9 = "Nobody really knows who exactly created the first one, but everyone knows that whoever it was lives in Zaun. These dragons were once another type of dragon, but are now more machine and chemicals. They fight by using their powerful claws and by spewing chemicals at enemies.";
let title9 = "https://leagueoflegends.fandom.com/wiki/Chemtech_Drake";

let header10 = "Drakehounds";
let image10 = "/creativeproj1/Images/riot/drakehound.jpg";
let text10 = "Drakehounds are a type of pseudo-dragon -- related to dragons, and basically a dragon, but not quite a dragon. More like very powerful dogs than dragons, anyone rich and powerful to own a few consider themselves well guarded against the common thief or intruder.";
let title10 = "https://leagueoflegends.fandom.com/wiki/Drake-Hound";

let header11 = "Basilisks";
let image11 = "/creativeproj1/Images/riot/basilisk.jpg";
let text11 = "Basilisks are a type of pseduo-dragon -- related to dragons, and basically a dragon, but not quite a dragon. Basilisks are captured, bred, and trained by soldiers of Shurima to be vicious riding beasts that dessimate opposing armies.";
let title11 = "https://leagueoflegends.fandom.com/wiki/Basilisk";

let headers = [header1, header2, header3, header4, header5, header6, header7, header8, header9, header10, header11];
let images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11];
let texts = [text1, text2, text3, text4, text5, text6, text7, text8, text9, text10, text11];
let titles = [title1, title2, title3, title4, title5, title6, title7, title8, title9, title10, title11];


var num = 0;


function reRender() {
    document.getElementById("riotHeader").textContent = headers[num];
    document.getElementById("riotImage").src = images[num];
    document.getElementById("riotText").textContent = texts[num];
    document.getElementById("riotImage").title = titles[num];
    document.getElementById("riotImage").alt = headers[num];
    localStorage.setItem("num", num);
}

function moveRight() {
    num += 1;
    num %= headers.length;
    reRender();
}
function moveLeft() {
    num += headers.length - 1;
    num %= headers.length;
    reRender();
}

function mouseoverRight() {
    document.getElementById("rightArrow").src = "/creativeproj1/Images/riot/forward2.png";
}
function mouseoutRight() {
    document.getElementById("rightArrow").src = "/creativeproj1/Images/riot/forward.png";
}
function mouseoverLeft() {
    document.getElementById("leftArrow").src = "/creativeproj1/Images/riot/back2.png";
}
function mouseoutLeft() {
    document.getElementById("leftArrow").src = "/creativeproj1/Images/riot/back.png";
}



reRender();

document.getElementById("rightArrow").addEventListener("mouseover", mouseoverRight);
document.getElementById("rightArrow").addEventListener("mouseout", mouseoutRight);
document.getElementById("leftArrow").addEventListener("mouseover", mouseoverLeft);
document.getElementById("leftArrow").addEventListener("mouseout", mouseoutLeft);

document.getElementById("rightArrow").addEventListener("click", moveRight);
document.getElementById("leftArrow").addEventListener("click", moveLeft);