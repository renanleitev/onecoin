export default function subtractDaysFromNow(days) {
    const date = new Date();
    date.setDate(date.getDate() - days);
    return date.toString();
}