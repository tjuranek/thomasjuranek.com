import React from 'react';
import TsParticles from 'react-tsparticles';

const options = {
    background: {
        color: {
            value: "#121212",
        },
    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "grab",
            },
        },
        modes: {
            grab: {
                distance: 200,
                links: {
                    blink: true,
                },
            },
        },
    },
    particles: {
        color: {
            value: "#ffffff",
        },
        collisions: {
            enable: true,
        },
        move: {
            enable: true,
            random: false,
            speed: 1.5,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 100,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            random: true,
            value: 5,
        },
    },
};

export function Particles() {
    return (
        <TsParticles options={options} />
    );
}



