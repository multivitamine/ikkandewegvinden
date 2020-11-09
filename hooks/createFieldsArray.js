export function CreateFieldsArray(array) {
    if (array.length) {
        const fieldsArray = array.map((item) => item.fields);
        fieldsArray.sort((a, b) => {
            return a.ordernumber - b.ordernumber;
        });
        return [ fieldsArray ];
    } else {
        return [ [] ];
    }
}
