// Get input elements
const totalRoomsInput = document.getElementById('totalRooms');
const roomsSoldInput = document.getElementById('roomsSold');
const totalRevenueInput = document.getElementById('totalRevenue');

// Get output elements
const occupancyOutput = document.getElementById('occupancy');
const adrOutput = document.getElementById('adr');
const revparOutput = document.getElementById('revpar');

/**
 * Calculate and update all KPIs based on current input values
 * This function is called whenever any input changes
 */
function calculateKPIs() {
    // Get input values and convert to numbers
    const totalRooms = parseFloat(totalRoomsInput.value) || 0;
    const roomsSold = parseFloat(roomsSoldInput.value) || 0;
    const totalRevenue = parseFloat(totalRevenueInput.value) || 0;

    // Calculate Occupancy (%)
    // Formula: (Rooms Sold / Total Rooms Available) * 100
    // Edge case: If totalRooms is 0, display "N/A" to avoid division by zero
    let occupancy;
    if (totalRooms === 0) {
        occupancy = 'N/A';
    } else {
        occupancy = ((roomsSold / totalRooms) * 100).toFixed(2) + '%';
    }

    // Calculate ADR (Average Daily Rate)
    // Formula: Total Room Revenue / Rooms Sold
    // Edge case: If roomsSold is 0, display "$0.00" (no rooms sold = no average rate)
    let adr;
    if (roomsSold === 0) {
        adr = '$0.00';
    } else {
        adr = '$' + (totalRevenue / roomsSold).toFixed(2);
    }

    // Calculate RevPAR (Revenue Per Available Room)
    // Formula: Total Room Revenue / Total Rooms Available
    // Edge case: If totalRooms is 0, display "N/A" to avoid division by zero
    let revpar;
    if (totalRooms === 0) {
        revpar = 'N/A';
    } else {
        revpar = '$' + (totalRevenue / totalRooms).toFixed(2);
    }

    // Update the DOM with calculated values
    occupancyOutput.textContent = occupancy;
    adrOutput.textContent = adr;
    revparOutput.textContent = revpar;
}

// Add event listeners to all inputs for real-time calculation
// 'input' event fires on every keystroke/change
totalRoomsInput.addEventListener('input', calculateKPIs);
roomsSoldInput.addEventListener('input', calculateKPIs);
totalRevenueInput.addEventListener('input', calculateKPIs);

// Initial calculation on page load
calculateKPIs();
