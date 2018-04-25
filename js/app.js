//Secret Menu Challenge
//Add event listeners to the following:


/*1) to the navmenu items (Home, Location, Blog) that will show and hide the contents for that specific navmenu item.*/

var naviList = document.getElementsByClassName('navi');

for(var i = 0; i < naviList.length; i++){
    naviList[i].addEventListener('click', showMore)
};

function showMore() {
    var qs = this.querySelector('.inner');
    if (qs.style.display === 'inline') {
        qs.style.display = 'none';
    }else{
        qs.style.display = 'inline';
    }
}

/*2) to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/

var nameList = document.getElementsByClassName('name');

for(var i = 0; i < nameList.length; i++){
    nameList[i].addEventListener('click', showMenu)
};

function showMenu() {
    var m = this.querySelector('.menu');
    if (m.style.display === 'inline') {
        m.style.display = 'none';
    }else{
        m.style.display = 'inline';
    }
}

/*3) to the thumbs down icon that will add a count (counter) for each time the icon is clicked on.*/


var t = document.getElementsByClassName('thumb');


for(var i = 0; i < t.length; i++){
    var d = document.createElement('div');
    d.className = 'score';
    d.innerHTML = 0;
    t[i].appendChild(d);
    t[i].addEventListener('click', addPoint);
}

function addPoint() {
    console.log(this);
    var s = this.querySelector('.score').innerHTML;
    this.querySelector('.score').innerHTML = parseInt(s) + 1;
}