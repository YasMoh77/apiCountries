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
let select=document.getElementById('filterSelect');
let text=document.getElementById('filterText');


showAny=(anyCont,searchT)=>{
  anyCont.map(dt=>{
    var showMain=document.getElementById('showMain');
    showMain.innerHTML=
    "<div class='flex j-c-s-a bl-back white'>"
        +"<h1 class='' id='head'>Search Results for ("+searchT+")</h1>"
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
    +"<div class='bottom-div bl-back white flex'><h2></h2></div>"//bottom div
  });
}


//get search Data
async function filterFunc(searchS,searchT){
      // show spinner
      let btn=document.getElementById('btnS');
      let aa=document.createElement('span');
      aa.setAttribute('class','spinner-border');
      aa.classList.add('spin');
      btn.insertBefore(aa,btn.firstChild);

   if(select.value==1&&text.value!=''){
        //search by country name
        const res=await fetch('https://restcountries.com/v3.1/name/'+searchT+'')
        const anyCont=await res.json(); 
        aa.removeAttribute('class');
        var showMain=document.getElementById('showMain');
        if(anyCont.status==404){//
          showMain.innerHTML='<h3 style="background:red;padding:1vh 1vw"><p style="margin:0 auto; width:fit-content;color:white">No search Results</p></h3>';
        }else{showAny(anyCont,searchT);}
    
  }else if(select.value==2&&text.value!=''){
        //search by capital
        const res=await fetch('https://restcountries.com/v3.1/capital/'+searchT+'')
        const anyCont=await res.json(); 
        aa.removeAttribute('class');
        var showMain=document.getElementById('showMain');
        if(anyCont.status==404){//
          showMain.innerHTML='<h3 style="background:red;padding:1vh 1vw"><p style="margin:0 auto; width:fit-content;color:white">No search Results</p></h3>';
        }else{showAny(anyCont,searchT);}
  }else if(select.value==3&&text.value!=''){
        //search by capital
        const res=await fetch('https://restcountries.com/v3.1/lang/'+searchT+'')
        const anyCont=await res.json(); 
        aa.removeAttribute('class');
        var showMain=document.getElementById('showMain');
        if(anyCont.status==404){//
          showMain.innerHTML='<h3 style="background:red;padding:1vh 1vw"><p style="margin:0 auto; width:fit-content;color:white">No search Results</p></h3>';
        }else{showAny(anyCont,searchT);}
  }else if(select.value==4&&text.value!=''){
    //search by capital
    const res=await fetch('https://restcountries.com/v3.1/currency/'+searchT+'')
    const anyCont=await res.json(); 
    aa.removeAttribute('class');
    var showMain=document.getElementById('showMain');
    if(anyCont.status==404){//
      showMain.innerHTML='<h3 style="background:red;padding:1vh 1vw"><p style="margin:0 auto; width:fit-content;color:white">No search Results</p></h3>';
    }else{showAny(anyCont,searchT);}
}else if(select.value==5&&text.value!=''){
  //search by capital
  const res=await fetch('https://restcountries.com/v3.1/translation/'+searchT+'')
  const anyCont=await res.json(); 
  aa.removeAttribute('class');
  var showMain=document.getElementById('showMain');
  if(anyCont.status==404){//
    showMain.innerHTML='<h3 style="background:red;padding:1vh 1vw"><p style="margin:0 auto; width:fit-content;color:white">No search Results</p></h3>';
  }else{showAny(anyCont,searchT);}
}
  
  
  
  
 
}

let filterB=document.getElementById('btnS');
let input=document.getElementById('filterText');
select.onchange=()=>{
  if(select.value==0){select.style.backgroundColor='#ea8595';}else{select.style.backgroundColor='white';}
}
filterB.onclick=()=>{
  if(select.value==0){select.style.backgroundColor='#ea8595';}else{select.style.backgroundColor='white';}
  if(text.value==''){text.style.backgroundColor='#ea8595';}else{text.style.backgroundColor='white';}
  if(select.value>0&&text.value!=''){filterFunc(select.value,text.value)}
  
}



//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%///
//%%%%%%%%%%%%%%%%%%%%%%%%% show  one country  %%%%%%%%%%%%%%%%%%%%%%%///
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
  let country=index.children[0].getAttribute('dd');
  console.log(country);
  index.style.backgroundColor='#216daa';
  index.children[1].style='display:inline;position:absolute;color:white'; 
  fetch('https://restcountries.com/v3.1/name/'+country+'').then(res=> res.json()).then(data=>{
   showContSelected(data);
   index.style.backgroundColor='#008eff'; 
   index.children[1].style.display='none'; 
  });
}

/////// show all europe region //////////
async function continent(region,el)
{
  let element=document.getElementById(el);
  element.style.backgroundColor='blue';
  const response=region=='North America'||region=='South America'? await fetch('https://restcountries.com/v3.1/subregion/'+region+''):await fetch('https://restcountries.com/v3.1/region/'+region+''); //'+region+'/'+NorthAmerica+'
  const reg=await response.json()
  element.style.backgroundColor='#091492';
  element.style.color='white';

  let names='';
  names+='<div class="flex j-c-s-a bl-back white m-b-md">';
  names+='<h1 id="head">Region Countries</h1>';
  names+='</div>';
  names+='<div class="flex flex-countires" >';
  for(i in reg){
    names +='<div onclick="showCont(this)"><section dd="'+reg[i].name.common+'">'+reg[i].name.common+'</section><span class="spinner-border spinn none"></span></div>'; 
    //names +='';     
  }
  names+="<div class='bottom-div bl-back white flex'><h2></h2></div>"//bottom div
  names+='</div>';

  let showMain=document.querySelector('#showMain');
  showMain.innerHTML=names;
}

//when click on continents
let showOne=document.getElementById('showOneCont');
let h1Asia=document.getElementById('h1Asia');
h1Asia.onclick=()=>{showOne.innerHTML=''; continent(h1Asia.children[0].innerHTML,'h1Asia')}

let h1Afr=document.getElementById('h1Afr');
h1Afr.onclick=()=>{ showOne.innerHTML=''; continent(h1Afr.children[0].innerHTML,'h1Afr') } //

let h1Eur=document.getElementById('h1Eur');
h1Eur.onclick=()=>{showOne.innerHTML='';  continent(h1Eur.children[0].innerHTML,'h1Eur');}

let h1Na=document.getElementById('h1Na');
h1Na.onclick=()=>{ showOne.innerHTML=''; continent(h1Na.children[0].innerHTML,'h1Na');}

let h1Sa=document.getElementById('h1Sa');
h1Sa.onclick=()=>{ showOne.innerHTML=''; continent(h1Sa.children[0].innerHTML,'h1Sa');}

let h1Oc=document.getElementById('h1Oc');
h1Oc.onclick=()=>{ showOne.innerHTML=''; continent(h1Oc.children[0].innerHTML,'h1Oc');}





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




    

