window.addEventListener('DOMContentLoaded', () => {
    window.console.log('Loaded…');

    function parallax(scrollY) {
        $logotype.style.transform = `translateY(${-scrollY * 0.25}px) scaleX(${1.25 - scrollY * 0.00075}) scaleY(${1.25 - scrollY * 0.00075}) rotateX(${scrollY * 0.05}deg)`
        $elements.style.transform = `translateY(${-scrollY * 0.1}px)`
        $slogan.style.transform = `translateY(${-scrollY * 0.03}px) scaleX(${scrollY * 0.0005}) scaleY(${scrollY * 0.0005})`

        Array.from($element).forEach(($e, i) => {
            if (i === 9) { // Rocket
                $e.style.transform = `translateX(${scrollY * 0.2}px) rotate(${scrollY * 0.01}deg)`
            } else if (i === 1) { // Comet
                $e.style.transform = `translateX(${-scrollY * 0.2}px)`
            } else if ((i + 1) % 2 === 0) {
                $e.style.transform = `translateX(${-scrollY * 0.05}px)`
            } else if (i % 3 === 0) {
                $e.style.transform = `translateX(${scrollY * 0.05}px)`
            }

            if (i === 8) { // Asteroids
                $e.style.transform = `scaleX(${2.25 - scrollY * 0.0005}) scaleY(${2.25 - scrollY * 0.0005}) rotate(${scrollY * 0.01}deg)`
            } else if (i % 4 === 0) {
                $e.style.transform = `scaleX(${1 + scrollY * 0.0005}) scaleY(${1 + scrollY * 0.0005})`
            }

        });
    }

    let $elements = document.getElementById('elements');
    let $logotype = document.getElementById('logotype')
    let $slogan = document.getElementById('slogan')
    let $element = document.getElementsByClassName('element');

    parallax(window.scrollY);

    window.addEventListener('scroll', () => {
        parallax(window.scrollY);
    });
})
