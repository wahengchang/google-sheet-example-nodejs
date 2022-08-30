(async () => {
    const path = require('path');
    const { google } = require('googleapis');

    try {
        const auth = new google.auth.GoogleAuth({
            keyFile: path.join(__dirname, 'key.json'),
            // scopes: ['https://www.googleapis.com/auth/gmail.readonly'],
            scopes: "https://www.googleapis.com/auth/spreadsheets",
        });


        await auth.getClient()

        const sheets = google.sheets({ version: 'v4', auth });     
        const resource = {
            values: [
                [1, 2, 3]
            ],
        };   
        const result = await sheets.spreadsheets.values.append({
            spreadsheetId: '1H2HiUPZfzwTeWllXm9q3CvIdj30CAteGWc-GoFxy7NM',
            range: "Sheet1!A:C", //sheet name and range of cells
            valueInputOption: "USER_ENTERED", // The information will be passed according to what the usere passes in as date, number or text
            resource,
        });
        console.log('%d cells updated.', result.data.updatedCells);
        return result;

    }
    catch (err) {
        console.log(' -=-=-= error ')
        console.log(err);
    }
})()