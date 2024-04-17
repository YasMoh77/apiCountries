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
                        </div>

                        <div id="container">
                            <div class="flex flex-continents">
                                <div><h1><a href="{{url('/asia')}}"> Asia </a></h1></div>
                                <div><h1> <a href="{{url('/afr')}}"> Africa</a></h1></div>
                                <div><h1><a href="{{url('/eur')}}"> Europe</a></h1></div>
                                <div><h1><a href="{{url('/namerica')}}"> North America</a></h1></div>
                                <div><h1><a href="{{url('/samerica')}}"> South America</a></h1></div>
                                <div><h1><a href="{{url('/samerica')}}">Australia </a></h1></div>
                            </div>
                            <div></div>
                        </div>
            </section>

        
        
    </div>
@endsection

