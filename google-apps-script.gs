// Optional backend for the meditation booking website.
// This saves bookings to Google Sheets, creates a Google Calendar event,
// adds reminders 5 hours before the appointment, and emails Mustafa.

const SHEET_ID = 'PASTE_YOUR_GOOGLE_SHEET_ID_HERE';
const MUSTAFA_EMAIL = 'mustafa.sarwari18@gmail.com';
const TIMEZONE = 'Europe/Vienna';

function doPost(e) {
  const data = e.parameter || {};
  const name = data.name || data.customer_name || '';
  const phone = data.phone || '';
  const email = data.email || '';
  const date = data.appointment_date || data.date || '';
  const time = data.appointment_time || data.time || '';
  const message = data.message || '';
  const price = '30 Euro';
  const venue = 'Oedtersee Traun';

  const sheet = SpreadsheetApp.openById(SHEET_ID).getSheets()[0];
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Created At', 'Name', 'Phone', 'Email', 'Date', 'Time', 'Price', 'Venue', 'Message']);
  }
  sheet.appendRow([new Date(), name, phone, email, date, time, price, venue, message]);

  if (date && time) {
    const start = new Date(date + 'T' + time + ':00');
    const end = new Date(start.getTime() + 60 * 60 * 1000);
    const event = CalendarApp.getDefaultCalendar().createEvent(
      'Meditation class with ' + name,
      start,
      end,
      {
        location: venue,
        description: 'Phone: ' + phone + '\nEmail: ' + email + '\nPrice: ' + price + '\nMessage: ' + message
      }
    );
    event.addPopupReminder(300);
    event.addEmailReminder(300);
  }

  MailApp.sendEmail({
    to: MUSTAFA_EMAIL,
    subject: 'New meditation booking request',
    body:
      'New meditation booking request\n\n' +
      'Name: ' + name + '\n' +
      'Phone: ' + phone + '\n' +
      'Email: ' + email + '\n' +
      'Date: ' + date + '\n' +
      'Time: ' + time + '\n' +
      'Duration: 1 hour\n' +
      'Price: ' + price + '\n' +
      'Venue: ' + venue + '\n' +
      'Reminder: 5 hours before\n\n' +
      'Message: ' + message
  });

  return HtmlService.createHtmlOutput('Thank you. Your booking request was sent.');
}
