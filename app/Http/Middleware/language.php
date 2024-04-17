<?php

namespace App\Http\Middleware;

use Closure;
use App;
use Config;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class language
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (in_array($request->segment(2), ['en','ar'])) {
            App::setLocale($request->segment(2));
        }
        if (session()->has('locale') ) {
            App::setLocale(session()->get('locale'));
        }

        return $next($request);
    }
}
