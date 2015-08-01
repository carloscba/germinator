angular.module('kuApp').service("globalService", function ($interval, $routeParams) {
    
    this.filename = '';
    this.globalData = {
        "nClient"         : 0,
        "nMediaPlan"      : 0,
        "idClient"         : 0,
        "idMediaPlan"      : 0,
        "mediaPlanData"    : [],
        "investmentFields" : [],
        "columns"          : []
    }

    this.setFileName = function(_filename){
        this.filename = _filename;
    }
    this.getFileName = function(){
        return this.filename;
    }    

    this.set = function(data){
        this.globalData = data;
    }

    this.get = function(){
        return this.globalData;
    };

});