particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 70,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#A9A9A9" // Partículas em cinza claro
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#A9A9A9"
            }
        },
        "opacity": {
            "value": 1,
            "random": false
        },
        "size": {
            "value": 3,
            "random": true
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": true,
            "out_mode": "out",
            "bounce": false
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            }
        },
        "modes": {
            "bubble": {
                "distance": 250,
                "size": 5,
                "duration": 2,
                "opacity": 1,
                "speed": 3
            }
        }
    },
    "retina_detect": true
});