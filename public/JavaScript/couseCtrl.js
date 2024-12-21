
var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http) {



  $scope.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results == null) {
      return null;
    }
    else {
      return decodeURI(results[1]) || 0;
    }
  }












  






  // $scope.btnalert=function(){

  // alert($scope.urlParam("id"));
  // };






  $scope.loadcourse = function () {

    $http({
      method: "POST",
      url: "/api/course/infocourse"
    }).then(function mySuccess(response) {
      $scope.myWelcome = response.data;
    }, function myError(response) {
      $scope.myWelcome = response.statusText;
    });

  };


  $scope.addnewcours = () => {
    $http({
      method: 'POST',
      url: '/api/course/add',
      data: {
        "coTitle": $scope.crsaddname,
        "Fk_teID": 1,
        "Fk_insID": 1,
        "coAbstract": $scope.crsaddhashtag,
        "coPrice": $scope.crsaddprice,
        "coImg": $scope.crsaddpicture,
        "coVideo": $scope.crsadddemo,
        "coTime": $scope.crsaddtime
      }
    }).then(function successCallback(response) {

      alert("اضافه شد")

    }, function errorCallback(response) {

    });
  };








  $scope.courseslistload = function () {

    $http({
      method: "POST",
      url: "/api/course/getlist"
    }).then(function mySuccess(response) {
      $scope.listcourses = response.data;
    }, function myError(response) {
      $scope.listcourses = response.statusText;
    });

  };

  $scope.loadcourseselected = function () {

    $http({
      method: "POST",
      url: "/api/course/select",
      data: {

        coID: $scope.urlParam("id")

      }


    }).then(function mySuccess(response) {
      $scope.myWelcome = response.data;




    }, function myError(response) {
      $scope.myWelcome = response.statusText;
    });

  };

  $scope.courseinfo = [
    { id: 1, coursename: "طراحی سایت", classes: "کامپیوتر", insname: " موسسه رایان", techername: "سعید میرزایی", star: 4.8, imgsrc: "../img/ca1ccb94-ce7c-4449-a2c9-78c5f0c75ba7.png", time: "90ساعت", plicense: "true", license: "دارای گواهینامه و آزمون", price: " 900هزار تومان", link: "../html/course.html", sessions: "6 جلسه", Summary: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،" },
  ];

  $scope.meeting = [

    { title: "جلسه اول", caption: " ایپسوم متن ساختگی با تولید سادگی نامفهوم", isChecked: false, subitems: [{ file: "فایل جلسه اول", link: "index.html" }, { file: "جزوه جلسه اول", link: "index.html" }] },
    { title: "جلسه دوم", caption: " ایپسوم متن ساختگی با تولید سادگی نامفهوم", isChecked: false, subitems: [{ file: "فایل جلسه دوم", link: "index.html" }, { file: "جزوه جلسه دوم", link: "index.html" }] },
    { title: "جلسه سوم", caption: " ایپسوم متن ساختگی با تولید سادگی نامفهوم", isChecked: false, subitems: [{ file: "فایل جلسه سوم", link: "index.html" }, { file: "جزوه جلسه سوم", link: "index.html" }] },
    { title: "جلسه چهارم", caption: " ایپسوم متن ساختگی با تولید سادگی نامفهوم", isChecked: false, subitems: [{ file: "فایل جلسه چهارم", link: "index.html" }, { file: "جزوه جلسه چهارم", link: "index.html" }] },
    { title: "جلسه پنجم", caption: " ایپسوم متن ساختگی با تولید سادگی نامفهوم", isChecked: false, subitems: [{ file: "فایل جلسه پنجم", link: "index.html" }, { file: "جزوه جلسه پنجم", link: "index.html" }] },
    { title: "جلسه ششم", caption: " ایپسوم متن ساختگی با تولید سادگی نامفهوم", isChecked: false, subitems: [{ file: "فایل جلسه ششم", link: "index.html" }, { file: "جزوه جلسه ششم", link: "index.html" }] },
    { title: "جلسه چهارم", caption: " ایپسوم متن ساختگی با تولید سادگی نامفهوم", isChecked: false, subitems: [{ file: "فایل جلسه هفتم", link: "index.html" }, { file: "جزوه جلسه هفتم", link: "index.html" }] },
    { title: "جلسه پنجم", caption: " ایپسوم متن ساختگی با تولید سادگی نامفهوم", isChecked: false, subitems: [{ file: "فایل جلسه هشتم", link: "index.html" }, { file: "جزوه جلسه هشتم", link: "index.html" }] },
    { title: "جلسه ششم", caption: " ایپسوم متن ساختگی با تولید سادگی نامفهوم", isChecked: false, subitems: [{ file: "فایل جلسه نهم", link: "index.html" }, { file: "جزوه جلسه نهم", link: "index.html" }] },
  ];

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

  $scope.menucourseslist = [
    { title: "تست", isShow: false, submenu: [{ subitem: "نرم افزار", link: "https://google.com" }, { subitem: "سخت افزار ", link: "" }, { subitem: "مدیریت", link: "" }] },
    { title: "تست", isShow: false, submenu: [{ subitem: "نرم افزار", link: "https://google.com" }, { subitem: "سخت افزار ", link: "" }, { subitem: "مدیریت", link: "" }] },
    { title: "تست", isShow: false, submenu: [{ subitem: "نرم افزار", link: "https://google.com" }, { subitem: "سخت افزار ", link: "" }, { subitem: "مدیریت", link: "" }] },
    { title: "تست", isShow: false, submenu: [{ subitem: "نرم افزار", link: "https://google.com" }, { subitem: "سخت افزار ", link: "" }, { subitem: "مدیریت", link: "" }] },
  ];

  $scope.filtCrs = function (x) {
    x.isShow = true;
  }








  $scope.detailsession = () => {
    item.isChecked = true;
    var a = document.getElementsByClassName(".meeting-nu");
  }
});

// $(function() {
// 	var Accordion = function(el, multiple) {
// 		this.el = el || {};
// 		this.multiple = multiple || false;

// 		// Variables privadas
// 		var links = this.el.find('.link');
// 		// Evento
// 		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
// 	}

// 	Accordion.prototype.dropdown = function(e) {
// 		var $el = e.data.el;
// 			$this = $(this),
// 			$next = $this.next();

// 		$next.slideToggle();
// 		$this.parent().toggleClass('open');

// 		if (!e.data.multiple) {
// 			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
// 		};
// 	}

// 	var accordion = new Accordion($('#accordion'), false);
// });
