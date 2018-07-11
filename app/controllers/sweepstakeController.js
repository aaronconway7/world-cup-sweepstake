app.controller("sweepstakeController", function($scope, $http){
    $scope.teams = [];
    $scope.players = [];
    $scope.split = {};
    $http.get("https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json")
    .then(function(response){
        $scope.wcData = response.data;
        for (let i = 0; i < $scope.wcData.teams.length; i++) {
            let team = {
                "name" : $scope.wcData.teams[i].name,
                "flag" : $scope.wcData.teams[i].flag
            };
            $scope.teams.push(team);
        }
    });
    $scope.removePlayer = function(i){
        $scope.players.splice(i, 1);
    };
    $scope.getRandTeam = function(){
        let randNo = Math.floor(Math.random() * $scope.teams.length-1);
        $scope.randTeam =  $scope.teams[randNo];
        return $scope.randTeam;
    };
    $scope.initSweepstake = function(){
        for (let i = 0; i < $scope.players.length; i++) {
            $scope.split[$scope.players[i]] = [];
        }
    };
    $scope.resetTeams = function(){
        $scope.teams = [];
        for (let i = 0; i < $scope.wcData.teams.length; i++) {
            let team = {
                "name" : $scope.wcData.teams[i].name,
                "flag" : $scope.wcData.teams[i].flag
            };
            $scope.teams.push(team);
        }
    };
    $scope.reset = function(){
        $scope.players = [];
        for (let i = 0; i < $scope.wcData.teams.length; i++) {
            let team = {
                "name" : $scope.wcData.teams[i].name,
                "flag" : $scope.wcData.teams[i].flag
            };
            $scope.teams.push(team);
        }
        $scope.split = [];
    };
    $scope.generateSweepstake = function(){
        $scope.resetTeams();
        $scope.initSweepstake();
        for (let i = 0; i < $scope.players.length; i++) {
            $scope.split[$scope.players[i]].push($scope.getRandTeam());
            let index = $scope.teams.indexOf($scope.randTeam);
            if (index > -1) {
                $scope.teams.splice(index, 1);
            }            
        }
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