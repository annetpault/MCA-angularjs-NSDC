var app = angular.module('campus360', []);

app.controller("dashboardcontroller", function ($scope) {


    $scope.collegename = "FISat";
    $scope.totalStudents = 1200;
    $scope.totalFaculty = 85;

    console.log("dashboard controller is loaded");

    $scope.students = [
        "Annet", "Sumedha", "Taniya", "Agnet"
    ];
    $scope.showstudents = false;

    $scope.showDashboard = true;

    $scope.fees = 25600;

    $scope.today = new Date();

    $scope.departments = [
        "CSE","MCA","MBA","EEE","IMCA","EIE"
    ];

    $scope.selectedDepartment = "CSE";

    $scope.addstudent = function () {

        $scope.totalStudents++;

    };
});
