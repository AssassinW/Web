// Code goes here



var myApp = angular.module('myApp', ['angularUtils.directives.dirPagination','ui.codemirror']);

function controller1($rootScope){
  $rootScope.favoritelegis = JSON.parse(localStorage.getItem('favoriteLegis'));
  $rootScope.favoritebills = JSON.parse(localStorage.getItem('favoriteBills'));
  $rootScope.favoritecomms = JSON.parse(localStorage.getItem('favoriteComms'));
  console.log($rootScope.favoritelegis);
  $rootScope.inFavLegis = function(x){
    var ret = false;
    if($rootScope.favoritelegis==null){
      ret = false;
      return ret;
    }
    $rootScope.favoritelegis.forEach(function(element){
      if(x.bioguide_id==element.bioguide_id){
        console.log(element.bioguide_id);
        ret = true;
      }
    });
    return ret;
  };
  $rootScope.addFavLegis = function(x){
    if($rootScope.favoritelegis == null)$rootScope.favoritelegis = [];
    var obj = new Object();
    obj.birthday = x.birthday;
    obj.party = x.party;
    obj.bioguide_id = x.bioguide_id;
    obj.chamber = x.chamber;
    obj.first_name = x.first_name;
    obj.last_name = x.last_name;
    obj.office = x.office;
    obj.phone = x.phone;
    obj.state = x.state;
    obj.state_name = x.state_name;
    obj.term_end = x.term_end;
    obj.term_start = x.term_start;
    obj.calTerm = x.calTerm;
    obj.twitter_id = x.twitter_id;
    obj.title = x.title;
    obj.fax = x.fax;
    obj.facebook_id = x.facebook_id;
    obj.website = x.website;
    obj.email = x.email;
    $rootScope.favoritelegis.push(obj);
    localStorage.setItem('favoriteLegis',JSON.stringify($rootScope.favoritelegis));
    //console.log(localStorage.getItem('favoriteLegis'));
  };
  $rootScope.delFavLegis = function(x){
    $rootScope.favoritelegis.forEach(function(element){
      if(x.bioguide_id==element.bioguide_id){
        $rootScope.favoritelegis.splice($rootScope.favoritelegis.indexOf(element),1);
      }
    });
    localStorage.setItem('favoriteLegis',JSON.stringify($rootScope.favoritelegis));
  };
  $rootScope.inFavBills = function(x){
    var ret = false;
    if($rootScope.favoritebills==null){
      ret = false;
      return ret;
    }
    $rootScope.favoritebills.forEach(function(element){
      if(x.bill_id==element.bill_id)ret = true;
    });
    return ret;
  };
  $rootScope.addFavBills = function(x){
    if($rootScope.favoritebills == null)$rootScope.favoritebills = [];
    var obj = new Object();
    obj.bill_id = x.bill_id;
    obj.title = x.title;
    obj.bill_type = x.bill_type;
    obj.sponsor = new Object();
    obj.sponsor.first_name = x.sponsor.first_name;
    obj.sponsor.last_name = x.sponsor.last_name;
    obj.sponsor.title = x.sponsor.title;
    obj.chamber = x.chamber;
    obj.status = x.status;
    obj.introduced_on = x.introduced_on;
    obj.version = x.version;
    obj.url = x.url;
    obj.frame = x.frame;
    $rootScope.favoritebills.push(obj);
    localStorage.setItem('favoriteBills',JSON.stringify($rootScope.favoritebills));
    //console.log(localStorage.getItem('favoriteBills'));
  };
  $rootScope.delFavBills = function(x){
    $rootScope.favoritebills.forEach(function(element){
      if(x.bill_id==element.bill_id){
        $rootScope.favoritebills.splice($rootScope.favoritebills.indexOf(element),1);
      }
    });
    localStorage.setItem('favoriteBills',JSON.stringify($rootScope.favoritebills));
  };
  $rootScope.inFavComms = function(x){
    var ret = false;
    if($rootScope.favoritecomms==null){
      ret = false;
      return ret;
    }
    $rootScope.favoritecomms.forEach(function(element){
      if(x.committee_id==element.committee_id)ret = true;
    });
    return ret;
  };
  $rootScope.addFavComms = function(x){
    if($rootScope.favoritecomms == null)$rootScope.favoritecomms = [];
    var obj = new Object();
    obj.name = x.name;
    obj.chamber = x.chamber;
    obj.committee_id = x.committee_id;
    obj.parent_committee_id = x.parent_committee_id;
    obj.phone = x.phone;
    obj.office = x.office;
    $rootScope.favoritecomms.push(obj);
    localStorage.setItem('favoriteComms',JSON.stringify($rootScope.favoritecomms));
    //console.log(localStorage.getItem('favoriteComms'));
  };
  $rootScope.delFavComms = function(x){
    $rootScope.favoritecomms.forEach(function(element){
      if(x.bill_id==element.bill_id){
        $rootScope.favoritecomms.splice($rootScope.favoritecomms.indexOf(element),1);
      }
    });
    localStorage.setItem('favoriteComms',JSON.stringify($rootScope.favoritecomms));
  };
}

function MyController($scope,$rootScope,$sce,$http,$window) {
  $scope.senate = 'senate';
  $scope.house = 'house';
  $scope.currentPage = 1;
  $scope.pageSize = 10;

  $http.get('./serv.php?search_field=legislators').success(function(response){
    $scope.legislators=response.results;
  });
  $http.get('./serv.php?search_field=newbills').success(function(response){
    $scope.newbills = response.results;

  });
  $http.get('./serv.php?search_field=actbills').success(function(response){
    $scope.actbills = response.results;
  });
  $rootScope.data = new Object();
  $rootScope.bill = new Object();
  $rootScope.date = new Date();
  $rootScope.mon = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  $scope.legisTransfer=function(x){
    $rootScope.data.birthday = x.birthday.split("-");
    $rootScope.data.party = x.party;
    $rootScope.data.bioguide_id = x.bioguide_id;
    $rootScope.data.chamber = x.chamber;
    $rootScope.data.first_name = x.first_name;
    $rootScope.data.last_name = x.last_name;
    $rootScope.data.office = x.office;
    $rootScope.data.phone = x.phone;
    $rootScope.data.state = x.state;
    $rootScope.data.state_name = x.state_name;
    $rootScope.data.term_end = x.term_end.split("-");
    $rootScope.data.term_start = x.term_start.split("-");
    $rootScope.data.title = x.title;
    $rootScope.data.fax = x.fax;
    $rootScope.data.facebook_id = x.facebook_id;
    $rootScope.data.twitter_id = x.twitter_id;
    $rootScope.data.website = x.website;
    $rootScope.data.email = x.oc_email;
    $rootScope.data.term_start[1]=$rootScope.mon[parseInt($rootScope.data.term_start[1])-1];
    $rootScope.data.term_end[1]=$rootScope.mon[parseInt($rootScope.data.term_end[1])-1];
    $rootScope.data.birthday[1]=$rootScope.mon[parseInt($rootScope.data.birthday[1])-1];
    var dict={Jan:0,Feb:31,Mar:59,Apr:90,May:120,Jun:151,Jul:181,Aug:212,Sep:243,Oct:273,Nov:304,Dec:334};
    var base=[1,1,2010];
    var startDay = (parseInt($rootScope.data.term_start[0])-base[2])*365+dict[$rootScope.data.term_start[1]]+parseInt($rootScope.data.term_start[2])-base[1];
    var endDay = (parseInt($rootScope.data.term_end[0])-base[2])*365+dict[$rootScope.data.term_end[1]]+parseInt($rootScope.data.term_end[2])-base[1];
    var curDay = ($rootScope.date.getFullYear()-base[2])*365+$rootScope.date.getMonth()*30-30+$rootScope.date.getDate()-base[1];
    $rootScope.data.calTerm = Math.floor(100*(curDay-startDay)/(endDay-startDay));
    $rootScope.data.calTerm = $rootScope.data.calTerm.toString();
    var url = "http://104.198.0.197:8080/bills?apikey=d93a0a26177644898386b4d56fbfb3d1&per_page=5&sponsor_id=";
    url=url.concat($rootScope.data.bioguide_id);
    url=url.concat("&callback=JSON_CALLBACK");
    $http.jsonp(url).success(function(data,status,headers,config){
      $rootScope.data.bills=data.results;
    });
    url = "http://104.198.0.197:8080/committees?apikey=d93a0a26177644898386b4d56fbfb3d1&per_page=5&member_ids=";
    url=url.concat($rootScope.data.bioguide_id);
    url=url.concat("&callback=JSON_CALLBACK");
    $http.jsonp(url).success(function(data,status,headers,config){
      $rootScope.data.committees=data.results;
    });
  };
  $scope.legisTransfer2=function(x){
    $rootScope.data.birthday=x.birthday;
    $rootScope.data.party = x.party;
    $rootScope.data.chamber=x.chamber;
    $rootScope.data.first_name=x.first_name;
    $rootScope.data.last_name=x.last_name;
    $rootScope.data.office=x.office;
    $rootScope.data.term_start=x.term_start;
    $rootScope.data.term_end=x.term_end;
    $rootScope.data.title=x.title;
    $rootScope.data.fax=x.fax;
    $rootScope.data.facebook_id=x.facebook_id;
    $rootScope.data.twitter_id=x.twitter_id;
    $rootScope.data.website=x.website;
    $rootScope.data.email=x.email;
    $rootScope.data.calTerm=x.calTerm;
    $rootScope.data.state_name=x.state_name;
    $rootScope.data.bioguide_id=x.bioguide_id;
    var url = "http://104.198.0.197:8080/bills?apikey=d93a0a26177644898386b4d56fbfb3d1&per_page=5&sponsor_id=";
    url=url.concat($rootScope.data.bioguide_id);
    url=url.concat("&callback=JSON_CALLBACK");
    $http.jsonp(url).success(function(data,status,headers,config){
      console.log(data);
      $rootScope.data.bills=data.results;
    });
    url = "http://104.198.0.197:8080/committees?apikey=d93a0a26177644898386b4d56fbfb3d1&per_page=5&member_ids=";
    url=url.concat($rootScope.data.bioguide_id);
    url=url.concat("&callback=JSON_CALLBACK");
    $http.jsonp(url).success(function(data,status,headers,config){
      $rootScope.data.committees=data.results;
    });
  }
  $window.onbeforeunload = function(){
    console.log("this is a test");
    localStorage.setItem('favoriteLegis',JSON.stringify($rootScope.favoritelegis));
  }
  $scope.billTransfer = function(x){
    $rootScope.bill.bill_id = x.bill_id;
    $rootScope.bill.title = x.official_title;
    $rootScope.bill.bill_type = x.bill_type;
    $rootScope.bill.sponsor = x.sponsor;
    $rootScope.bill.chamber = x.chamber;
    $rootScope.bill.status = x.history.active==true?"Active":"New";
    $rootScope.bill.introduced_on = x.introduced_on.split("-");
    $rootScope.bill.version = x.last_version.version_name;
    $rootScope.bill.url = x.last_version.urls.pdf;
    $rootScope.bill.frame = $sce.trustAsResourceUrl($rootScope.bill.url);
    $rootScope.bill.introduced_on[1]=$rootScope.mon[parseInt($rootScope.bill.introduced_on[1])-1];
  }
  $scope.pageChangeHandler = function(num) {
      console.log('meals page changed to ' + num);
  };


}

function OtherController($scope) {
  $scope.pageChangeHandler = function(num) {
    console.log('going to page ' + num);
  };
}
function Controller3($scope,$http){
  $scope.commSenate = 'senate';
  $scope.commHouse = 'House';
  $scope.joint = 'joint'
  $http.get('./serv.php?search_field=committees').success(function(response){
    $scope.committees=response.results;
  });
  //$scope.committees = JSON.parse(localStorage.getItem('commData'));
  $scope.pageChangeHandler = function(num) {
      console.log('meals page changed to ' + num);
  };
}

myApp.controller('MyController', MyController);
myApp.controller('OtherController', OtherController);
myApp.controller('Controller3',Controller3);
myApp.controller('controller1',controller1);
