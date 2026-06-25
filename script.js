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
    document.getElementById('password').type = 'text';
    checkStrength(password);
    animateGenerate();
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
        const originalText = btn.textContent;
        btn.textContent = '✅ COPIADO!';
        btn.style.background = '#00ff41';
        btn.style.color = '#000';
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = 'transparent';
            btn.style.color = '#00ff41';
        }, 2000);
    }).catch(() => {
        // Fallback
        passwordField.select();
        document.execCommand('copy');
        alert('📋 Senha copiada!');
    });
}

// Clear Password
function clearPassword() {
    document.getElementById('password').value = '';
    document.getElementById('strengthText').textContent = 'AGUARDANDO...';
    document.getElementById('strengthText').style.color = '#00cc33';
    document.getElementById('strength').style.borderColor = 'rgba(0, 255, 65, 0.1)';
}

// Toggle Password Visibility
function togglePasswordVisibility() {
    const passwordField = document.getElementById('password');
    const eyeIcon = document.querySelector('.eye-icon');
    
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        eyeIcon.textContent = '👁️‍🗨️';
    } else {
        passwordField.type = 'password';
        eyeIcon.textContent = '👁️';
    }
}

// Check Password Strength
function checkStrength(password) {
    const strengthText = document.getElementById('strengthText');
    let score = 0;

    if (password.length >= 12) score++;
    if (password.length >= 16) score++;
    if (password.length >= 20) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    const strengths = ['MUITO FRACA', 'FRACA', 'MÉDIA', 'MÉDIA', 'FORTE', 'FORTE', 'MUITO FORTE', 'EXCELENTE'];
    const colors = ['#ff0000', '#ff3300', '#ffaa00', '#ffaa00', '#66ff00', '#66ff00', '#00ff41', '#00ffaa'];
    const emojis = ['💀', '⚠️', '⚠️', '⚠️', '✅', '✅', '🔒', '🔐'];

    const index = Math.min(score, 7);
    strengthText.textContent = emojis[index] + ' ' + strengths[index];
    strengthText.style.color = colors[index];
    document.getElementById('strength').style.borderColor = colors[index];
    document.getElementById('strength').style.boxShadow = `0 0 30px ${colors[index]}20`;
}

// Animate Generate Button
function animateGenerate() {
    const btn = document.querySelector('.button-group button:first-child');
    btn.style.background = '#00ff41';
    btn.style.color = '#000';
    btn.textContent = '✅ GERADO!';
    setTimeout(() => {
        btn.textContent = '⚡ GERAR';
        btn.style.background = 'transparent';
        btn.style.color = '#00ff41';
    }, 1500);
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

// Keyboard shortcut: Ctrl+Enter to generate
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 'Enter') {
        e.preventDefault();
        generatePassword();
    }
});

// Keyboard shortcut: Ctrl+C to copy
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 'c' && document.activeElement.id === 'password') {
        e.preventDefault();
        copyPassword();
    }
});
