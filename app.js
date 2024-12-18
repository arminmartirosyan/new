const staffMembers = [
    "Armine", "Marina", "Ilona", "Milen", "Rima", "Lilit SPA", "Lilit cosmetology",
    "Tatev", "Sona", "Kara", "Kristina", "Kristina cosmetology", "Manana", "Arevik", "Ani"
];

// Check if the user has already generated their Secret Santa
document.getElementById('generate-btn').addEventListener('click', function() {    
    const userName = document.getElementById('name').value.trim();
    
    // Check if the input is empty or not in the list of staff members
    if (!userName || !staffMembers.includes(userName)) {        
        alert("Please enter a valid name from the staff list.");
        return;
    }

    // Check if the user has already generated a Secret Santa
    if (localStorage.getItem(userName)) {        
        alert("You've already generated your Secret Santa!");
        return;
    }

    // Get a random name from the staff list excluding the user's name
    const possibleSecretSantas = staffMembers.filter(name => name !== userName);    
    const secretSanta = possibleSecretSantas[Math.floor(Math.random() * possibleSecretSantas.length)];
    
    // Store the result in localStorage so it can't be regenerated
    localStorage.setItem(userName, secretSanta);
    
    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.style.display = 'block';    
    resultElement.textContent = `Your Secret Santa is: ${secretSanta}`;
});
