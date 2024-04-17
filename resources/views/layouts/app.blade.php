<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title')</title> 
    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.bunny.net/css?family=Nunito" rel="stylesheet">

    <!-- My own css -->
    <link href="{{ url('Front/css/bootstrap.min.css') }}" rel="stylesheet">
    <link href="{{ url('Front/css/style.css') }}" rel="stylesheet">
    

</head>
<body>
    <div id="app">
        <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm navTop">
            <div class="container">
                <a class="navbar-brand m-b-sm alone" href="{{ url('/') }}">Home</a>
            </div>
        </nav>

        <main class="back-all p-b-lg">
            @yield('content')
        </main>

    </div>
    
    <footer>
            <div class="foot">
                <div class="container-foot">
                        <section>
                            <div class="ar1"></div>
                            <div class="ar1"> </div>
                            <div class="ar1">
                                <!-- change lang --> 
                                <div class="dropdown m-t-m lang-menu">
                                    <div class="dropdown-menu">
                                      <a href="{{url('lang','en')}}" class="dropdown-item">En</a>
                                      <a href="{{url('lang','ar')}}" class="dropdown-item">Ar</a>
                                    </div>
                                  </div>
                            </div>
                        </section> 
                </div>
                <div class="container-foot2"></div>                
            </div>
               
    </footer>
    
    
    <script type="text/javascript" src="{{ url('Front/js/jquery-3.6.0.min.js') }}"></script>
    <script type="text/javascript" src="{{ url('Front/js/bootstrap.bundle.min.js') }}"></script>
    <script type="text/javascript" src="{{ url('Front/js/front.js') }}"></script>
    
    @yield('ajax')  
    
    
</body>
</html>
