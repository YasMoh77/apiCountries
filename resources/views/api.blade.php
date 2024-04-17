
@if (isset($json))
{{$json->name->common}}
  {{--@foreach($json as $info){
    {{$info->name->common}} <br> 
    }
    @endforeach--}}
@else
   no 
@endif