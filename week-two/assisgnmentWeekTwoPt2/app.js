var list = [
    {
        "name": "Christmas Day",
        "country": "US",
        "location": "United States",
        "type": "National",
        "date": "12/25/2020",
        "date_year": "2020",
        "date_month": "12",
        "date_day": "25",
        "week_day": "Friday"
    }
];
var holiList = document.getElementById("style");
for (var i = 0; i < list.length; i++) {
    holiList.innerHTML += 
    "<li>" + list[i].name + "\n </li>" +
    "<li>" + list[i].country + "\n </li>" +
    "<li>" + list[i].location + "\n </li>" +
    "<li>" + list[i].type + "\n </li>" +
    "<li>" + list[i].date + "\n </li>" +
    "<li>" + list[i].date_year + "\n </li>" +
    "<li>" + list[i].date_month + "\n </li>" +
    "<li>" + list[i].date_day + "\n </li>" +
    "<li>" + list[i].week_day + "\n </li>";
}