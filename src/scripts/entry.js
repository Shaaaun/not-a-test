import DateStuff from './app'
import Farts from './search'

DateStuff.init();
Farts.init();


document.querySelector('#search').addEventListener('click', evt => {
    DateStuff.getSearchDay();
    Farts.farts();
})

document.querySelector('#day').addEventListener('change', evt => {
    DateStuff.upDate();
})

document.querySelector('#month').addEventListener('change', evt => {
    DateStuff.upDate();
})

document.querySelector('#year').addEventListener('change', evt => {
    DateStuff.upDate();
})

document.querySelector(".search-again").addEventListener('click', evt => {
    DateStuff.clearStoragePls();
})