<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Message;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use App\Jobs\jobCreateUsers;
use App\Mail\SendMail;
use App\Notifications\NewLinksNotification;
use Carbon\Carbon;
use Mail;
use Notification;
use App;
use LanguageDetection\Language;
use Text_LanguageDetect;






class Homecontroller extends Controller
{
   
    public  function home () {
     $connected = @fsockopen("www.google.com", 80); 

     if ($connected){
        $is_conn = true; //action when connected
        fclose($connected);
    return view('welcome'/*,compact('user','detect')*/); 

    }else{
        $is_conn = false; //action in connection failure
        return view('offline');
        //abort(404);
        
    }
    
    }


    ///%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
 //api
 public  function eur () 
 {
    $connected = @fsockopen("www.google.com", 80); 
       //website, port  (try 80 or 443)
    if ($connected){
        $is_conn = true; //action when connected
        fclose($connected);
        return view('eur');
    }else{
        $is_conn = false; //action in connection failure
        return view('offline');
    }
  
 }

 public  function afr () 
 {
    $connected = @fsockopen("www.google.com", 80); 
       //website, port  (try 80 or 443)
    if ($connected){
        $is_conn = true; //action when connected
        fclose($connected);
        return view('afr');
    }else{
        $is_conn = false; //action in connection failure
        return view('offline');
    }
  
 }
 
    ////%%%%%%%%%%%%%%%%%%%%%%%%%%%


    public  function com () {
       
        return view('new');
    }  


    public  function dashboard () {
        return view('dashboard');
    }


    public  function changeLang ( $lang) 
    {
        App::setLocale($lang);
        session()->put('locale', $lang);  
        //return view('dashboard');
        return redirect()-> back();
    }


    

   




}
