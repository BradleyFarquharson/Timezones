document.addEventListener('DOMContentLoaded', () => {
    const timeZones = {
        'time-south-africa': 'Africa/Johannesburg',
        'time-sydney': 'Australia/Sydney',
        'time-uk': 'Europe/London',
        'time-us-central': 'America/Chicago',
        'time-cyprus': 'Asia/Nicosia'
    };

    // Cache DOM elements
    const timeElements = {};
    for (const id in timeZones) {
        const elem = document.getElementById(id);
        if (elem) {
            timeElements[id] = { elem, timeZone: timeZones[id] };
        } else {
            console.error(`Element with id "${id}" not found.`);
        }
    }

    function updateTime() {
        const now = new Date();
        for (const key in timeElements) {
            const { elem, timeZone } = timeElements[key];
            const options = {
                timeZone: timeZone,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            };
            const formatter = new Intl.DateTimeFormat([], options);
            elem.textContent = formatter.format(now);
        }
    }

    // Initial call to display time immediately
    updateTime();

    // Update every second
    setInterval(updateTime, 1000);
});
