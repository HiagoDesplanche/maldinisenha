// Matrix Rain Effect
function createMatrixRain() {
    const container = document.getElementById('matrixRain');
    const chars = '01';
    for (let i = 0; i < 50; i++) {
        const span = document.createElement('span');
        span.textContent = chars[Math.floor(Math.random() * chars.length)];
        span.style.left = Math.random() * 100 + '%';
        span.style.animationDuration = (Math.random() * 10 + 5) + 's';
        span.style.animationDelay = (Math.random() * 10) + 's';
        span.style.fontSize = (Math.random() * 20 + 10) + 'px';
        container.appendChild(span);
    }
}

// Password Generation
function generatePassword() {
    const length = parseInt(document.getElementById('length').value);
    document.getElementById('lengthValue').textContent = length;

    const upper = document.getElementById('upper').checked;
    const lower = document.getElementById('lower').checked;
    const numbers = document.getElementById('numbers').checked;
    const symbols = document.getElementById('symbols').checked;

    if (!upper && !lower && !numbers && !symbols) {
        alert('⚠️ Selecione pelo menos uma opção!');
        return;
    }

    let chars = '';
    if (upper) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (lower) chars += 'abcdefghijklmnopqrstuvwxyz';
    if (numbers) chars += '0123456789';
    if (symbols) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let password = '';
    const random = new Uint32Array(length);
    crypto.getRandomValues(random);

    for (let i = 0; i < length; i++) {
        password += chars[random[i] % chars.length];
    }

    document.getElementById('password').value = password;
    checkStrength(password);
}

// Copy Password
function copyPassword() {
    const passwordField = document.getElementById('password');
    if (!passwordField.value) {
        alert('⚠️ Gere uma senha primeiro!');
        return;
    }

    navigator.clipboard.writeText(passwordField.value).then(() => {
        const btn = event.target;
        btn.textContent = '✅ COPIADO!';
        setTimeout(() => {
            btn.textContent = '📋 COPIAR';
        }, 2000);
    }).catch(() => {
        // Fallback
        passwordField.select();
        document.execCommand('copy');
        alert('📋 Senha copiada!');
    });
}

// Check Password Strength
function checkStrength(password) {
    const strengthText = document.getElementById('strengthText');
    let score = 0;

    if (password.length >= 12) score++;
    if (password.length >= 16) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    const strengths = ['FRACA', 'FRACA', 'MÉDIA', 'MÉDIA', 'FORTE', 'FORTE', 'MUITO FORTE'];
    const colors = ['#ff0000', '#ff0000', '#ffff00', '#ffff00', '#00ff00', '#00ff00', '#00ff41'];

    strengthText.textContent = strengths[score];
    strengthText.style.color = colors[score];
    document.getElementById('strength').style.borderColor = colors[score];
}

// Initialize on page load
window.onload = function() {
    createMatrixRain();
    generatePassword();
};

// Generate on length change
document.getElementById('length').addEventListener('input', function() {
    document.getElementById('lengthValue').textContent = this.value;
    generatePassword();
});

// Generate on checkbox change
document.querySelectorAll('.options input').forEach(checkbox => {
    checkbox.addEventListener('change', generatePassword);
});
