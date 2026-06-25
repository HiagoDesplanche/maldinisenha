* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: #000;
    color: #00ff41;
    font-family: 'Courier New', monospace;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
}

/* Matrix effect background */
body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
        linear-gradient(180deg, 
            rgba(0,255,65,0.03) 0%,
            transparent 100%);
    pointer-events: none;
    z-index: 0;
}

/* Matrix rain effect */
.matrix-rain {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
    opacity: 0.1;
    overflow: hidden;
}

.matrix-rain span {
    position: absolute;
    color: #00ff41;
    font-size: 14px;
    animation: fall linear infinite;
}

@keyframes fall {
    0% { transform: translateY(-100vh); opacity: 1; }
    100% { transform: translateY(100vh); opacity: 0; }
}

.container {
    background: rgba(0, 0, 0, 0.92);
    border: 2px solid #00ff41;
    padding: 35px 40px;
    border-radius: 10px;
    box-shadow: 
        0 0 30px rgba(0, 255, 65, 0.3),
        inset 0 0 30px rgba(0, 255, 65, 0.05);
    position: relative;
    z-index: 1;
    max-width: 500px;
    width: 90%;
    backdrop-filter: blur(5px);
}

/* Glitch effect on title */
.glitch {
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 25px;
    color: #00ff41;
    text-shadow: 
        0 0 10px #00ff41,
        0 0 20px #00ff41,
        0 0 40px #00ff41;
    animation: glitch 3s infinite;
    letter-spacing: 3px;
}

@keyframes glitch {
    0% { transform: translate(0); }
    20% { transform: translate(-2px, 2px); }
    40% { transform: translate(2px, -2px); }
    60% { transform: translate(-1px, 1px); }
    80% { transform: translate(1px, -1px); }
    100% { transform: translate(0); }
}

.maldini-section {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-bottom: 20px;
    flex-wrap: wrap;
}

.maldini-section img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 2px solid #00ff41;
    object-fit: cover;
    filter: 
        grayscale(80%) 
        contrast(150%) 
        brightness(80%);
    transition: all 0.3s ease;
    box-shadow: 0 0 15px rgba(0, 255, 65, 0.2);
}

.maldini-section img:hover {
    filter: grayscale(0%) contrast(100%) brightness(100%);
    transform: scale(1.1) rotate(-5deg);
    box-shadow: 0 0 30px rgba(0, 255, 65, 0.5);
}

.pedreiro-section {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-bottom: 20px;
    flex-wrap: wrap;
}

.pedreiro-section img {
    width: 70px;
    height: 70px;
    border-radius: 10px;
    border: 2px solid #00ff41;
    object-fit: cover;
    filter: 
        grayscale(60%) 
        contrast(150%) 
        brightness(90%);
    transition: all 0.3s ease;
    box-shadow: 0 0 15px rgba(0, 255, 65, 0.2);
}

.pedreiro-section img:hover {
    filter: grayscale(0%) contrast(100%) brightness(100%);
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 0 30px rgba(0, 255, 65, 0.5);
}

.input-group {
    margin: 20px 0;
}

.input-group label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    color: #00cc33;
    text-transform: uppercase;
    letter-spacing: 2px;
}

input[type="range"] {
    width: 100%;
    height: 5px;
    background: #003300;
    outline: none;
    -webkit-appearance: none;
    border-radius: 5px;
}

input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 18px;
    height: 18px;
    background: #00ff41;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 0 20px #00ff41;
}

input[type="range"]::-moz-range-thumb {
    width: 18px;
    height: 18px;
    background: #00ff41;
    border-radius: 50%;
    cursor: pointer;
    border: none;
    box-shadow: 0 0 20px #00ff41;
}

.options {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin: 20px 0;
}

.options label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    cursor: pointer;
    padding: 8px;
    border: 1px solid rgba(0, 255, 65, 0.2);
    border-radius: 5px;
    transition: all 0.3s ease;
}

.options label:hover {
    background: rgba(0, 255, 65, 0.05);
    border-color: #00ff41;
}

.options input[type="checkbox"] {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    border: 2px solid #00ff41;
    border-radius: 3px;
    background: transparent;
    cursor: pointer;
    position: relative;
    flex-shrink: 0;
}

.options input[type="checkbox"]:checked {
    background: #00ff41;
    box-shadow: 0 0 15px rgba(0, 255, 65, 0.3);
}

.options input[type="checkbox"]:checked::after {
    content: '✓';
    position: absolute;
    top: -2px;
    left: 1px;
    color: #000;
    font-size: 14px;
}

#password {
    width: 100%;
    padding: 15px;
    background: #001100;
    border: 2px solid #00ff41;
    color: #00ff41;
    font-size: 18px;
    font-family: 'Courier New', monospace;
    border-radius: 5px;
    margin: 15px 0;
    text-align: center;
    letter-spacing: 2px;
    box-shadow: inset 0 0 20px rgba(0, 255, 65, 0.1);
}

#password:focus {
    outline: none;
    box-shadow: 
        0 0 30px rgba(0, 255, 65, 0.2),
        inset 0 0 20px rgba(0, 255, 65, 0.2);
}

.button-group {
    display: flex;
    gap: 10px;
    margin: 15px 0;
}

button {
    flex: 1;
    padding: 12px;
    background: transparent;
    border: 2px solid #00ff41;
    color: #00ff41;
    font-family: 'Courier New', monospace;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 2px;
}

button:hover {
    background: #00ff41;
    color: #000;
    box-shadow: 0 0 30px rgba(0, 255, 65, 0.3);
    transform: scale(1.02);
}

button:active {
    transform: scale(0.95);
}

#strength {
    margin-top: 15px;
    text-align: center;
    font-size: 14px;
    letter-spacing: 2px;
    padding: 10px;
    border: 1px solid rgba(0, 255, 65, 0.1);
    border-radius: 5px;
    transition: all 0.3s ease;
}

.length-display {
    text-align: center;
    font-size: 14px;
    color: #00cc33;
    margin-top: 5px;
}

/* Responsive */
@media (max-width: 600px) {
    .container {
        padding: 20px;
    }
    .glitch {
        font-size: 20px;
    }
    .maldini-section img,
    .pedreiro-section img {
        width: 50px;
        height: 50px;
    }
    .options {
        grid-template-columns: 1fr;
    }
    button {
        font-size: 12px;
        padding: 10px;
    }
    #password {
        font-size: 14px;
        padding: 12px;
    }
}
