'use strict';


let hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


/*
let Seattle={

  name:'Seattle',
  mincust:23,
  maxcust:65,
  avgcookiesale:6.3,
  custperhour:[],
  avgcookiesperhour:[],
  total:0,

  randomcustperhour:function()
  {
    let randomnum=0;
    for(let i=0;i<hour.length;i++ )
    {
      randomnum=(randomNumber(this.mincust,this.maxcust));
      this.custperhour.push(randomnum);
    }
    console.log(Seattle.custperhour);
  }




  ,avgcookies:function()
  {
    let randomnum2=0;
    for(let i=0;i<hour.length;i++ )
    {
      randomnum2=this.custperhour[i]*this.avgcookiesale;
      this.avgcookiesperhour.push(randomnum2);
      this.total=this.total+randomnum2;
    }
    console.log(Seattle.avgcookiesperhour);

  }

  ,render:function()
  {
    let parent= document.getElementById('salmoncookies');
    let articleElement=document.createElement('article');
    parent.appendChild(articleElement);
    let h2Element=document.createElement('h2');
    articleElement.appendChild(h2Element);
    h2Element.textContent= Seattle.name;
    let ulElement=document.createElement('ul');
    articleElement.appendChild(ulElement);
    for (let i = 0; i < hour.length; i++) {



      let liElement=document.createElement('li');


      ulElement.appendChild(liElement);


      liElement.textContent= hour[i]+':'+ Math.round(Seattle.avgcookiesperhour[i])+' cookies';

    }
    let liElement=document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent= 'Total :'+Math.round(Seattle.total)+' cookies';

    //console.log(parent);
  }


};

Seattle.randomcustperhour();
Seattle.avgcookies();
Seattle.render();








let Tokyo={

  name:'Tokyo',
  mincust:3,
  maxcust:24,
  avgcookiesale:1.2,
  custperhour:[],
  avgcookiesperhour:[],
  total:0,

  randomcustperhour:function()
  {
    let randomnum=0;
    for(let i=0;i<hour.length;i++ )
    {
      randomnum=randomNumber(this.mincust,this.maxcust);
      this.custperhour.push(randomnum);
    }
    console.log(Tokyo.custperhour);
  }




  ,avgcookies:function()
  {
    let randomnum2=0;
    for(let i=0;i<hour.length;i++ )
    {
      randomnum2=this.custperhour[i]*this.avgcookiesale;
      this.avgcookiesperhour.push(randomnum2);
      this.total=this.total+randomnum2;
    }
    console.log(Tokyo.avgcookiesperhour);

  }

  ,render:function()
  {
    let parent= document.getElementById('salmoncookies');
    let articleElement=document.createElement('article');
    parent.appendChild(articleElement);
    let h2Element=document.createElement('h2');
    articleElement.appendChild(h2Element);
    h2Element.textContent= Tokyo.name;
    let ulElement=document.createElement('ul');
    articleElement.appendChild(ulElement);
    for (let i = 0; i < hour.length; i++) {



      let liElement=document.createElement('li');


      ulElement.appendChild(liElement);


      liElement.textContent= hour[i]+':'+ Math.round(Tokyo.avgcookiesperhour[i])+' cookies';

    }
    let liElement=document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent= 'Total :'+Math.round(Tokyo.total)+' cookies';

    //console.log(parent);
  }


};


Tokyo.randomcustperhour();
Tokyo.avgcookies();
Tokyo.render();











let Dubai={

  name:'Dubai',
  mincust:11,
  maxcust:38,
  avgcookiesale:3.7,
  custperhour:[],
  avgcookiesperhour:[],
  total:0,

  randomcustperhour:function()
  {
    let randomnum=0;
    for(let i=0;i<hour.length;i++ )
    {
      randomnum=randomNumber(this.mincust,this.maxcust);
      this.custperhour.push(randomnum);
    }
    console.log(Dubai.custperhour);
  }




  ,avgcookies:function()
  {
    let randomnum2=0;
    for(let i=0;i<hour.length;i++ )
    {
      randomnum2=this.custperhour[i]*this.avgcookiesale;
      this.avgcookiesperhour.push(randomnum2);
      this.total=this.total+randomnum2;
    }
    console.log(Dubai.avgcookiesperhour);

  }

  ,render:function()
  {
    let parent= document.getElementById('salmoncookies');
    let articleElement=document.createElement('article');
    parent.appendChild(articleElement);
    let h2Element=document.createElement('h2');
    articleElement.appendChild(h2Element);
    h2Element.textContent= Dubai.name;
    let ulElement=document.createElement('ul');
    articleElement.appendChild(ulElement);
    for (let i = 0; i < hour.length; i++) {



      let liElement=document.createElement('li');


      ulElement.appendChild(liElement);


      liElement.textContent= hour[i]+':'+ Math.round(Dubai.avgcookiesperhour[i])+' cookies';

    }
    let liElement=document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent= 'Total :'+Math.round(Dubai.total)+' cookies';

    //console.log(parent);
  }


};




Dubai.randomcustperhour();
Dubai.avgcookies();
Dubai.render();






let Paris={

  name:'Paris',
  mincust:20,
  maxcust:38,
  avgcookiesale:2.3,
  custperhour:[],
  avgcookiesperhour:[],
  total:0,

  randomcustperhour:function()
  {
    let randomnum=0;
    for(let i=0;i<hour.length;i++ )
    {
      randomnum=randomNumber(this.mincust,this.maxcust);
      this.custperhour.push(randomnum);
    }
    console.log(Paris.custperhour);
  }




  ,avgcookies:function()
  {
    let randomnum2=0;
    for(let i=0;i<hour.length;i++ )
    {
      randomnum2=this.custperhour[i]*this.avgcookiesale;
      this.avgcookiesperhour.push(randomnum2);
      this.total=this.total+randomnum2;
    }
    console.log(Paris.avgcookiesperhour);

  }

  ,render:function()
  {
    let parent= document.getElementById('salmoncookies');
    let articleElement=document.createElement('article');
    parent.appendChild(articleElement);
    let h2Element=document.createElement('h2');
    articleElement.appendChild(h2Element);
    h2Element.textContent= Paris.name;
    let ulElement=document.createElement('ul');
    articleElement.appendChild(ulElement);
    for (let i = 0; i < hour.length; i++) {



      let liElement=document.createElement('li');


      ulElement.appendChild(liElement);


      liElement.textContent= hour[i]+':'+ Math.round(Paris.avgcookiesperhour[i])+' cookies';

    }
    let liElement=document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent= 'Total :'+Math.round(Paris.total)+' cookies';

    //console.log(parent);
  }


};


Paris.randomcustperhour();
Paris.avgcookies();
Paris.render();





let Lima={

  name:'Lima',
  mincust:2,
  maxcust:16,
  avgcookiesale:4.6,
  custperhour:[],
  avgcookiesperhour:[],
  total:0,

  randomcustperhour:function()
  {
    let randomnum=0;
    for(let i=0;i<hour.length;i++ )
    {
      randomnum=randomNumber(this.mincust,this.maxcust);
      this.custperhour.push(randomnum);
    }
    console.log(Lima.custperhour);
  }




  ,avgcookies:function()
  {
    let randomnum2=0;
    for(let i=0;i<hour.length;i++ )
    {
      randomnum2=this.custperhour[i]*this.avgcookiesale;
      this.avgcookiesperhour.push(randomnum2);
      this.total=this.total+randomnum2;
    }
    console.log(Lima.avgcookiesperhour);

  }

  ,render:function()
  {
    let parent= document.getElementById('salmoncookies');
    let articleElement=document.createElement('article');
    parent.appendChild(articleElement);
    let h2Element=document.createElement('h2');
    articleElement.appendChild(h2Element);
    h2Element.textContent= Lima.name;
    let ulElement=document.createElement('ul');
    articleElement.appendChild(ulElement);
    for (let i = 0; i < hour.length; i++) {



      let liElement=document.createElement('li');


      ulElement.appendChild(liElement);


      liElement.textContent= hour[i]+':'+ Math.round(Lima.avgcookiesperhour[i])+' cookies';

    }
    let liElement=document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent= 'Total :'+Math.round(Lima.total)+' cookies';

    //console.log(parent);
  }


};


Lima.randomcustperhour();
Lima.avgcookies();
Lima.render();

*/

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



let stores = [];
let magicenum = stores.length - 1;


function Store(name, mincust, maxcust, avgcookiesale) {
  this.name = name;
  this.mincusts = mincust;
  this.maxcusts = maxcust;
  this.avgcookiesales = avgcookiesale;
  this.custperhour = [];
  this.avgcookiesperhour = [];
  this.total = 0;
  stores.push(this);

}

Store.prototype.randomcustperhour = function () {
  let randomnum = 0;
  for (let i = 0; i < hour.length; i++) {
    randomnum = (randomNumber(this.mincusts, this.maxcusts));
    this.custperhour.push(randomnum);

  }


};
Store.prototype.avgcookies = function () {
  let randomnum2 = 0;
  for (let i = 0; i < hour.length; i++) {
    randomnum2 = Math.round(this.custperhour[i] * this.avgcookiesales);
    this.avgcookiesperhour.push(Math.floor(randomnum2));
    this.total = this.total + randomnum2;
  }



};

let parent1 = document.getElementById('salmoncookies');
let table = document.createElement('table');
parent1.appendChild(table);
function header() {
  let firstrow = document.createElement('tr');
  table.appendChild(firstrow);
  let firstelement = document.createElement('th');
  firstrow.appendChild(firstelement);
  firstelement.textContent = 'City Name';
  for (let i = 0; i < hour.length; i++) {
    let thelement = document.createElement('th');
    firstrow.appendChild(thelement);
    thelement.textContent = ' -    ' + hour[i];
  }
  let lastelement = document.createElement('th');
  firstrow.appendChild(lastelement);
  lastelement.textContent = '  -Daily Location Total';
}
header();


Store.prototype.render = function () {

  let cityrow = document.createElement('tr');
  table.appendChild(cityrow);
  let tdelement = document.createElement('td');
  cityrow.appendChild(tdelement);
  tdelement.textContent = this.name;

  for (let i = 0; i < hour.length; i++) {
    let tdelement = document.createElement('td');
    cityrow.appendChild(tdelement);
    tdelement.textContent = '     ' + this.avgcookiesperhour[i];
  }

  let lasttdelement = document.createElement('td');
  cityrow.appendChild(lasttdelement);
  lasttdelement.textContent = this.total;

};





function footer() {

  let lastrow = document.createElement('tr');
  table.appendChild(lastrow);
  let firstelement = document.createElement('th');
  lastrow.appendChild(firstelement);
  firstelement.textContent = 'Totals';
  let dailylocationtotal = 0;
  let total2 = 0;
  for (let i = 0; i < hour.length; i++) {
    let totalperhour = 0;
    for (let j = 0; j < stores.length; j++) {

      totalperhour = totalperhour + stores[j].avgcookiesperhour[i];
      total2 = total2 + totalperhour;

    }
    let thelement = document.createElement('th');
    lastrow.appendChild(thelement);
    thelement.textContent = totalperhour;
    //console.log(totalperhour);
    dailylocationtotal = dailylocationtotal + total2;
    totalperhour=0;
    dailylocationtotal=0;
}
  let lastelement = document.createElement('th');
  lastrow.appendChild(lastelement);
  lastelement.textContent = dailylocationtotal;
  dailylocationtotal = 0;

}


let seattel = new Store('Seattel', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);

for (let i = 0; i < stores.length; i++) {
  stores[i].randomcustperhour();
  stores[i].avgcookies();
  stores[i].render();
  console.log(stores[i].custperhour);
  console.log(stores[i].avgcookiesperhour);
}

footer();


let newstore = document.getElementById('newstore');
newstore.addEventListener('submit', submitter);

function submitter(event) {

  event.preventDefault();
  console.log(event);
  let name = event.target.namefield.value;
  let mincust = event.target.mincust.value;
  let maxcust = event.target.maxcust.value;
  let avgcookis = event.target.avgcookis.value;
  let addnewcity = new Store(name, mincust, maxcust, avgcookis);



  table.deleteRow(magicenum);
  addnewcity.randomcustperhour();
  addnewcity.avgcookies();
  addnewcity.render();
  console.log(addnewcity.custperhour);
  console.log(addnewcity.avgcookiesperhour);
  footer();
  console.log(stores);
}



// for (let i = 0; i < stores.length; i++) {
//   stores[i].randomcustperhour();
//   stores[i].avgcookies();
//   stores[i].render();
//   console.log(stores[i].custperhour);
//   console.log(stores[i].avgcookiesperhour);

// }

