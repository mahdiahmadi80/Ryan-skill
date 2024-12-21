
var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {


  $scope.courses = [
    { title: "آموزش", caption: "آموزش برنامه نویسی c#", imgsrc: "../img/ca1ccb94-ce7c-4449-a2c9-78c5f0c75ba7.png", time: "50ساعت", plicense: "true", license: "دارای گواهینامه و آزمون", price: "590هزار تومان", link: "../html/course.html" },
    { title: "آموزش برنامه نویسی", caption: "آموزش برنامه نویسی c#", imgsrc: "../img/ca1ccb94-ce7c-4449-a2c9-78c5f0c75ba7.png", time: "50ساعت", plicense: "true", license: "دارای گواهینامه و آزمون", price: "590هزار تومان", link: "../html/course.html" },
    { title: "آموزش برنامه نویسی", caption: "آموزش برنامه نویسی c#", imgsrc: "../img/ca1ccb94-ce7c-4449-a2c9-78c5f0c75ba7.png", time: "50ساعت", plicense: "true", license: "دارای گواهینامه و آزمون", price: "590هزار تومان", link: "../html/course.html" },
    { title: "آموزش برنامه نویسی", caption: "آموزش برنامه نویسی c#", imgsrc: "../img/ca1ccb94-ce7c-4449-a2c9-78c5f0c75ba7.png", time: "50ساعت", plicense: "true", license: "دارای گواهینامه و آزمون", price: "590هزار تومان", link: "../html/course.html" },
    { title: "آموزش برنامه نویسی", caption: "آموزش برنامه نویسی c#", imgsrc: "../img/ca1ccb94-ce7c-4449-a2c9-78c5f0c75ba7.png", time: "50ساعت", plicense: "true", license: "دارای گواهینامه و آزمون", price: "590هزار تومان", link: "../html/course.html" },
    { title: "آموزش برنامه نویسی", caption: "آموزش برنامه نویسی c#", imgsrc: "../img/ca1ccb94-ce7c-4449-a2c9-78c5f0c75ba7.png", time: "50ساعت", plicense: "true", license: "دارای گواهینامه و آزمون", price: "590هزار تومان", link: "../html/course.html" },
    { title: "آموزش برنامه نویسی", caption: "آموزش برنامه نویسی c#", imgsrc: "../img/ca1ccb94-ce7c-4449-a2c9-78c5f0c75ba7.png", time: "50ساعت", plicense: "true", license: "دارای گواهینامه و آزمون", price: "590هزار تومان", link: "../html/course.html" },
    { title: "آموزش برنامه نویسی", caption: "آموزش برنامه نویسی c#", imgsrc: "../img/ca1ccb94-ce7c-4449-a2c9-78c5f0c75ba7.png", time: "50ساعت", plicense: "true", license: "دارای گواهینامه و آزمون", price: "590هزار تومان", link: "../html/course.html" },
    { title: "آموزش برنامه نویسی", caption: "آموزش برنامه نویسی c#", imgsrc: "../img/ca1ccb94-ce7c-4449-a2c9-78c5f0c75ba7.png", time: "50ساعت", plicense: "true", license: "دارای گواهینامه و آزمون", price: "590هزار تومان", link: "../html/course.html" },
    { title: "آموزش برنامه نویسی", caption: "آموزش برنامه نویسی c#", imgsrc: "../img/ca1ccb94-ce7c-4449-a2c9-78c5f0c75ba7.png", time: "50ساعت", plicense: "true", license: "دارای گواهینامه و آزمون", price: "590هزار تومان", link: "../html/course.html" },
    { title: "آموزش برنامه نویسی", caption: "آموزش برنامه نویسی c#", imgsrc: "../img/ca1ccb94-ce7c-4449-a2c9-78c5f0c75ba7.png", time: "50ساعت", plicense: "true", license: "دارای گواهینامه و آزمون", price: "590هزار تومان", link: "../html/course.html" },
    { title: "آموزش برنامه نویسی", caption: "آموزش برنامه نویسی c#", imgsrc: "../img/ca1ccb94-ce7c-4449-a2c9-78c5f0c75ba7.png", time: "50ساعت", plicense: "true", license: "دارای گواهینامه و آزمون", price: "590هزار تومان", link: "../html/course.html" },



  ];

  $scope.menucourseslist = [
    { title: "تست",isShow:false,submenu: [{ subitem: "نرم افزار", link: "https://google.com" }, { subitem: "سخت افزار ", link: "" }, { subitem: "مدیریت", link: "" }] },
    { title: "تست",isShow:false,submenu: [{ subitem: "نرم افزار", link: "https://google.com" }, { subitem: "سخت افزار ", link: "" }, { subitem: "مدیریت", link: "" }] },  
    { title: "تست",isShow:false,submenu: [{ subitem: "نرم افزار", link: "https://google.com" }, { subitem: "سخت افزار ", link: "" }, { subitem: "مدیریت", link: "" }] },    
    { title: "تست",isShow:false,submenu: [{ subitem: "نرم افزار", link: "https://google.com" }, { subitem: "سخت افزار ", link: "" }, { subitem: "مدیریت", link: "" }] },
  ];




$scope.filtCrs=function(x){
x.isShow=true;

}



  $scope.coursesbuy = [

    { title: "آموزش برنامه نویسی", caption: "آموزش برنامه نویسی c#", imgsrc: "../img/ca1ccb94-ce7c-4449-a2c9-78c5f0c75ba7.png", time: "50ساعت", plicense: "true", license: "دارای گواهینامه و آزمون", price: "590هزار تومان", link: "../html/course.html" },

    { title: "آموزش برنامه نویسی", caption: "آموزش برنامه نویسی c#", imgsrc: "../img/ca1ccb94-ce7c-4449-a2c9-78c5f0c75ba7.png", time: "50ساعت", plicense: "true", license: "دارای گواهینامه و آزمون", price: "590هزار تومان", link: "../html/course.html" },
    { title: "آموزش برنامه نویسی", caption: "آموزش برنامه نویسی c#", imgsrc: "../img/ca1ccb94-ce7c-4449-a2c9-78c5f0c75ba7.png", time: "50ساعت", plicense: "true", license: "دارای گواهینامه و آزمون", price: "590هزار تومان", link: "../html/course.html" },
    { title: "آموزش برنامه نویسی", caption: "آموزش برنامه نویسی c#", imgsrc: "../img/ca1ccb94-ce7c-4449-a2c9-78c5f0c75ba7.png", time: "50ساعت", plicense: "true", license: "دارای گواهینامه و آزمون", price: "590هزار تومان", link: "../html/course.html" },
    { title: "آموزش برنامه نویسی", caption: "آموزش برنامه نویسی c#", imgsrc: "../img/ca1ccb94-ce7c-4449-a2c9-78c5f0c75ba7.png", time: "50ساعت", plicense: "true", license: "دارای گواهینامه و آزمون", price: "590هزار تومان", link: "../html/course.html" },
    { title: "آموزش برنامه نویسی", caption: "آموزش برنامه نویسی c#", imgsrc: "../img/ca1ccb94-ce7c-4449-a2c9-78c5f0c75ba7.png", time: "50ساعت", plicense: "true", license: "دارای گواهینامه و آزمون", price: "590هزار تومان", link: "../html/course.html" },
    { title: "آموزش برنامه نویسی", caption: "آموزش برنامه نویسی c#", imgsrc: "../img/ca1ccb94-ce7c-4449-a2c9-78c5f0c75ba7.png", time: "50ساعت", plicense: "true", license: "دارای گواهینامه و آزمون", price: "590هزار تومان", link: "../html/course.html" },
    { title: "آموزش برنامه نویسی", caption: "آموزش برنامه نویسی c#", imgsrc: "../img/ca1ccb94-ce7c-4449-a2c9-78c5f0c75ba7.png", time: "50ساعت", plicense: "true", license: "دارای گواهینامه و آزمون", price: "590هزار تومان", link: "../html/course.html" },
    { title: "آموزش برنامه نویسی", caption: "آموزش برنامه نویسی c#", imgsrc: "../img/ca1ccb94-ce7c-4449-a2c9-78c5f0c75ba7.png", time: "50ساعت", plicense: "true", license: "دارای گواهینامه و آزمون", price: "590هزار تومان", link: "../html/course.html" },
    { title: "آموزش برنامه نویسی", caption: "آموزش برنامه نویسی c#", imgsrc: "../img/ca1ccb94-ce7c-4449-a2c9-78c5f0c75ba7.png", time: "50ساعت", plicense: "true", license: "دارای گواهینامه و آزمون", price: "590هزار تومان", link: "../html/course.html" },
    { title: "آموزش برنامه نویسی", caption: "آموزش برنامه نویسی c#", imgsrc: "../img/ca1ccb94-ce7c-4449-a2c9-78c5f0c75ba7.png", time: "50ساعت", plicense: "true", license: "دارای گواهینامه و آزمون", price: "590هزار تومان", link: "../html/course.html" },
    { title: "آموزش برنامه نویسی", caption: "آموزش برنامه نویسی c#", imgsrc: "../img/ca1ccb94-ce7c-4449-a2c9-78c5f0c75ba7.png", time: "50ساعت", plicense: "true", license: "دارای گواهینامه و آزمون", price: "590هزار تومان", link: "../html/course.html" },

  ];

  $scope.coursespage = [

    { title: "جلسه اول", caption: " ایپسوم متن ساختگی با تولید سادگی نامفهوم" },
    { title: "جلسه دوم", caption: " ایپسوم متن ساختگی با تولید سادگی نامفهوم" },
    { title: "جلسه سوم", caption: " ایپسوم متن ساختگی با تولید سادگی نامفهوم" },
    { title: "جلسه چهارم", caption: " ایپسوم متن ساختگی با تولید سادگی نامفهوم" },
    { title: "جلسه پنجم", caption: " ایپسوم متن ساختگی با تولید سادگی نامفهوم" },
    { title: "جلسه ششم", caption: " ایپسوم متن ساختگی با تولید سادگی نامفهوم" },
    { title: "جلسه چهارم", caption: " ایپسوم متن ساختگی با تولید سادگی نامفهوم" },
    { title: "جلسه پنجم", caption: " ایپسوم متن ساختگی با تولید سادگی نامفهوم" },
    { title: "جلسه ششم", caption: " ایپسوم متن ساختگی با تولید سادگی نامفهوم" },

  ];



  // $scope.meeting = [

  //   { title: "جلسه اول" },
  //   { title: "جلسه دوم" },
  //   { title: "جلسه سوم" },
  //   { title: "جلسه چهارم" },
  //   { title: "جلسه پنجم" },
  //   { title: "جلسه ششم" },
  //   { title: "جلسه چهارم" },
  //   { title: "جلسه پنجم" },
  //   { title: "جلسه ششم" },
  // ];
  $scope.dastebandi = [

    { title: "جلسه اول" },
    { title: "جلسه دوم" },
    { title: "جلسه سوم" },
    { title: "جلسه چهارم" },
    { title: "جلسه پنجم" },
    { title: "جلسه ششم" },
    { title: "جلسه چهارم" },
    { title: "جلسه پنجم" },
    { title: "جلسه ششم" },
    { title: "جلسه ششم" },
    { title: "جلسه چهارم" },
    { title: "جلسه پنجم" },
  ];


});
