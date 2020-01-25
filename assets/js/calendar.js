const CALENDAR_ID = 't8iphvpqadetnf7ccpb2c7pnjk@group.calendar.google.com'
const CALENDAR_KEY = 'AIzaSyAQqb5ZhZIOroU98W1_xzXlN3jWN8Ta4aQ'

let calendar

document.addEventListener('DOMContentLoaded', () => {
  let calendarElement = document.querySelector('#calendar')

  calendar = new FullCalendar.Calendar(calendarElement, {
    plugins: ['dayGrid', 'googleCalendar', 'list'],
    defaultView: 'dayGridMonth',
    firstDay: 1,
    googleCalendarApiKey: CALENDAR_KEY,
		events: {
			googleCalendarId: CALENDAR_ID
		}
  })

  calendar.render()
})
