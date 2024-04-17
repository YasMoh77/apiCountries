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
let showOneEur=document.getElementById('EuropeConts');
//show a European country
showEuroContSelected =(data)=>{
  data.map(dt=>{
    showOneEur.innerHTML=
    "<div class='flex j-c-s-a bl-back white m-b-md'>"
        +"<h1 class='' id='head'>European countries</h1>"
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

 
//// show one european country //// 
showEuroCont =(index) =>  {
  let country=index.innerHTML;
  fetch('https://restcountries.com/v3.1/name/'+country+'').then(res=> res.json()).then(data=>{
    console.log(data);
   showEuroContSelected(data);
  });
}

/////// show all europe region //////////
async function europe()
{
const response=await fetch('https://restcountries.com/v3.1/region/Europe') ///*eur[i].name.nativeName.deu.common*/
const eur=await response.json()
console.log(eur);
let names='';
names+='<div class="flex j-c-s-a bl-back white m-b-md">';
names+='<h1 id="head">European countries</h1>';
names+='<button class="btn-back white dark-bl-back" onclick="backToContinents()" >Back to countinents</button>'
names+='</div>';
names+='<div class="flex flex-countires" >';
for(i in eur){
   names +='<div onclick="showEuroCont(this)" class="">'+eur[i].name.common+'</div>';      
}
names+='</div>';
//document.querySelector('#head').innerHTML='European countries';
let EuropeConts=document.querySelector('#EuropeConts');
EuropeConts.innerHTML=names;
}
europe()



//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%///
//%%%%%%%%%%%%%%%%%%%%%%%%% show  Africa region %%%%%%%%%%%%%%%%%%%%%%%///
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%///
let showOneAfr=document.getElementById('afrConts');
//show selected African country
showAfrContSelected =(data)=>{
  data.map(dt=>{
    showOneAfr.innerHTML=
    "<div class='flex j-c-s-a bl-back white m-b-md'>"
        +"<h1 class='' id='head'>African countries</h1>"
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


//// show one african country //// 
showAfrCont =(index) =>  {
  let country=index.innerHTML;
  fetch('https://restcountries.com/v3.1/name/'+country+'').then(res=> res.json()).then(data=>{
    console.log(data);
    showAfrContSelected(data);
  });
}

async function afr()
{
const response=await fetch('https://restcountries.com/v3.1/region/Africa') ///*eur[i].name.nativeName.deu.common*/
const afr=await response.json()
console.log(afr);
let names='';
names+='<div class="flex j-c-s-a bl-back white m-b-md">';
names+='<h1 id="head">African countries</h1>';
names+='<button class="btn-back white dark-bl-back" onclick="backToContinents()" >Back to countinents</button>'
names+='</div>';
names+='<div class="flex flex-countires" >';
for(i in afr){
   names +='<div onclick="showAfrCont(this)" class="">'+afr[i].name.common+'</div>';      
}
names+='</div>';
//document.querySelector('#head').innerHTML='European countries';
let EuropeConts=document.querySelector('#afrConts');
EuropeConts.innerHTML=names;
}
afr()







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




    

