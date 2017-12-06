export default class DateFunctions {
    static currentDate() {
        const today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        const yyyy = today.getFullYear();
        if (dd < 10) {
            dd = `0${dd}`;
        }
        if (mm < 10) {
            mm = `0${mm}`;
        }
        const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
        return `${mm}-${dd}-${yyyy}-${time}`;
    }
}
