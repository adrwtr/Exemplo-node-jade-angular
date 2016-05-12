var objApplication = angular.module(
    'Application',
    []
);

objApplication.controller(
    'Controller',
    function ($scope, $http) {

        $scope.adicionarNovo = function()
        {
            document.location = './processos/formulario';
        }

        $scope.executarProcesso = function(cd_processo)
        {
            document.location = './processos/visualizar?cd_processo=' + cd_processo;
        }

        $scope.listarProcessos = function()
        {
            $http.get(
                './lista'
            )
            .success(
                function(data){
                    $scope.arrRegistros = data.arrResultado;
                    console.log($scope.arrRegistros);
                }
            );
        }

        // on ready
        $scope.listarProcessos();
    }
);