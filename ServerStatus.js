let server = "firefoxmckingdom.apsara.lol";

function updateServer() {
    fetch("https://api.mcsrvstat.us/3/" + server)
        .then(res => res.json())
        .then(data => {

            // Icon
            const iconEl = document.getElementById("icon");
            if (data.icon) {
                iconEl.src = data.icon;
                iconEl.style.display = "block";
            } else {
                iconEl.style.display = "none";
            }

            // Online/offline
            const statusEl = document.getElementById("status");
            const playerTextEl = document.getElementById("player-text");
            const progressBarEl = document.getElementById("progress-bar");

            if (data.online) {
                statusEl.innerHTML = 
                    "IP: " + (data.hostname || server) + "<br>" +
                    "Version: " + (data.version || "Unknown");

                const online = data.players?.online || 0;
                const max = data.players?.max || 1; // Avoid division by 0

                // Update player text
                playerTextEl.textContent = `${online}/${max} players`;

                // Calculate Percentage
                const percentage = (online / max) * 100;

                // Update progress bar
                progressBarEl.style.width = `${percentage}%`;
            } else {
                statusEl.innerHTML = "Server is Offline!";
                progressBarEl.style.width = "0%";
                playerTextEl.textContent = "0/0";
            }

        })
        .catch(err => {
            document.getElementById("status").innerHTML = "Error Connection...";
            console.error(err);
        });
}

// Initial load
updateServer();

// Auto refresh every 5 seconds
setInterval(updateServer, 5000);