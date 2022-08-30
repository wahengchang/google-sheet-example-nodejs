(async () => {
    const path = require('path');
    const { google } = require('googleapis');

    try {
        const auth = new google.auth.GoogleAuth({
            keyFile: path.join(__dirname, 'key.json'),
            // scopes: ['https://www.googleapis.com/auth/gmail.readonly'],
            scopes: "https://www.googleapis.com/auth/spreadsheets",
        });

        const authClient = await auth.getClient()

        console.log(' -=-=-=1 ')


        const sheets = google.sheets({ version: 'v4', auth });
        const resRead = await sheets.spreadsheets.values.get({
            spreadsheetId: '1H2HiUPZfzwTeWllXm9q3CvIdj30CAteGWc-GoFxy7NM',
            range: "Sheet1!A:C", //sheet name and range of cells
        });
        console.log('resRead.data: ', resRead.data)
        // [ '1', '2', '3' ],
        // [ '1', '2', '3' ],
        // [ '1', '2', '3' ],
        // [ '1', '2', '3' ]
    }
    catch (err) {
        console.log(' -=-=-= error ')
        console.log(err);
    }
})()