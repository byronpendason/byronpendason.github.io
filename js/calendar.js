"use strict";var Julian={toDate:function(e){return function jdToDate(e){if(isNaN(e)||e<0)throw"requires jd >= 0";e+=.5;var t=Math.floor(e),a=e%1,r=t;if(t>=2291161){var n=Math.floor((100*t-186721625)/3652425);r+=1+n-Math.floor(n/4)}var o=r+1524,l=Math.floor((100*o-12210)/36525),u=Math.floor(36525*l/100),c=Math.floor(1e4*(o-u)/306001),i=o-u-Math.floor(306001*c/1e4),f=c<14?c-1:c-13,h=f>2?l-4716:l-4715,M=Math.floor(24*a),s=Math.floor(1440*a%60),v=Math.round(86400*a%60);return new Date(Date.UTC(h,f-1,i,M,s,v))}(e)}},Dynamical={toUniversal:function(e){return function dynamicalToUniversal(e){if(!(e instanceof Date))throw"requires Date object";var t,a=e.getUTCFullYear(),r=(a-2e3)/100;return a<948?t=2177+r*(497+44.1*r):a<1620||a>=2e3?(t=102+r*(102+25.3*r),a>=2e3&&a<2100&&(t+=.37*(a-2100))):t=[121,112,103,95,88,82,77,72,68,63,60,56,53,51,48,46,44,42,40,38,35,33,31,29,26,24,22,20,18,16,14,12,11,10,9,8,7,7,7,7,7,7,8,8,9,9,9,9,9,10,10,10,10,10,10,10,10,11,11,11,11,11,12,12,12,12,13,13,13,14,14,14,14,15,15,15,15,15,16,16,16,16,16,16,16,16,15,15,14,13,13.1,12.5,12.2,12,12,12,12,12,12,11.9,11.6,11,10.2,9.2,8.2,7.1,6.2,5.6,5.4,5.3,5.4,5.6,5.9,6.2,6.5,6.8,7.1,7.3,7.5,7.6,7.7,7.3,6.2,5.2,2.7,1.4,-1.2,-2.8,-3.8,-4.8,-5.5,-5.3,-5.6,-5.7,-5.9,-6,-6.3,-6.5,-6.2,-4.7,-2.8,-.1,2.6,5.3,7.7,10.4,13.3,16,18.2,20.2,21.1,22.4,23.5,23.8,24.3,24,23.9,23.9,23.7,24,24.3,25.3,26.2,27.3,28.2,29.1,30,30.7,31.4,32.2,33.1,34,35,36.5,38.3,40.2,42.2,44.5,46.5,48.5,50.5,52.2,53.8,54.9,55.8,56.9,58.3,60,61.6,63][Math.floor((a-1620)/2)],new Date(e.getTime()-1e3*t)}(e)}},Equinox=function(){var e=[[2451623.80984,365242.37404,.05169,-.00411,-57e-5],[2451716.56767,365241.62603,.00325,.00888,-3e-4],[2451810.21715,365242.01767,-.11575,.00337,78e-5],[2451900.05952,365242.74049,-.06223,-.00823,32e-5]],t=[[485,324.96,1934.136],[203,337.23,32964.467],[199,342.08,20.186],[182,27.85,445267.112],[156,73.14,45036.886],[136,171.52,22518.443],[77,222.54,65928.934],[74,296.72,3034.906],[70,243.58,9037.513],[58,119.81,33718.147],[52,297.17,150.678],[50,21.02,2281.226],[45,247.54,29929.562],[44,325.15,31555.956],[29,60.93,4443.417],[18,155.12,67555.328],[17,288.79,4562.452],[16,198.04,62894.029],[14,199.76,31436.921],[12,95.39,14577.848],[12,287.11,31931.756],[12,320.81,34777.259],[9,227.73,1222.114],[8,15.45,16859.074]];function calculate(a,r){for(var n=(Math.floor(a)-2e3)/1e3,o=e[r][f=4];--f>=0;)o=o*n+e[r][f];for(var l=(o-2451545)/36525,u=(35999.373*l-2.47)/180*Math.PI,c=1+.0334*Math.cos(u)+7e-4*Math.cos(2*u),i=0,f=t.length-1;f>=0;f--){var h=t[f];i+=h[0]*Math.cos((h[1]+h[2]*l)/180*Math.PI)}var M=o+1e-5*i/c;return Dynamical.toUniversal(Julian.toDate(M))}return{march:function(e){return calculate(e,0)},june:function(e){return calculate(e,1)},september:function(e){return calculate(e,2)},december:function(e){return calculate(e,3)}}}(),Moon=function(){var e=[0,.25,.5,.75],t=[[-.4072,0,0,1,0,0],[.17241,1,1,0,0,0],[.01608,0,0,2,0,0],[.01039,0,0,0,2,0],[.00739,1,-1,1,0,0],[-.00514,1,1,1,0,0],[.00208,2,2,0,0,0],[-.00111,0,0,1,-2,0],[-57e-5,0,0,1,2,0],[56e-5,1,1,2,0,0],[-42e-5,0,0,3,0,0],[42e-5,1,1,0,2,0],[38e-5,1,1,0,-2,0],[-24e-5,1,-1,2,0,0],[-17e-5,0,0,0,0,1],[-7e-5,0,2,1,0,0],[4e-5,0,0,2,-2,0],[4e-5,0,3,0,0,0],[3e-5,0,1,1,-2,0],[3e-5,0,0,2,2,0],[-3e-5,0,1,1,2,0],[3e-5,0,-1,1,2,0],[-2e-5,0,-1,1,-2,0],[-2e-5,0,1,3,0,0],[2e-5,0,0,4,0,0]],a=[[-.40614,0,0,1,0,0],[.17302,1,1,0,0,0],[.01614,0,0,2,0,0],[.01043,0,0,0,2,0],[.00734,1,-1,1,0,0],[-.00515,1,1,1,0,0],[.00209,2,2,0,0,0],[-.00111,0,0,1,-2,0],[-57e-5,0,0,1,2,0],[56e-5,1,1,2,0,0],[-42e-5,0,0,3,0,0],[42e-5,1,1,0,2,0],[38e-5,1,1,0,-2,0],[-24e-5,1,-1,2,0,0],[-17e-5,0,0,0,0,1],[-7e-5,0,2,1,0,0],[4e-5,0,0,2,-2,0],[4e-5,0,3,0,0,0],[3e-5,0,1,1,-2,0],[3e-5,0,0,2,2,0],[-3e-5,0,1,1,2,0],[3e-5,0,-1,1,2,0],[-2e-5,0,-1,1,-2,0],[-2e-5,0,1,3,0,0],[2e-5,0,0,4,0,0]],r=[[-.62801,0,0,1,0,0],[.17172,1,1,0,0,0],[-.01183,1,1,1,0,0],[.00862,0,0,2,0,0],[.00804,0,0,0,2,0],[.00454,1,-1,1,0,0],[.00204,2,2,0,0,0],[-.0018,0,0,1,-2,0],[-7e-4,0,0,1,2,0],[-4e-4,0,0,3,0,0],[-34e-5,1,-1,2,0,0],[32e-5,1,1,0,2,0],[32e-5,1,1,0,-2,0],[-28e-5,2,2,1,0,0],[27e-5,1,1,2,0,0],[-17e-5,0,0,0,0,1],[-5e-5,0,-1,1,-2,0],[4e-5,0,0,2,2,0],[-4e-5,0,1,1,2,0],[4e-5,0,-2,1,0,0],[3e-5,0,1,1,-2,0],[3e-5,0,3,0,0,0],[2e-5,0,0,2,-2,0],[2e-5,0,-1,1,2,0],[-2e-5,0,1,3,0,0]],n=[[325e-6,299.77,.107408,-.009173],[165e-6,251.88,.016321],[164e-6,251.83,26.651886],[126e-6,349.42,36.412478],[11e-5,84.66,18.206239],[62e-6,141.74,53.303771],[6e-5,207.14,2.453732],[56e-6,154.84,7.30686],[47e-6,34.52,27.261239],[42e-6,207.19,.121824],[4e-5,291.34,1.844379],[37e-6,161.72,24.198154],[35e-6,239.56,25.513099],[23e-6,331.55,3.592518]];function calculate(o,l,u,c){var i,f,h=12.3685*(o.getFullYear()+o.getMonth()/12+o.getDate()/360-2e3),M=(i=u?Math.ceil(h-e[c])+l+e[c]:Math.floor(h-e[c])+l+e[c])/1236.85,s=polynom(i,M,[2451550.09766,29.530588861,15437e-8,15e-8,7.3e-10]),v=polynom(M,M,[1,-.002516,-74e-7]),m=polynom(i,M,[2.5534,29.1053567,-14e-7,-11e-8]),g=polynom(i,M,[201.5643,385.81693528,.0107582,1238e-8,-58e-9]),D=polynom(i,M,[160.7108,390.67050284,-.0016118,-227e-8,11e-9]),y=polynom(i,M,[124.7746,-1.56375588,.0020672,215e-8]);if(0===c)f=t;else if(2===c)f=a;else{f=r;var I=.00306-38e-5*v*Math.cos(m/180*Math.PI);I+=26e-5*Math.cos(g/180*Math.PI),I+=-2e-5*Math.cos((g-m)/180*Math.PI),I+=2e-5*Math.cos((g+m)/180*Math.PI),I+=2e-5*Math.cos(2*D/180*Math.PI),1===c?s+=I:s-=I}for(var P=f.length-1;P>=0;P--){var T=f[P],p=T[2]*m+T[3]*g+T[4]*D+T[5]*y;p=T[0]*Math.sin(p/180*Math.PI),T[1]>0&&(p*=v,2===T[1]&&(p*=v)),s+=p}for(P=n.length-1;P>=0;P--){var U=n[P],d=U[1]+U[2]*i;4===U.length&&(d+=U[3]*M*M),s+=U[0]*Math.sin(d/180*Math.PI)}var w=Dynamical.toUniversal(Julian.toDate(s));if(u){if(w.getTime()>=o.getTime())return calculate(o,l-1,u,c)}else if(w.getTime()<o.getTime())return calculate(o,l+1,u,c);return w}function polynom(e,t,a){for(var r=a.length-1,n=a[r];--r>=2;)n=n*t+a[r];return(n=n*t*t)+a[1]*e+a[0]}return{new:function(e,t){return calculate(e,0,t,0)},firstQuarter:function(e,t){return calculate(e,0,t,1)},full:function(e,t){return calculate(e,0,t,2)},lastQuarter:function(e,t){return calculate(e,0,t,3)}}}();

// === AstroCalc ===
// Written by Byron Pendason to easier retrieve needed data from Astronomy Engine
class AstroCalc {
	static nextFullMoon(date) {
		date = new Date(date);
		return Moon.full(date).toISOString();
	}

	static nextNewMoon(date) {
		date = new Date(date);
		return Moon.new(date).toISOString();
	}

	static getSummerSolstice(year) {
		return Equinox.june(year);
	}

	static getWinterSolstice(year) {
		return Equinox.december(year);
	}

	static toJulian(d) {
		let yr = d.getFullYear();
		let century = Math.floor(yr / 100);
		let offset = Math.ceil(century * 0.75) - 2;
		var j = new Date(d);
		j.setDate(d.getDate() - offset);
		return j;
	}
}

// === ASCal ===
// by Byron Pendason
class Calendar {
	constructor(year) {
		if (year <= 100) {
			alert("A year must be after the year 100 CE.")
			return;
		}
		this.Load(year);
	}
	Load(year) {
		this.Year = year;
		this.Months = new Array();
		this.YearHE = this.calculateHumanEraYear(this.Year);
		this.MetonicYear = this.calculateMetonicYear(this.Year);
		this.WinterSolstice = AstroCalc.getWinterSolstice(this.Year);
		this.SummerSolstice = AstroCalc.getSummerSolstice(this.Year);
		this.Holidays = new Array();
		this.IsLeapYear = ([0, 3, 6, 8, 11, 14, 17, 19].includes(this.MetonicYear)) ? true : false; //Year 19 is same as 0, but including both for compatibility

		let lastYule = AstroCalc.getWinterSolstice(this.Year - 1);
		//let newMoon = AstroCalc.nextNewMoon(lastYule); //get firsr astronomical new moon after previous Yule
		//let fullMoon = AstroCalc.nextFullMoon(newMoon); // ... find the next full moon
		//newMoon = this.getNewMoon(fullMoon);  // ... then find the begining of that lunar month.
		let newMoons = [];
		let fullMoons = [];
		let monthsNum = this.IsLeapYear ? 13 : 12;

		let newMoon = this.getNewMoon(lastYule);
		let fullMoon;

		if (this.MetonicYear == "?") {
			let lastMonth = this.getNewMoon(this.WinterSolstice);
			let lunarYear = Math.round((lastMonth.getTime() - newMoon.getTime()) / 86400000);
			if (lunarYear > 360) {
				this.IsLeapYear = true;
				monthsNum = 13;
			} else {
				this.IsLeapYear = false;
				monthsNum = 12;
			}
		}

		newMoons.push(newMoon);

		while (fullMoons.length < monthsNum) {
			fullMoon = AstroCalc.nextFullMoon(newMoon);
			fullMoons.push(fullMoon);

			newMoon = this.getNewMoon(fullMoon); //this.addDays(fullMoon, 21));
			newMoons.push(newMoon);
		}
		this.Months = [];
		let monthNames = [];
		monthNames.push("Æfterra Ġēola");
		monthNames.push("Solmōnaþ");
		monthNames.push("Hreðmōnaþ")
		monthNames.push("Ēosturmōnaþ");
		monthNames.push("Þrimilcemōnaþ");
		monthNames.push("Ærra Liða");
		if (this.IsLeapYear) monthNames.push("Þriliða"); // Figuring out I needed to make adding this conditional was a PITA
		monthNames.push("Æfterra Liða");
		monthNames.push("Weodmōnaþ");
		monthNames.push("Hāliġmōnaþ");
		monthNames.push("Wintermōnaþ");
		monthNames.push("Blōtmōnaþ");
		monthNames.push("Ærra Ġēola");

		for (let i = 0; i < fullMoons.length; i++) {
			this.Months.push({
				Name: monthNames[i],
				NewMoon: newMoons[i],
				FullMoon: fullMoons[i],
				NextNewMoon: newMoons[i + 1],
			});
			if (this.Months[i].NextNewMoon == undefined) {
				this.Months[i].NextNewMoon = this.nextNewYear;
			}
			this.Months[i].Length = Math.round(((new Date(this.Months[i].NextNewMoon)).getTime() - (new Date(this.Months[i].NewMoon)).getTime()) / 86400000);
		}
		// Months should be either 29 or 30 days. If calculations made the month too long or too short,
		// the following for loop adjusts months length to correct it.
		for (let i = 0; i < this.Months.length; i++) {
			while (this.Months[i].Length > 30) {
				let date = new Date(this.Months[i].NextNewMoon);
				date.setDate(date.getDate() - 1);
				this.Months[i].NextNewMoon = date;
				this.Months[i].Length = Math.round(((new Date(this.Months[i].NextNewMoon)).getTime() - (new Date(this.Months[i].NewMoon)).getTime()) / 86400000);

				try {
					this.Months[i + 1].NewMoon = date;
				} catch (err) { }
			}
			while (this.Months[i].Length < 29) {
				let date = new Date(this.Months[i].NextNewMoon);
				date.setDate(date.getDate() + 1);
				this.Months[i].NextNewMoon = date;
				this.Months[i + 1].NewMoon = date;
				this.Months[i].Length = Math.round(((new Date(this.Months[i].NextNewMoon)).getTime() - (new Date(this.Months[i].NewMoon)).getTime()) / 86400000);
			}
			this.Months[i].Length = Math.round(((new Date(this.Months[i].NextNewMoon)).getTime() - (new Date(this.Months[i].NewMoon)).getTime()) / 86400000);
		}
		
		this.addHoliday("Ġeāres Dæġ (New Year's Day)", this.Months[0].NewMoon, "minor", { Text: "(Old English Thesaurus)", Url: "http://oldenglishthesaurus.arts.gla.ac.uk/category/?id=9620"});
		this.addHoliday("Ēosturdæġ", this.Months[3].FullMoon, "high", null);
		this.addHoliday("Midsumor", this.SummerSolstice, "high", null);
		this.addHoliday("Winterfylleþ", this.Months[this.IsLeapYear ? 10 : 9].FullMoon, "high", null);
		this.addHoliday("Ġēola", this.WinterSolstice, "high", null);
		//this.addHoliday("Sigetiber", this.Months[1].FullMoon, "minor", null);
		//this.addHoliday("Lencten-Tīd", this.Months[2].FullMoon, "minor", null);
		this.addHoliday("Blōstmfrēols", this.addDays(this.Months[4].NewMoon, -1), "minor", { Text: "(Lārhūs Fyrnsida)", Url: "https://larhusfyrnsida.com/2017/03/18/blostmfreols/" });
		//this.addHoliday("Bendfeorm", this.Months[this.IsLeapYear ? 8 : 7].FullMoon, "minor", null);
		//this.addHoliday("Hærfestlīc Freōlsung", this.Months[this.IsLeapYear ? 9 : 8].FullMoon, "minor", null);
		//this.addHoliday("Andetnes-blōt", this.Months[this.IsLeapYear ? 11 : 10].FullMoon, "minor", null);
		this.addHoliday("Mōdraniht (Traditional)", this.calculateMothersNight(0), "minor", null);
		this.addHoliday("Mōdraniht (Mine Wyrtruman)", this.calculateMothersNight(2), "minor", null);
		//this.addHoliday("Mōdraniht (Ingwine)", this.calculateMothersNight(8), "minor", null);
		//this.addHoliday("Twelftadæg", this.calculateMothersNight(11), "minor", null);

		this.Holidays.sort(function(a, b) { return a.ModernDate - b.ModernDate });
		
	}
	getNewMoon(date) {
		date = new Date(AstroCalc.nextNewMoon(date));
		let days = 1;
		if (date.getUTCHours() >= 12) {
			days = 2;
		}
		date.setDate(date.getDate() + days);
		date.setUTCHours(0, 0, 0, 0);
		return date;
	}
	addDays(date, days) {
		date = new Date(date)
		date.setDate(date.getDate() + days);
		return date;
	}
	addHoliday(name, date, type, link) {
		date = new Date(date);
		let asdate = this.ConvertDate(date);
		this.Holidays.push({ Name: name, Type: type, Link: link, ModernDate: date, AngloSaxonDate: asdate });
	}
	ConvertDate(date) {
	    date = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
	    if (this.Year != date.getFullYear()) this.Load(date.getFullYear());
	    if (date < this.Months[0].NewMoon) {
	        this.Load(date.getFullYear() - 1);
	    }
	    let month;
	    for (let m of this.Months) {
	        if (this.IsBetween(date, m.NewMoon, m.NextNewMoon)) {
	            month = m;
	            break;
	        }
	    }
	    
	    let asDate = this.getOrdinal(Math.round((date.getTime() - month.NewMoon.getTime()) / 86400000) + 1) + " of " + month.Name;
		return asDate;
	}
	calculateMothersNight(days) {
		return this.addDays(this.WinterSolstice, days);
	}
	IsBetween(date, beginRange, endRange) {
		return beginRange <= date && date < endRange;
	}
	getOrdinal(n) {
		let str = "";
		if (n % 100 < 20 && n % 100 > 10) {
			str = String(n) + "th";
		} else if (n % 10 == 1) {
			str = String(n) + "st";
		} else if (n % 10 == 2) {
			str = String(n) + "nd";
		} else if (n % 10 == 3) {
			str = String(n) + "rd";
		} else {
			str = String(n) + "th";
		}
		return str;
	}
	calculateLastDay() {
		return new Date(this.addDays(this.Months[this.Months.length - 1], -1));
	}
	calculateHumanEraYear(yearCE) {
		var yearHE;
		if (yearCE == 0) {
			yearHE = 10000;
		} else if (yearCE < 0) {
			yearHE = 10001 - Math.abs(yearCE);
		} else {
			yearHE = 10000 + yearCE;
		}
		return yearHE;
	}
	calculateMetonicYear(year) {
		// Metonic cycle numbers give weird results before
		// the switch to the Gregorian calendar. So the script will fallback
		// to using length of lunar year to determine whether to add the leap month.
		if (year <= 1582) {
			return "?";
		}

		var metonicYear = (this.Year - 3) % 19;
		if (metonicYear == 0) {
			metonicYear = 19;
		}
		return metonicYear;
	}
	createDownloadLink(link) {
		let ical = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Anglo-Saxon Calendar for ${this.Year}//NONSGML Anglo-Saxon Calendar for ${this.Year}//EN
`
		for (let month of this.Months) {
			let tz = Intl.DateTimeFormat().resolvedOptions().timeZone
			let date = `${month.NewMoon.getUTCFullYear()}${String(month.NewMoon.getUTCMonth() + 1).padStart(2, '0')}${String(month.NewMoon.getUTCDate()).padStart(2, '0')}`;
			ical += `BEGIN:VEVENT
UID:newmoon-${date}
DTSTAMP:${date}
DTSTART;VALUE=DATE:${date}
SUMMARY:The month of ${month.Name} begins
END:VEVENT
`
		}
		for (let holiday of this.Holidays) {
			let tz = Intl.DateTimeFormat().resolvedOptions().timeZone
			let date = `${holiday.ModernDate.getFullYear()}${String(holiday.ModernDate.getMonth() + 1).padStart(2, '0')}${String(holiday.ModernDate.getDate()).padStart(2, '0')}`;
			ical += `BEGIN:VEVENT
UID:holiday-${date}
DTSTAMP:${date}
DTSTART;VALUE=DATE:${date}
SUMMARY:${holiday.Name}
END:VEVENT
`
		}
		ical += "END:VCALENDAR";
	}
}
/*
let calendar =new Calendar(2025);
console.log(JSON.stringify(calendar, null, 2))
console.log(JSON.stringify(calendar.Holidays, null, 2))
console.log(calendar.ConvertDate(new Date(2026, 0, 5)))
*/
