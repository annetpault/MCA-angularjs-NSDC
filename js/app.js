var app =angular.module('campus360',[]);

app.controller("dashboardcontoller",function($scope){


    $scope.collegename="FISAT";
    $scope.totalStudents=1200;
    $scope.totalFaculty=85;

    console.log("dashboard controller is loaded");

    $scope.students=[
        "Annet","Sumedha","Taniya","Agnet"
    ];

    $scope.addstudent=function(){
        $scope.totalstudents++;
    };
});

