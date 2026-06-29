// PALITAN MO ITO: Ang kasalukuyang PIN ay 2026
const CORRECT_PIN = "2026"; 

let currentPin = "";
let currentActiveStep = 1; // Nag-sstart sa 1 pagkatapos ng unlock (Page 2 = Step 1)

function pressKey(num) {
    if (currentPin.length < 4) {
        currentPin += num;
        document.getElementById('pin-input').value = currentPin;
    }
}

function clearPin() {
    currentPin = "";
    document.getElementById('pin-input').value = "";
    document.getElementById('error-msg').innerText = "";
}

function checkPin() {
    if (currentPin === CORRECT_PIN) {
        // Unlock Success!
        document.getElementById('page-1').classList.remove('active');
        document.getElementById('page-2').classList.add('active');
        document.getElementById('nav-controls').classList.remove('hidden');
        
        // Mag-trigger ng kaunting screenshake o party feeling
        createConfettiEffect();
    } else {
        // Unlock Fail!
        document.getElementById('error-msg').innerText = "❌ Maling PIN! Subukan ulit.";
        clearPin();
    }
}

function navigatePage(direction) {
    // Pages 2, 3, at 4 ang gagamitin sa navigation.
    // direction: -1 para paatras, 1 para pasulong
    
    let targetStep = currentActiveStep + direction;
    
    if (targetStep >= 1 && targetStep <= 3) {
        // Itago ang kasalukuyang page
        document.getElementById(`page-${currentActiveStep + 1}`).classList.remove('active');
        
        // I-update ang tracker
        currentActiveStep = targetStep;
        
        // Ipakita ang bagong page
        document.getElementById(`page-${currentActiveStep + 1}`).classList.add('active');
        
        // I-update ang text indicator (1/3, 2/3, 3/3)
        document.getElementById('current-step').innerText = currentActiveStep;
        
        // I-update ang status ng mga buttons
        document.getElementById('prev-btn').disabled = (currentActiveStep === 1);
        document.getElementById('next-btn').disabled = (currentActiveStep === 3);
    }
}

// Pasabog na console log para mukhang pro developer ang gumawa
function createConfettiEffect() {
    console.log("🎉 ACCESS GRANTED! Happy Birthday! 🎉");
}
