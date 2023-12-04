setInterval(function () {
   let time = document.querySelector(".time");

   let hours = new Date().getHours();

   if (hours >= 12) {
      midday = "PM";
   } else if (hours < 12) {
      midday = "AM";
   }

   let minutes = new Date().getMinutes();
   let seconds = new Date().getSeconds();

   switch (seconds) {
      case 0:
         seconds = "00";
         break;
      case 1:
         seconds = "01";
         break;
      case 2:
         seconds = "02";
         break;
      case 3:
         seconds = "03";
         break;
      case 4:
         seconds = "04";
         break;
      case 5:
         seconds = "05";
         break;
      case 6:
         seconds = "06";
         break;
      case 7:
         seconds = "07";
         break;
      case 8:
         seconds = "08";
         break;
      case 9:
         seconds = "09";
         break;
   }

   let dayNum = new Date().getDay();

   switch (dayNum) {
      case 0:
         day = "Sun";
         break;
      case 1:
         day = "Mon";
         break;
      case 2:
         day = "Tue";
         break;
      case 3:
         day = "Wed";
         break;
      case 4:
         day = "Thu";
         break;
      case 5:
         day = "Fri";
         break;
      case 6:
         day = "Sat";
         break;
   }

   time.innerHTML = `${day} ${hours}:${minutes}:${seconds} ${midday}`;
}, 1000);
