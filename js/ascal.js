
    var body = "";
    var asdate = "";
    var newMoons = new Array();
    var fullMoons = new Array();
    var monthNames = new Array("Æfterra Ġēola", "Solmōnaþ", "Hreðmōnaþ", "Ēosturmōnaþ", "Þrimilcemōnaþ", "Ærra Liða", "Þriliða", "Æfterra Liða", "Weodmōnaþ", "Hāliġmōnaþ", "Wintermōnaþ", "Blōtmōnaþ", "Ærra Ġēola");
    var convert = new Date(1582, 9, 15);
    
    $(document).ready(function() {
        $("#chosendate").on('change', function() {
            var d = new Date($("#chosendate").val());
            var today = new Date();
            var year = today.getFullYear();
            d.setTime(d.getTime()+24*1000*60*60);
            if (d.getFullYear() != year) {
                clear();
                makeCal(d.getFullYear());
            }
            txt = d.toDateString()+" is the "+getASDate(d);
            $("#conv").html(txt);
            return false;
            //alert(txt);
        });
      body = $('body').html();
      var d = new Date();
      var yr = d.getFullYear();
      makeCal(yr);
    });
    
    function clear() {
      //$("body").html(body);
      $("#months-table").html("<tr> \n\
<th>Month</th> \n\
<th>Starts</th> \n\
<th>Full Moon</th>\n\
</tr>\n");
      
      $("#holidays-table").html("<tr> \n\
<th>Holiday</th> \n\
<th>Date</th> \n\
<th>Anglo-Saxon Date</th> \n\
</tr>\n");
    }
    
    function makeCal(year) {
      $("#submit").on('click', function() {
        //e.preventDefault();
        var str = $("#yearInput").val();
        var year = parseInt(str, 10);
        if (isNaN(year)) {
          alert("The input is invalid. Using the current year instead.");
          d = new Date();
          year = d.getFullYear();
        }
        clear();
        makeCal(year);
        return false;
      });
      newMoons = [];
      fullMoons = [];
      monthNames = ["Æfterra Ġēola", "Solmōnaþ", "Hreðmōnaþ", "Ēosturmōnaþ", "Þrimilcemōnaþ", "Ærra Liða", "Þriliða", "Æfterra Liða", "Weodmōnaþ", "Hāliġmōnaþ", "Wintermōnaþ", "Blōtmōnaþ", "Ærra Ġēola"];
      var date = new Date(A.Get.winterSolstice(year-1));
      var today = new Date();
      var leap = true;
      for(let i=0; i<13; i++) {
        date = nextNewMoon(date);
        date.setTime(date.getTime()+36*1000*60*60);
        newMoons.push(new Date(date));
        date = nextFullMoon(date);
        fullMoons.push(new Date(date));
      }
      var yule = new Date(A.Get.winterSolstice(year));
      var midsummer = new Date(A.Get.summerSolstice(year));
      var easter = new Date(fullMoons[3]);
      if (newMoons[12] > yule) {
        leap = false;
        newMoons.pop();
        fullMoons.pop();
        monthNames.splice(6, 1);
      }
      
      if (leap==true) {
        $('#leap').html("<p>Since there are thirteen new moons between the winter solstices of the previous year and the current year, this year is a leap year.</p>");
        var winterfylleth = new Date(fullMoons[10]);
      } else {
        var winterfylleth = new Date(fullMoons[9]);
      }
      var txt="<tr>\n<td>Ēosturdæġ</td>\n<td>"+easter.toDateString()+"</td>\n<td>"+getASDate(easter)+"</td></tr>";
      txt += "<tr>\n<td>Midsumor</td>\n<td>"+midsummer.toDateString()+"</td>\n<td>"+getASDate(midsummer)+"</td></tr>";
      txt += "<tr>\n<td>Winterfylleþ</td>\n<td>"+winterfylleth.toDateString()+"</td>\n<td>"+getASDate(winterfylleth)+"</td></tr>";
      txt += "<tr>\n<td>Ġēola</td>\n<td>"+yule.toDateString()+"</td>\n<td>"+getASDate(yule)+"</td></tr>";
      $('#holidays-table').append(txt);

      $('h1').text("Anglo-Saxon Calendar for "+String(year));
      for(let i=0; i<newMoons.length; i++) {
        txt = "<tr>\n<td>"+monthNames[i]+"</td>\n<td>"+newMoons[i].toDateString()+"</td>\n<td>"+fullMoons[i].toDateString()+"</td>\n</tr>\n";
        $('#months-table').append(txt);
      }
      if (asdate == "") {
        asdate = getASDate(today);
      }
      $("#today").html("Today is the "+asdate+".");
      
      if (year<1583) {
        alert("Dates before the switch from the Julian Calendar to the Gregorian Calendar will use the Julian date that was in use at the time.");
      }
      today.setFullYear(year);
      if (today.getDate() < 10) {
          day = "0"+today.getDate();
      } else {
          day = today.getDate().toString();
      }
      ts = today.getFullYear().toString()+"-"+(today.getMonth()+1).toString()+"-"+day;
      
      $("#chosendate").attr("value", ts);
      
    }
    
    function dateString(d) {
      var months=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      var dstr = String(d.getDate())+" "+months[d.getMonth()]+" "+String(d.getFullYear());
      return dstr;
    }
    
    function nextNewMoon(date) {
      var j12000 = new Date(Date.UTC(2000, 0, 1));
      var nm2000 = new Date(2000, 0, 6, 13, 14);
      var N = Math.ceil((date.getTime()-nm2000.getTime())/(1000*60*60*24)/29.5305888610);
      var d = (5.597661+29.5305888610*N+(102.026*10**-12)*N**2)+(-0.000739-(235*10**-12)*N**2);
      date.setTime(j12000.getTime()+d*86400000);
      if (date<convert) {
        date = toJulian(date);
      }
      return date;
    }
    
    function nextFullMoon(date) {
      var j12000 = new Date(Date.UTC(2000, 0, 1));
      var fm2000= new Date(2000, 0, 20, 23, 41)
      var N = Math.ceil((date.getTime()-fm2000.getTime())/(1000*60*60*24)/29.5305888610);
      var d = (20.362000+29.5305888610*N+(102.026*10**-12)*N**2)+(-0.000739-(235*10**-12)*N**2);
      date.setTime(j12000.getTime()+d*86400000);
      if (date<convert) {
        date = toJulian(date);
      }
      return date;
    }
    
    function getASDate(d) {
      i=0;
      while (d>newMoons[i]) {
        i++;
      }
      i--;
      newMoon = new Date(newMoons[i]);
      newMoon.setHours(0);
      newMoon.setMinutes(0);
      newMoon.setSeconds(0);
      newMoon.setMilliseconds(0);
      d.setHours(0);
      d.setMinutes(0);
      d.setSeconds(0);
      d.setMilliseconds(0);
      var day = ((d.getTime()-newMoon.getTime())/86400000)+1; 
      var dateStr = getOrdinal(Math.round(day))+" of "+monthNames[i];
      return dateStr;
    }
    
    function convertDate(d) {
    }
    
    function toJulian(d) {
      year = d.getFullYear();
      century = Math.floor(year/100);
      offset = Math.ceil(century*0.75)-2;
      var j = new Date(d);
      j.setDate(d.getDate()-offset);
      return j;
    }
    
    function getOrdinal(n) {
      if (n%100<20 && n%100>10) {
        str = String(n)+"th";
      } else if (n%10==1) {
        str = String(n)+"st";
      } else if (n%10==2) {
        str = String(n)+"nd";
      } else if (n%10==3) {
        str = String(n)+"rd";
      } else {
        str = String(n)+"th";
      }
      return str;
   }