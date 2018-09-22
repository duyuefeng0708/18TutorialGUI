var PATH_PRIVATE = "$HOME/Desktop/bulletproofs/target/release";

/**
 * StoreCtrl - controller
 */
function StoreCtrl($scope) {

    $scope.items = {
        show: false,
        directory: '',
        arr: ['10ms', '600 bytes', '1ms']
    };

    $scope.jobList = [];

    $scope.submit = (param) => {

        $scope.jobList.push(param);
    
    };

    $scope.prove = () =>{
        $.post('/api/cmd',
            {
                cmd: `cd ${PATH_PRIVATE} && ./bulletproofs ${$scope.jobList[0]} ${$scope.jobList[1]}`
            }
            , function (result) {


                // let arr = result.match(/(0x.*?$)/mg);
                let arr = result.match(/(.*s)/mg);

                // alert(arr.length);

                let obj = {
                    show: true,
                    directory: '',
                    arr: []
                }

                arr.forEach(v => { obj.arr.push(v) });

                $scope.$apply(function () {
                    $scope.items = obj;
                });
                // alert(result.length);
            }
        );
    };
};

angular
    .module('blockchain')
    .controller('StoreCtrl', StoreCtrl)