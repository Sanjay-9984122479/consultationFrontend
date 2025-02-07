import moment from "moment";

export function generateDates(days = 7) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const weekDates = [];
    
    for (let i = 0; i < days; i++) {
        let currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + i);
        
        weekDates.push({
            day: daysOfWeek[currentDate.getDay()],
            date: currentDate.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })
        });
    }
    
    return weekDates;
}


export function generateTimeSlots(startTime, endTime, interval = 15) {
    const slots = [];
    
    const [startHour, startMinute] = startTime.split(":").map(Number);
    let [endHour, endMinute] = endTime.split(":").map(Number);
    endHour = endHour < startHour?endHour+12:endHour
    let start = new Date();
    start.setHours(startHour, startMinute, 0, 0);
    
    let end = new Date();
    end.setHours(endHour, endMinute, 0, 0);
    
    if (end < start) {
        end.setDate(end.getDate() + 1); // Handle crossing midnight
    }
    
    while (start <= end) {
        let hours = start.getHours();
        let minutes = start.getMinutes();
        let formattedTime = `${hours}:${minutes.toString().padStart(2, '0')}`;
        slots.push(formattedTime);
        
        start.setMinutes(start.getMinutes() + interval);
    }
    
    return slots;
}


export function getFutureTimes(timeList) {
    const now = moment(); // Get current time

    return timeList.filter(timeStr => {
        const time = moment(timeStr, "H:mm"); // Parse time string
        return time.isAfter(now, "minute"); // Compare with current time
    });
}
