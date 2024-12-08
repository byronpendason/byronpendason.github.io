class ASCalBuilder {

	constructor(calendar) {

		let today = new Date();
		this.calendar = calendar;
		this.month = this.getMonth(today);
		this.lastDay = this.getLastDay(today);
		
		this.show();
	}

	getMonth(date) {
		let months = [...this.calendar.Months];
		for (let i = 0; i < months.length; i++) {
			let nextMoon;
			try {
				nextMoon = months[i + 1].NewMoon;
			} catch {
				nextMoon = this.calendar.calculateLastDay();
			}
			if (this.calendar.IsBetween(date, months[i].NewMoon, nextMoon)) {
				return months[i];
			}
		}

		return months.pop(); //if you've made it through all the months of the year, return last month
	}

	getLastDay() {
		let months = [...this.calendar.Months];
		let index = months.indexOf(this.month);

		let lastDay = months[index].NextNewMoon;
		lastDay.setDate(lastDay.getDate() - 1);
		return lastDay;
		
	}

	show() {
		const monthName = document.getElementById("monthName");
		const monthTable = document.getElementById("monthTable");
		monthName.innerHTML = `${this.month.Name} ${this.month.NewMoon.getFullYear()}`;
		monthTable.innerHTML = '<h4 style="text-align: center;">Sun</h4> <h4 style="text-align: center;">Mon</h4> <h4 style="text-align: center;">Tue</h4>  <h4 style="text-align: center;">Wed</h4> <h4 style="text-align: center;">Thur</h4> <h4 style="text-align: center;">Fri</h4> <h4 style="text-align: center;">Sat</h4>';
		let day = new Date(this.month.NewMoon);
		let holidays = [];
		for (let holiday of this.calendar.Holidays) {
			if (holiday.ModernDate >= this.month.NewMoon && holiday.ModernDate <= this.lastDay) {
				holidays.push(holiday);
			}
		}

		for (let i = 0; i < day.getDay(); i++) {
			monthTable.innerHTML += "<span></span>"
		}
		
		let num = 1;
		while (day <= this.lastDay) {
			let holiday = null;
			for (let h of holidays) {
				if (h.ModernDate.toDateString() === day.toDateString()) {
					holiday = h.Name;
				}
			}
			let dateStr = (day.getMonth() + 1) + "/" + day.getDate();
			let text = `<span style="text-align:right; border-style:solid; height: 7em;padding:2px;"><b style="1.25em">${num}</b><br>${dateStr}`;
			if (holiday != null) {
				text += `<br><span style="font-size:0.75em;text-align:center;font-style:italic;float: bottom;">${holiday}</span>`;
			}
			text += "</span>";
			monthTable.innerHTML += text;
			num++;
			day.setDate(day.getDate() + 1);
		}
	}
}