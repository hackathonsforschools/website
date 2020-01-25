const CALENDAR_ID = 't8iphvpqadetnf7ccpb2c7pnjk@group.calendar.google.com'
const CALENDAR_KEY = 'AIzaSyAQqb5ZhZIOroU98W1_xzXlN3jWN8Ta4aQ'

const SMALL_DEVICE_WIDTH = 600

const DATE_24HR_FORMAT = {
  hour: '2-digit',
  minute: '2-digit',
  omitZeroMinute: false,
  hour12: false
}

let calendar

document.addEventListener('DOMContentLoaded', () => {
  let calendarElement = document.querySelector('#calendar')

  let defaultView = 'dayGridMonth'
  if (window.innerWidth < SMALL_DEVICE_WIDTH) {
    defaultView = 'listYear'
  }

  calendar = new FullCalendar.Calendar(calendarElement, {
    plugins: ['dayGrid', 'googleCalendar', 'list', 'timeGrid'],
    defaultView: defaultView,
    header: { center: 'dayGridMonth, timeGridWeek, listYear'},
    titleFormat: { year: 'numeric', month: 'short', day: 'numeric' },
    buttonText: { dayGridMonth:'Month', timeGridWeek:'Week', list:'All', today:'Today'},
    firstDay: 1,
    height: 800,
    googleCalendarApiKey: CALENDAR_KEY,
		events: {
			googleCalendarId: CALENDAR_ID
		},
    eventTimeFormat: DATE_24HR_FORMAT,
    views: {
      // month view
      dayGridMonth: {
        displayEventEnd: true,
      },
      // week view
      week: {
        columnHeaderFormat: { weekday: 'short' },
        allDaySlot: false,
        slotDuration: '01:00:00',
        slotLabelInterval: '02:00:00',
        slotLabelFormat: DATE_24HR_FORMAT,
        nowIndicator: true
      },
      // all upcoming events view
      listYear: {
        listDayFormat: { year: 'numeric', month: 'short', day: '2-digit', omitCommas: true },
        listDayAltFormat: { weekday: 'long' }
      }
    }
  })

  calendar.render()
})
