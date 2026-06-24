# Self Realization with Mustafa Sarwari

Meditation class website for booking a 1-hour meditation session at Oedtersee Traun.

## Main details

- Name: Self Realization with Mustafa Sarwari
- Venue: Oedtersee Traun
- Price: 30 Euro per hour
- Phone: 067761795073
- Email: mustafa.sarwari18@gmail.com

## Website link

After GitHub Pages is enabled, the website should open here:

https://sarwari25.github.io/meditation/

## Enable GitHub Pages

Go to:

Repository Settings > Pages > Deploy from branch > main > root

If the repo stays private and the link does not open publicly, make the repository public or check whether your GitHub plan supports Pages for private repositories.

## Booking form

The current homepage uses a safe static method:

1. The visitor selects date and time.
2. The website saves a local copy in that visitor's browser.
3. The visitor's email app opens with all booking details ready to send to Mustafa.

Because GitHub Pages is static hosting, it cannot by itself save a central database or send automatic server reminders.

## Optional Google Sheets + Calendar reminder setup

The file `google-apps-script.gs` can be used to save bookings into Google Sheets and create a Google Calendar event with a reminder 5 hours before.

Basic steps:

1. Create a Google Sheet named Meditation Bookings.
2. Copy the Sheet ID from the URL.
3. Open Extensions > Apps Script.
4. Paste the code from `google-apps-script.gs`.
5. Replace `PASTE_YOUR_GOOGLE_SHEET_ID_HERE` with your Sheet ID.
6. Deploy as a Web App.
7. Connect the website form to that Web App URL.
