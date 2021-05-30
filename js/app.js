'use strict';
let hour=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
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




function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}



