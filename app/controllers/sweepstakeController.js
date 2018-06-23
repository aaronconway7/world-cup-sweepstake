app.controller("sweepstakeController", function($scope, $http){
    $scope.teams = [];
    $scope.players = [];
    $scope.split = {};
    $http.get("https://raw.githubusercontent.com/openfootball/world-cup.json/master/2018/worldcup.teams.json")
    .then(function(response){
        $scope.wcTeamData = response.data;
        for (let i = 0; i < $scope.wcTeamData.teams.length; i++) {
            $scope.teams.push($scope.wcTeamData.teams[i].name);
        }
    });
    $scope.removePlayer = function(i){
        $scope.players.splice(i, 1);
    };
    $scope.getRandTeam = function(){
        var randNo = Math.floor(Math.random() * $scope.teams.length-1);
        // var randNo = Math.random() * (32 - 0) + 0;
        $scope.randTeam =  $scope.teams[randNo];
        return $scope.randTeam;
    };
    $scope.initSweepstake = function(){
        for (let i = 0; i < $scope.players.length; i++) {
            $scope.split[$scope.players[i]] = [];
        }
    };
    $scope.generateSweepstake = function(){
        $scope.resetTeams();
        $scope.initSweepstake();
        for (let i = 0; i < $scope.players.length; i++) {
            $scope.split[$scope.players[i]].push($scope.getRandTeam());
            var index = $scope.teams.indexOf($scope.randTeam);
            if (index > -1) {
                $scope.teams.splice(index, 1);
            }
        }
    };
    $scope.resetTeams = function(){
        $scope.teams = [];
        for (let i = 0; i < $scope.wcTeamData.teams.length; i++) {
            $scope.teams.push($scope.wcTeamData.teams[i].name);
        }
    };
    $scope.reset = function(){
        $scope.players = [];
        $scope.teams = [];
        for (let i = 0; i < $scope.wcTeamData.teams.length; i++) {
            $scope.teams.push($scope.wcTeamData.teams[i].name);
        }
        $scope.split = [];
    };
});

app.filter('range', function() {
    return function(val, range) {
        range = parseInt(range);
        for (var i=0; i<range; i++)
            val.push(i);
        return val;
    };
});