export const options = {
    background: {
        color: {
            value: "#121212",
        },
    },
    fpsLimit: 60,
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
            value: 50,
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
