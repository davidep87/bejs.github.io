/**
 * Created by Fabio on 08/07/2017.
 */
(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-102128866-1', 'auto');
ga('send', 'pageview');

(function () {
    var options = {
        "particles": {
            "number": {
                "value": 99,
                "density": {"enable": true, "value_area": 552.4033491425909}
            },
            "color": {"value": "#dbb886"},
            "shape": {
                "type": "triangle",
                "stroke": {"width": 0, "color": "#000000"},
                "polygon": {"nb_sides": 3},
                "image": {"src": "img/github.svg", "width": 70, "height": 100}
            },
            "opacity": {
                "value": 1,
                "random": true,
                "anim": {"enable": false, "speed": 1, "opacity_min": 0.1, "sync": false}
            },
            "size": {
                "value": 2,
                "random": true,
                "anim": {"enable": false, "speed": 40, "size_min": 0.1, "sync": false}
            },
            "line_linked": {"enable": true, "distance": 150, "color": "#dbb886", "opacity": 0.4, "width": 1},
            "move": {
                "enable": true,
                "speed": 1.5782952832645452,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {"enable": false, "rotateX": 600, "rotateY": 1200}
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {"enable": false, "mode": "repulse"},
                "onclick": {"enable": true, "mode": "repulse"},
                "resize": true
            },
            "modes": {
                "grab": {"distance": 400, "line_linked": {"opacity": 1}},
                "bubble": {"distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3},
                "repulse": {"distance": 200, "duration": 0.4},
                "push": {"particles_nb": 4},
                "remove": {"particles_nb": 2}
            }
        },
        "retina_detect": false
    };
    particlesJS("particle", options);
})();

(function () {
    new Typed("#api code", {
        // Waits 1000ms after typing "First"
        strings: [
            'be.boolean(1)',
            'be.true(false)',
            'be.array([1, 2, 3])',
            'be.not.array(\'hello\')',
            'be.number(123456)',
            'be.negativeZero(-0)',
            'be.between(4, 1, 10)',
            'be.all.object({a: 1}, {b: 2), true)',
            'be.date(new Date(\'2017-07-07\'))',
            'be.chrome()',
            'be.equal({a: 1}, {a: 1})',
            'be.md5(\'00236a2ae558018ed13b5222ef1bd977\')',
            'be.similarity(\'hello\', \'hello!\', 0.5)',
            'be.camelCase(\'helloWorld\')',
            'be.word(\'hello\')',
            'be.url(\'http://www.google.it\')'
        ],
        loop: true,
        typeSpeed: 50,
        backSpeed: 20
    });
})();