<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ env('APP_NAME') }}</title>

    <link rel="icon" href="{{ asset('img/favicon.png') }}" type="image/png" sizes="16x16">
    <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <script type="text/javascript">
        const APP_CONFIG = {
            name: "{{env('APP_NAME')}}",
            appURL: "{{env('APP_URL')}}",
            apiURL: "{{env('API_URL')}}",
        }
    </script>
</head>
<body>
    <div id="root"></div>

    <script src="{{ asset('js/index.js') }}"></script>
</body>
</html>
