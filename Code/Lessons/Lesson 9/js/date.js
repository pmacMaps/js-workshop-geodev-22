// function get's current date
export const getCurrentDate = (element) => {
    // today's date
    const today = new Date();
    // day component of date
    const dd = String(today.getDate()).padStart(2, '0');
    // month component of date
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    // year component of date
    const yyyy = today.getFullYear();
    // today's date
    const todayFormatted = `${mm}/${dd}/${yyyy}`;
    // return current date
    return todayFormatted;
}