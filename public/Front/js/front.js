$(function(){
/*%%%%%%%%%%%% login.blade %%%%%%%%%%%%%%%%*/
$('.goggle_btn').hover(function(){
  $(this).css({'backgroundColor':'#e90f2e','color':'white'});
},function(){
   $(this).css('backgroundColor','#fe0428'); 
});
/*%%%%%%%%%%%%%%   %%%%%%%%%%%%%%*/
$('.BTN').hover(function(){
  $(this).css('color','white');
});
/*%%%%%%%%%%%%%% make navbar fixed  %%%%%%%%%%%%%%*/
$(window).on('scroll',function(){
  if($(document).scrollTop()>35){
    $('.navTop').css({'position':'fixed','width':'100%','top':'0'});
  }else{
    $('.navTop').css({'position':'initial'});
  }
});
/*%%%%%%%%%%%%%%report blade radio buttons  %%%%%%%%%%%%%%*/
$('#rone').prop('checked',true); $('#rtext').prop('disabled',true);
$('#rone').on('click',function(){
  $('#rtwo').prop('checked',false);$('#rthree').prop('checked',false);$('#rtext').prop('disabled',true); 
});
$('#rtwo').on('click',function(){
  $('#rone').prop('checked',false);$('#rthree').prop('checked',false); $('#rtext').prop('disabled',true);
});
$('#rthree').on('click',function(){
  $('#rone').prop('checked',false); $('#rtwo').prop('checked',false); $('#rtext').prop('disabled',false);
});
/* %%%%%%%%%%%%%%%%%%%%%% faq %%%%%%%%%%%%%%%%%%%%%%%%%%%% */
$('.headfaq+p,.headfaq+ul').hide();
$('.headfaq').on('click',function(){
  $(this).next('p,ul').toggle();
});
/////////////////////////
$('.clickTrans').click(function(){
  $('.showTrans').toggle();
});

$('.a0').click(function(){
  $('#show').html($(this).attr('class'));
});

///////////////
 

///////////////////
 



});



//javascript
async function quote(){
  const response=await fetch('https://quote-garden.onrender.com/api/v3/quotes')
  const data=await response.json()
  var rand=Math.floor(Math.random()*10);
  console.log(data);
 /* var page=data['pagination'].currentPage;
  var author=data['data'][rand].quoteAuthor;
  var genre=data['data'][rand].quoteGenre;
  var text=' ';
  console.log(data['pagination']) //['data'][rand].quoteText
  
  
  for( var i=0; i<10;i++){
   text+='<div class="son">'+data['data'][i].quoteAuthor+'</div>';
  }*/
 
  
}
//api()
///////////////////

//javascript //https://quote-garden.onrender.com/api/v3/quotes
//execute search
let filterS=document.getElementById('filterSelect');
let filterT=document.getElementById('filterText');


showAny=(anyCont,searchT)=>{
  anyCont.map(dt=>{
    var showMain=document.getElementById('showMain');

    showMain.innerHTML=
    "<div class='flex j-c-s-a bl-back white m-b-md'>"
        +"<h1 class='' id='head'>Search Results for ("+searchT+")</h1>"
        +"<button class='btn-back white dark-bl-back' onclick='backToCountries()' >Back to countries</button>"
    +"</div>"
    +"<div class='api-container flex j-c-s-b'>"
        +"<div class='left'>"//start class left
            +"<h1>"+dt.name.common+"</h1>\n"
            +"<div class='flex names'>"
            +(dt.altSpellings[0]!=null? "<div>"+dt.altSpellings[0]+"</div>":'')
            +(dt.altSpellings[1]!=null? "<div>"+dt.altSpellings[1]+"</div>":'') 
            +(dt.altSpellings[2]!=null? "<div>"+dt.altSpellings[2]+"</div>":'')
            +(dt.altSpellings[3]!=null? "<div>"+dt.altSpellings[3]+"</div>":'')
            +"</div>"//end flex
            +"<div class='flex inside-api-container'>"//start inside api-container
                +"<div class='left-left'>"//start left left
                    +"<h3>Capital: <span>"+dt.capital[0]+"</span></h3>"
                    +"<h3>Car driving seat on the : <span>"+dt.car.side+"</span></h3>"
                    +(dt.independent==true? "<h3>Independent country : <span>Yes</span></h3>":"<h3>Independent country : <span>No</span></h3>")
                    +"<h3>languages: <span>"+Object.values(dt.languages)[0]+"</span></h3>"
                    +"<h3>Currency: <span>"+Object.values(Object.values(dt.currencies)[0])[0]+"</span></h3>"
                    +"<h3>Currency symbol: <span>"+Object.values(Object.values(dt.currencies)[0])[1]+"</span></h3>"
                    //+((tld in dt)?"<h3>website: <span>"+dt.tld[0]+"</span></h3>" :'')
                    +"<h3>In: <span>"+dt.region+'/'+dt.subregion+"</span></h3>"
                    +"<h3>Population: <span>"+dt.population+"</span></h3>"
                    +(typeof(dt.demonyms.eng)!==null?"<h3>Males: <span>English("+dt.demonyms.eng.m+")</span> /Females: <span>English("+dt.demonyms.eng.f+")</span></h3>":'')
                    +(typeof(dt.demonyms.fra)!=='undefined'?"<h3>Males: <span>French("+dt.demonyms.fra.m+")</span> /Females: <span>French("+dt.demonyms.fra.f+")</span></h3>":'')
                    +"<h3>Week starts on : <span>"+dt.startOfWeek+"</span></h3>"
                    +"<h3>Time zone : <span>"+dt.timezones[0]+"</span></h3>"
                +"</div>"//end left left
                +"<div class='left-right'>"//start left right
                    +(typeof(dt.translations.deu)!=='undefined'?"<h4>"+dt.translations.deu.common+"</h4>":'')
                    +(typeof(dt.translations.ara)!=='undefined'?"<h4>"+dt.translations.ara.common+"</h4>":'')
                    +(typeof(dt.translations.fin)!=='undefined'?"<h4>"+dt.translations.fin.common+"</h4>":'')
                    +(typeof(dt.translations.fra)!=='undefined'?"<h4>"+dt.translations.fra.common+"</h4>":'')
                    +(typeof(dt.translations.zho)!=='undefined'?"<h4>"+dt.translations.zho.common+"</h4>":'')
                    +(typeof(dt.translations.ita)!=='undefined'?"<h4>"+dt.translations.ita.common+"</h4>":'')
                    +(typeof(dt.translations.per)!=='undefined'?"<h4>"+dt.translations.per.common+"</h4>":'')
                    +(typeof(dt.translations.jpn)!=='undefined'?"<h4>"+dt.translations.jpn.common+"</h4>":'')
                    +(typeof(dt.translations.kor)!=='undefined'?"<h4>"+dt.translations.kor.common+"</h4>":'')
                    +(typeof(dt.translations.spa)!=='undefined'?"<h4>"+dt.translations.spa.common+"</h4>":'')
                    +(typeof(dt.translations.rus)!=='undefined'?"<h4>"+dt.translations.rus.common+"</h4>":'')
                +"</div>"//end left right
            +"</div class='left'>"//end inside api-container
        +"</div>"//end class left
        +"<div class='right'>"//start class right
           +"<div class='m-b-sm'><img src='"+dt.flags.png+"'></div>"//flag
           +"<div><img src='"+dt.coatOfArms.png+"' ></div>"//coatOfarms
           +"<div class='map flex'><a target='_blank' href='"+dt.maps.googleMaps+"'>show map</a></div>"//coatOfarms
        +"</div>"//end class right
    +"</div>"//end api-container
    +"<div onclick='backToCountries()' class='bottom-div m-b-lg bl-back white flex'><h2>Back to countries</h2></div>"//bottom div
  });
}
//get search Data
async function filterFunc(searchS,searchT){
  if(searchS==1){
    const res=await fetch('https://restcountries.com/v3.1/name/'+searchT+'')
    const anyCont=await res.json(); 
    var showMain=document.getElementById('showMain');
    if(anyCont.status==404){showMain.innerHTML='no';}
    else{showAny(anyCont,searchT);}
    //console.log(data.status);
    
     
  }
  
  
  
  
 
}

let filterB=document.getElementById('btnS');
filterB.onclick=()=>{filterFunc(filterS.value,filterT.value)}






/////////////////
  
  
 
//return to continents
function backToCountries()
{location.reload();}

//back
backToContinents=()=>{
  location.href='/';
}


//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%///
//%%%%%%%%%%%%%%%%%%%%%%%%% show  Europe region %%%%%%%%%%%%%%%%%%%%%%%///
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%///
//show the selected European Country
let showOneEur=document.getElementById('showOneCont');
//show a European country
showContSelected =(data)=>{
  data.map(dt=>{
    showOneEur.innerHTML=
    "<div class='flex j-c-s-a bl-back white m-b-md'>"
        +"<h1 class='' id='head'>Selected country ("+dt.name.common+")</h1>"
    +"</div>"
    +"<div class='api-container flex j-c-s-b'>"
        +"<div class='left'>"//start class left
            +"<h1>"+dt.name.common+"</h1>\n"
            +"<div class='flex names'>"
            +(dt.altSpellings[0]!=null? "<div>"+dt.altSpellings[0]+"</div>":'')
            +(dt.altSpellings[1]!=null? "<div>"+dt.altSpellings[1]+"</div>":'') 
            +(dt.altSpellings[2]!=null? "<div>"+dt.altSpellings[2]+"</div>":'')
            +(dt.altSpellings[3]!=null? "<div>"+dt.altSpellings[3]+"</div>":'')
            +"</div>"//end flex
            +"<div class='flex inside-api-container'>"//start inside api-container
                +"<div class='left-left'>"//start left left
                    +"<h3>Capital: <span>"+dt.capital[0]+"</span></h3>"
                    +"<h3>Car driving seat on the : <span>"+dt.car.side+"</span></h3>"
                    +(dt.independent==true? "<h3>Independent country : <span>Yes</span></h3>":"<h3>Independent country : <span>No</span></h3>")
                    +"<h3>languages: <span>"+Object.values(dt.languages)[0]+"</span></h3>"
                    +"<h3>Currency: <span>"+Object.values(Object.values(dt.currencies)[0])[0]+"</span></h3>"
                    +"<h3>Currency symbol: <span>"+Object.values(Object.values(dt.currencies)[0])[1]+"</span></h3>"
                    //+((tld in dt)?"<h3>website: <span>"+dt.tld[0]+"</span></h3>" :'')
                    +"<h3>In: <span>"+dt.region+'/'+dt.subregion+"</span></h3>"
                    +"<h3>Population: <span>"+dt.population+"</span></h3>"
                    +(typeof(dt.demonyms.eng)!==null?"<h3>Males: <span>English("+dt.demonyms.eng.m+")</span> /Females: <span>English("+dt.demonyms.eng.f+")</span></h3>":'')
                    +(typeof(dt.demonyms.fra)!=='undefined'?"<h3>Males: <span>French("+dt.demonyms.fra.m+")</span> /Females: <span>French("+dt.demonyms.fra.f+")</span></h3>":'')
                    +"<h3>Week starts on : <span>"+dt.startOfWeek+"</span></h3>"
                    +"<h3>Time zone : <span>"+dt.timezones[0]+"</span></h3>"
                +"</div>"//end left left
                +"<div class='left-right'>"//start left right
                    +(typeof(dt.translations.deu)!=='undefined'?"<h4>"+dt.translations.deu.common+"</h4>":'')
                    +(typeof(dt.translations.ara)!=='undefined'?"<h4>"+dt.translations.ara.common+"</h4>":'')
                    +(typeof(dt.translations.fin)!=='undefined'?"<h4>"+dt.translations.fin.common+"</h4>":'')
                    +(typeof(dt.translations.fra)!=='undefined'?"<h4>"+dt.translations.fra.common+"</h4>":'')
                    +(typeof(dt.translations.zho)!=='undefined'?"<h4>"+dt.translations.zho.common+"</h4>":'')
                    +(typeof(dt.translations.ita)!=='undefined'?"<h4>"+dt.translations.ita.common+"</h4>":'')
                    +(typeof(dt.translations.per)!=='undefined'?"<h4>"+dt.translations.per.common+"</h4>":'')
                    +(typeof(dt.translations.jpn)!=='undefined'?"<h4>"+dt.translations.jpn.common+"</h4>":'')
                    +(typeof(dt.translations.kor)!=='undefined'?"<h4>"+dt.translations.kor.common+"</h4>":'')
                    +(typeof(dt.translations.spa)!=='undefined'?"<h4>"+dt.translations.spa.common+"</h4>":'')
                    +(typeof(dt.translations.rus)!=='undefined'?"<h4>"+dt.translations.rus.common+"</h4>":'')
                +"</div>"//end left right
            +"</div class='left'>"//end inside api-container
        +"</div>"//end class left
        +"<div class='right'>"//start class right
           +"<div class='m-b-sm'><img src='"+dt.flags.png+"'></div>"//flag
           +"<div><img src='"+dt.coatOfArms.png+"' ></div>"//coatOfarms
           +"<div class='map flex'><a target='_blank' href='"+dt.maps.googleMaps+"'>show map</a></div>"//coatOfarms
        +"</div>"//end class right
    +"</div>"//end api-container
  });
} 

 
//// show one european country //// 
showCont =(index) =>  {
  let country=index.innerHTML;
  index.style.backgroundColor='#216daa';
  index.nextElementSibling.style='display:inline;position:relative;top:11vh;left:-12vw'; 
  fetch('https://restcountries.com/v3.1/name/'+country+'').then(res=> res.json()).then(data=>{
   showContSelected(data);
   index.style.backgroundColor='#008eff'; 
   index.nextElementSibling.style.display='none'; 
  });
}

/////// show all europe region //////////
async function continent(region)
{
const response=await fetch('https://restcountries.com/v3.1/region/'+region+'') ///*eur[i].name.nativeName.deu.common*/
const eur=await response.json()
let names='';
names+='<div class="flex j-c-s-a bl-back white m-b-md">';
names+='<h1 id="head">Region Countries</h1>';
names+='<button class="btn-back white dark-bl-back" onclick="backToContinents()" >Back to countinents</button>'
names+='</div>';
names+='<div class="flex flex-countires" >';
for(i in eur){
   names +='<div onclick="showCont(this)" class="">'+eur[i].name.common+'</div>'; 
   names +='<span class="spinner-border spinn none"></span>';     
}
names+='</div>';
let EuropeConts=document.querySelector('#showMain');
EuropeConts.innerHTML=names;
}

let h1Asia=document.getElementById('h1Asia');
h1Asia.onclick=()=>{ continent(h1Asia.innerHTML)}
let h1Afr=document.getElementById('h1Afr');
h1Afr.onclick=()=>{ continent(h1Afr.innerHTML)}
let h1Eur=document.getElementById('h1Eur');
h1Eur.onclick=()=>{ continent(h1Eur.innerHTML)}

//let div=document.querySelector('.flex-countires>div');
//div.onclick=()=>{div.style.backgroundColor='red'}





//
if (navigator.onLine) {
  //alert("online");
} else {
  alert("offline");
}
window.addEventListener("offline", (e) => {
  console.log("offline");
  alert("offline");
});




    

