//create a object of  XMLHttprequest
var request = new XMLHttpRequest()
var url ="https://restcountries.eu/rest/v2/all";
//initialize newly created request
request.open('GET',url,true);
//send request to server
request.send();
//execute callback function after transaction is complete 
request.onload  = function()
{
    var data =JSON.parse(this.response);
    for (var i in data)
    {
      console.log(i+"."+data[i].name);
    }
    
}

