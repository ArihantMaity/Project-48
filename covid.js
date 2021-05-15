class Covid{
    constructor(){}

        async getCovidResponse(){
            
               var ans = [];
                //for(var i = start;i<=end;i++){
                    var response = await fetch("https://api.covid19india.org/data.json");
                    var responseJSON = await response.json();
                   var time = await responseJSON.cases_time_series[0];
                   var date1 = await time.date;
                   console.log(date1);
                //}
           
  }
}