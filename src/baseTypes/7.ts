/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Week {
  mon = 'monday',
  tue = 'tuesday',
  wedn = 'wednesday',
  thu = 'thursday',
  fri = 'friday',
  sat = 'saturday',
  sun = 'sunday',
}

const isWeekend = (day:Week):boolean => {
  return day === Week.sat || day === Week.sun;
    
}