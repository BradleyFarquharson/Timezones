window.onload = function() {
    function updateTime() {
        const timeZones = {
            'time-south-africa': 'Africa/Johannesburg',
            'time-sydney': 'Australia/Sydney',
            'time-uk': 'Europe/London',
            'time-us-central': 'America/Chicago',
            'time-cyprus': 'Asia/Nicosia' // Cyprus time zone
        };

        Object.keys(timeZones).forEach(id => {
            const timeElement = document.getElementById(id);
            
            // If timeElement is null, skip this iteration
            if (!timeElement) {
                console.error(`Element with id ${id} not found.`);
                return;
            }

            const timeZone = timeZones[id];
            const currentTime = new Date().toLocaleTimeString('en-US', {
                timeZone: timeZone,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit', // Show seconds temporarily
                hour12: true
            });
            timeElement.textContent = currentTime;
        });
    }

    setInterval(updateTime, 1000);
    updateTime(); // Initial call to display the time immediately
};
