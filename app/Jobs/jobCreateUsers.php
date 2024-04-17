<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use App\Models\Message;
use App\Mail\SendMail;



class jobCreateUsers implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    
    public $users;
    public $mess;
    /**
     * Create a new job instance.
     */
    public function __construct($users)
    {
      $this->users=$users;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
         
         foreach( $users as $user){
            Mail::to($user->email)->send(new SendMail());
            }
      
    }



}
