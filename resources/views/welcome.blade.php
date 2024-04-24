@extends('layouts.app')
@section('title','project')
@section('content')

    <div class="antialiased">
                <div class="relative " style="">

                </div>
                @if(session('success'))<div class="alert alert-success">{{session('success')}}</div>@endif
                @if(session('error'))<div class="alert alert-danger">{{session('error')}}</div>@endif
                

             <!--countries api -->
             
            <section>
                        <div class="flex j-c-s-e align-i-c dark-bl-back white height30">
                            <h1>Our amazing world</h1>
                            <select class="height10 radius" id="filterSelect">
                                <option value="0">Search by ...</option>
                                <option value="1">Country Name</option>
                                <option value="2">Capital</option>
                                <option value="3">Language</option>
                                <option value="4">Currency</option>
                                <option value="5">Translation</option>
                            </select>
                            <input class="height10 radius" type="text" id="filterText" placeholder="Type country name">
                            <button class="height10 light-gr-back radius" id="btnS">Search</button>
                        </div>

                        <div class="parent" id="container">
                            <div class="flex flex-continents">
                                <h1 id="h1Asia"><span>Asia</span></h1>
                                <h1 id="h1Afr"><span>Africa</span></h1>
                                <h1 id="h1Eur"><span>Europe</span></h1>
                                <h1 id="h1Na" ><span>North America</span></h1>
                                <h1 id="h1Sa"><span>South America</span></h1>
                                <h1 id="h1Oc"><span>Oceania</span></h1>
                            </div>
                            <div id="showMain"></div>
                        </div>
                        <div id="showOneCont"></div>
                        <div class="height30 dark-bl-back "></div>
            </section>

        
        
    </div>
@endsection

