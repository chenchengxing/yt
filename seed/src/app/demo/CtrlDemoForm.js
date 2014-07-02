define([
    'app',
    '../_directives/checklistModel',
    '../_directives/ytMaxlength',
    '../_directives/ytMinlength',
    '../_common/modal/Modal',
    '../_common/modal/CtrlModal'
    ], function ( app ) {
        app.registerController( 'CtrlDemoForm', [ '$scope', 'Modal', function ( $scope, Modal ) {
            // $scope.colors = ['red', 'blue', 'green'];
            $scope.colors = ['red', 'green', 'blue', 'yellow'];
            $scope.genders = ['male', 'female'];
            $scope.customers = [
                {
                    userId: '12',
                    name: 'wj',
                    gender: 'female'
                },
                {
                    userId: '23',
                    name: 'ccx',
                    gender: 'male'

                },
                {
                    userId: '34',
                    name: 'zw',
                    gender: 'male'
                },
                {
                    userId: '56',
                    name: 'yb',
                    gender: 'female'
                }
            ];

            $scope.simpleForm = {
                inputText : 'some init text~',
                inputCheckbox : ['blue', 'red'],
                inputRadio: 'male',
                textarea: '0123',
                select: '23',
                multiSelect: [$scope.customers[1],$scope.customers[3]]
            };
            $scope.alertValues = function () {
                var text = 'the form values as: \n';
                angular.forEach($scope.simpleForm, function (value, key) {
                    text += key + " : " + value + "\n";
                });
                Modal.alert({title: 'form data', content: $scope.simpleForm});
            };
            $scope.emptyAll = function () {
                $scope.simpleForm = {
                    inputText : '',
                    inputCheckbox : [],
                    inputRadio: '',
                    textarea: '',
                    select: "",
                    multiSelect: []
                };
            };
        }]);
});
