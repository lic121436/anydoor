<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{title}}</title>
    <style>
        body{
            margin: 30px;
        }

        a{
            display: block;
            font-size: 30px;
        }
    </style>
</head>
<body>
    {{#each files}}
    <a href="{{../dir}}/{{file}}">【{{icon}}】{{file}}</a>
    {{/each}}    
</body>
</html>