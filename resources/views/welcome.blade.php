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
                        <div class="flex j-c-s-a lightgr-back white height30">
                            <h1>Our amazing world</h1>
                            <select id="filterSelect">
                                <option value="0">Search by ...</option>
                                <option value="1">Country Name</option>
                                <option value="2">Capital</option>
                            </select>
                            <input type="text" id="filterText">
                            <button id="btnS">Search</button>
                        </div>

                        <div class="parent" id="container">
                            <div class="flex flex-continents">
                                <h1 id="h1Asia">Asia</h1>
                                <h1 id="h1Afr">Africa</h1>
                                <h1 id="h1Eur">Europe</h1>
                                <h1 id="h1Na">North America</h1>
                                <h1 id="h1Sa">South America</h1>
                                <h1 id="h1Aus">Australia</h1>
                            </div>
                            <div id="showMain"></div>
                        </div>
                        <div id="showOneCont"></div>
            </section>

        
        
    </div>
@endsection

