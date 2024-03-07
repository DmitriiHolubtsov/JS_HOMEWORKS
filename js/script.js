'use strict';

const userAge = +prompt("Enter your age?");
const userLocation = prompt("Enter your living place?");
const favSport = prompt("Enter your favorite sport?");

const capitals = {
    ua: "України",
    usa: "США",
    gb: "Великої Британії",
}

const sportType = {
    tennisChamp: "Новаком Джоковичем",
    swimChamp: "Кемерон Макевой",
    runChamp: "Марією Перес",
}

function capitalizeFirstLetter(string) {
    if(string) {
        return string[0].toUpperCase() + string.slice(1);
    }
}

const normalizedLocationStr = capitalizeFirstLetter(userLocation);
const normalizedSportStr = capitalizeFirstLetter(favSport);

if((!isNaN(userAge) && userAge > 0) && normalizedLocationStr && normalizedSportStr) {
    if(normalizedLocationStr === "Київ" && "Вашингтон" && "Лондон" || normalizedLocationStr) {
        if(normalizedSportStr === "Теніс" && "Плавання" && "Біг" || normalizedSportStr) {
            if(normalizedSportStr === "Теніс") {
                alert(`Твій вік ${userAge}.\nТи живеш у столиці ${capitals.ua}.\nКруто! Хочеш стати ${sportType.tennisChamp}?`);
            } else if(normalizedSportStr === "Плавання") {
                alert(`Твій вік ${userAge}.\nТи живеш у столиці ${capitals.ua}.\nКруто! Хочеш стати ${sportType.swimChamp}?`);
            } else if(normalizedSportStr === "Біг") {
                alert(`Твій вік ${userAge}.\nТи живеш у столиці ${capitals.ua}.\nКруто! Хочеш стати ${sportType.swimChamp}?`);
            } else {
                alert(`Твій вік ${userAge}. Ти живеш у місті ${capitalizeFirstLetter(normalizedLocationStr)}.`);
            }
        } else {
            alert(`Твій вік ${userAge}. Ти живеш у місті ${capitalizeFirstLetter(normalizedLocationStr)}.`);
        }
    }
} else {
        if(!userAge) {
            alert("Шкода, що Ви не захотіли ввести свій вік.");
        } else if (!normalizedLocationStr) {
            alert("Шкода, що Ви не захотіли ввести своє місце проживання.");
        } else if (!favSport) {
            alert("Шкода, що Ви не захотіли ввести свій улюблений вид спорту.");
        }
}

