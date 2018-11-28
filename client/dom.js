    var country = document.getElementById("country").value;
    var city = document.getElementById("city").value;

     fetch(`/searchPraytimes?city=${city}&country=${country}`)
    .then(response => {
      return response.json();
    })
    .then(function (data){
        var allDataarr= data;
        var time = allDataarr[0];
        var bdate = allDataarr[1];
        var hijridate = allDataarr[2];

        var parentContainer = document.getElementById("parentid");
        var countryName= document.createElement("p");
        countryName.setAttribute('class','country')
        var cityName= document.createElement("p");
        cityName.setAttribute('class','city')

        countryName.appendChild(parentContainer);
        cityName.appendChild(parentContainer);

        var infoParent = document.createElement("div");
        infoParent.setAttribute('id','info');

        hijridate.forEach(element => {
            var hijriDate= document.createElement("h3");
                hijriDate.setAttribute('class','hijriDate')
                hijriDate.appendChild(infoParent);
        });
        bdate.forEach(element => {
            var bDate= document.createElement("h3");
                bDate.setAttribute('class','bDate')
                bDate.appendChild(infoParent);
        });
        time.forEach(element => {
            var timeDiv= document.createElement("div");
                timeDiv.setAttribute('class','time');
                timeDiv.appendChild(infoParent);
        });
        infoParent.appendChild(parentContainer);
    })
