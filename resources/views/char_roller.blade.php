<html>
<head>
    <title>DND Random Character Generator</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
          integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Fjalla+One|Ubuntu" rel="stylesheet">
    <link rel="stylesheet" href="{{asset('css/char_roller.css')}}">
    <link href="https://fonts.googleapis.com/css?family=Scada" rel="stylesheet">


</head>

<body>

<div class ="box">
    You are a
    <a id="race" href="{{$race->five_e_tools_link}}" target="_blank">{{$race->name}}</a>
    <a id="feature" href="{{$class_feature->five_e_tools_link}}" target="_blank">{{$class_feature->name}}</a>
    <a id="class" href="{{$class->five_e_tools_link}}" target="_blank">{{$class->name}}</a>, who used to be a
    <a id="background" href="{{$background->five_e_tools_link}}" target="_blank">{{$background->name}}</a>
</div>

</body>
</html>
