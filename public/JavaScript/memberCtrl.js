
var app = angular.module('myApp', []);
app.controller('memberCtrl', function ($scope, $http) {



    $scope.urlParam = function (name) {
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (results == null) {
            return null;
        }
        else {
            return decodeURI(results[1]) || 0;
        }
    }














    // $(document).ready(function() {

    //     // a login check function
    //       var login_check = function() {
    //         var username = $("#name").val(); 
    //         var password = $("#password").val();
    //         var login_screencheck = false;

    //         if (username === "master" && password === "123456789") {
    //           $("input").hide();
    //           $("button").hide();

    //           $("#message_login").append("<h3>Welcome back master!</h3>");

    //           login_screencheck = true;

    //         } else {
    //           alert("Wrong username or password.");
    //         }
    //       }
    //     // end function  

    //       $("#login").click(login_check);


    //     });





    $scope.login = function () {
        $http({
            method: "POST",
            url: "/api/member/login",
            data: { uname: $scope.userName, upass: $scope.password }
        }).then(function mySuccess(response) {
            if (response.data[0][0].isPasswordValid == 1) {
                location.href = "index.html?id=" + response.data[0][0].mbrId;
            } else {
                document.getElementById("wrong").style.display = "block";
                alert("رمز یا نام کاربری اشتباه است")
            }

        }, function myError(response) {
            $scope.member = response.statusText;
        });
    };

    $scope.signup = function () {
        if ($scope.addpassword != $scope.confirmpassword) {
            alert("رمز عبور یکسان نیست")
            document.getElementById("pass").style.borderBottom = "solid red 2px";
            document.getElementById("confirm").style.borderBottom = "solid red 2px";
            return
        }

        $http({
            method: 'POST',
            url: '/api/member/add',
            data: {
                'mbrPhone': $scope.addphone,
                'mbrName': $scope.addname,
                'mbrLastname': $scope.addlastname,
                'mbrPassword': $scope.addpassword,
                'mbrEmail': $scope.addemail
            }
        }).then(function successCallback(response) {
            alert("اضافه شد")
            location.href = "index.html";
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    };



    $scope.loadindex = () => {
        if ($scope.urlParam("id") == null) {
            alert("حالت مهمان");
            $scope.infouser = {
                "display": "none",
            }

            return
        }

        else

            $http({
                method: "POST",
                url: "/api/member/select",
                data: {
                    mbrId: $scope.urlParam("id")
                }

            }).then(function mySuccess(response) {
                $scope.selectermember = response.data[0].mbrName + " " + response.data[0].mbrLastname;


            }, function myError(response) {
                alert("کاربر یافت نشد یا ورود ناموفق");
            });
        alert("شما وارد شدید");
        $scope.logined = {
            "display": "none",
        }
        return
    };





























    $scope.loadmbrselected = function () {

        $http({
            method: "POST",
            url: "/api/member/select",
            data: {
                mbrId: $scope.urlParam("id")
            }


        }).then(function mySuccess(response) {
            $scope.mymemberinfo = response.data;




        }, function myError(response) {
            $scope.mymemberinfo = response.statusText;
        });

    };

});


