var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var path       = require('path');
var mysql      = require('mysql');

// plugin para poder ler post/get
app.use(
    bodyParser.urlencoded({
         extended: true
    })
);

app.use(
    bodyParser.json()
);

// plugin para habilitar a pasta public no servidor para as imagens
app.use(
    express.static(
        path.join(
            __dirname,
            'public'
        )
    )
);

// seta o engine de view
app.set(
    'view engine',
    'jade'
);

app.locals.pretty = true;

/**
 * Rotas
 */
app.get(
    '/',
    function (objRequest, objResponse) {

        objResponse.render(
            'index/index',
            {
                variavel: 'valor'
            }
        );
    }
);

app.get(
    '/fluxo',
    function (objRequest, objResponse) {

        objResponse.render(
            'fluxo/fluxo_index',
            {
                variavel: 'valor'
            }
        );
    }
);

app.get(
    '/fluxo/lista',
    function (objRequest, objResponse) {

        var text = '{ "arrResultado" : [' +
            '{ "firstName":"John" , "lastName":"Doe" },' +
            '{ "firstName":"Anna" , "lastName":"Smith" },' +
            '{ "firstName":"Peter" , "lastName":"Jones" } ]}';


        text = '[{"cd_processo":1,"ds_nome":"Processo 1","ds_descricao":"Processo 1"},{"cd_processo":2,"ds_nome":"teste1","ds_descricao":"teste1"}]';

        objResponse.json(
            'fluxo/fluxo_lista',
            {
                arrResultado : JSON.parse(text)
            }
        );
    }
);

/**
 * Listem
 */
app.listen(
    3000,
    function () {
        console.log('Example app listening on port 3000!');
    }
);

