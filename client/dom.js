console.log("goooo")
function event1(e){
    var country = document.getElementById("country").value;
    var city = document.getElementById("city").value;
     fetch(`/searchPraytimes?city=${city}&country=${country}`)
    .then(response => {
      return response.json();
    })
    .then(function (allDataarr){
        // var allDataarr= data;
        var time = allDataarr[0];
        var bdate = allDataarr[1];
        var hijridate = allDataarr[2];

        var parentContainer = document.getElementById("parentid");
        parentContainer.innerHTML="";

        var infoParent = document.createElement("div");
        infoParent.setAttribute('id','info');

        var hijriDateElements= document.createElement("ul");
        hijriDateElements.setAttribute('class','hijriDate')
        hijridate.forEach(element => {
          // console.log('element',element);
                var hijriDateElement= document.createElement("li");
                hijriDateElement.textContent="hijri Date:  "+element
                hijriDateElement.setAttribute('class','hijriDateElement');
                hijriDateElements.appendChild(hijriDateElement);

        });
          infoParent.appendChild(hijriDateElements);

        var bdateElements= document.createElement("ul");
        bdateElements.setAttribute('class','bDate')
        bdate.forEach(element => {
          // console.log('element',element);
                var bdateElement= document.createElement("li");
                bdateElement.textContent="Gregorian calendar:  "+element
                bdateElement.setAttribute('class','bDateElement');
                bdateElements.appendChild(bdateElement);

        });
        infoParent.appendChild(bdateElements);

        var timeElements= document.createElement("ul");
          timeElements.setAttribute('class','time')
        time.forEach(element => {
          console.log('element',element);
           var dateString = "Fajer =" +element.Fajr + "Sunrise =" +element.Sunrise
           + "Dhuhr=" +element.Dhuhr+ "Dhuhr =" +element.Dhuhr + "Asr =" +element.Asr
           + "Maghrib=" +element.Maghrib + "Sunset =" +element.Sunset + "Isha ="+element.Isha
           + "Midnight =" +element.Midnight
                var timeElement= document.createElement("li");
                timeElement.setAttribute('class','timeElement')
                timeElement.textContent= dateString;
                // timeElement.textContent=element
                timeElements.appendChild(timeElement);
        });
        infoParent.appendChild(timeElements);

        parentContainer.appendChild(infoParent);
    })
  }
