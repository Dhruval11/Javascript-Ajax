function loadData(){
  var url = "http://ergast.com/api/f1/2014/driverStandings.json";
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
      var data = JSON.parse(xhr.responseText);
      console.log(data);
      
      var a = data.MRData.StandingsTable.StandingsLists;
      for(var i in a){
        
        var b = a[i].DriverStandings;
        for(var j=0; j<b.length; j++){
          
          document.getElementById('p2').innerHTML += b[j].Driver.givenName + '<br>';
          document.getElementById('p1').innerHTML += b[j].position + '<br>'; 
          document.getElementById('p3').innerHTML += b[j].Driver.code + '<br>';
          document.getElementById('p4').innerHTML += b[j].Driver.familyName + '<br>';
        }
      }
    }
  }
  xhr.open('GET', url, true);
  xhr.send();
}