import Els from "../core";

// техническая функция анимации
Els.prototype.animate = function(dur, cb, fin) {
    let timeStart;
    
    function _animateOverTime(time) {
        if (!timeStart) {
            timeStart = time;
        }

        let timeElapsed = time - timeStart,
            complaction = Math.min(timeElapsed / dur, 1);

        cb(complaction);

        if (timeElapsed < dur) {
            requestAnimationFrame(_animateOverTime);
        } else {
            if (typeof fin === 'function') fin();
        }
    }

    return _animateOverTime;
}

// функция появление элемента
Els.prototype.appear = function(dur, display, fin) {
    for (let i = 0; i < this.length; i++) {
        this[i].style.display = display || 'block';

        const _appear = (complaction) => {
            this[i].style.opacity = complaction;
        }

        const anim = this.animate(dur, _appear, fin);

        requestAnimationFrame(anim);
    }

    return this;
}

// функция исчезновения элемента
Els.prototype.disappear = function(dur, fin) {
    for (let i = 0; i < this.length; i++) {

        const _disappear = (complaction) => {
            this[i].style.opacity = 1 - complaction;
            if (complaction === 1) this[i].style.display = 'none';
        }

        const anim = this.animate(dur, _disappear, fin);

        requestAnimationFrame(anim);
    }

    return this;
}

// функция изменения состояния видимости элемента
Els.prototype.appearToggle = function(dur, display, fin) {
    for (let i = 0; i < this.length; i++) {
        if (window.getComputedStyle(this[i]).display === 'none') {
            this[i].style.display = display || 'block';

            const _appear = (complaction) => {
                this[i].style.opacity = complaction;
            }

            const anim = this.animate(dur, _appear, fin);

            requestAnimationFrame(anim);
        } else {
            const _disappear = (complaction) => {
                this[i].style.opacity = 1 - complaction;
                if (complaction === 1) this[i].style.display = 'none';
            }
    
            const anim = this.animate(dur, _disappear, fin);
    
            requestAnimationFrame(anim);
        }
    }

    return this;
}

