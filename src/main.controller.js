angular
  .module('vision')
  .controller('Main', main);


function main(){
  var vm = this;
  vm.boroughs = boroughs;

  vm.boroughIndex = 0;
  vm.getBoroughResult = getBoroughResult;
  vm.showContent = false;
  vm.userSelections = {};

  function getBoroughResult(res, borough){
    userSelections[borough] = {
      canAfford: res
    }
  }

 var boroughs = [
         'City of London',
         'Barking and Dagenham',
         'Barnet',
         'Bexley',
         'Brent',
         'Bromley',
         'Camden',
         'Croydon',
         'Ealing',
         'Enfield',
         'Greenwich',
         'Hackney',
         'Hammersmith and Fulham',
         'Haringey',
         'Harrow',
         'Havering',
         'Hillingdon',
         'Hounslow',
         'Islington',
         'Kensington and Chelsea',
         'Kingston upon Thames',
         'Lambeth',
         'Lewisham',
         'Merton',
         'Newham',
         'Redbridge',
         'Richmond upon Thames',
         'Southwark',
         'Sutton',
         'Tower Hamlets',
         'Waltham Forest',
         'Wandsworth',
         'Westminster'
  ];


}
