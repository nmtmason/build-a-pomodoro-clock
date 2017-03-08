document.addEventListener('DOMContentLoaded', function () {
  var progressHandler = {
    $progress: undefined,
    $clock: undefined,
    interval: undefined,
    timer: undefined,
    maxTimer: undefined,
    beep: function () {
    },
    decrement: function () {
      if (this.timer === 0) {
        this.beep();
        this.reset();
        return;
      }
      this.timer -= 1;
      this.updateProgress();
      this.updateTimer();
    },
    calculatePercentage: function () {
      return Math.floor((this.timer / this.maxTimer) * 100);
    },
    toggle: function () {
      if (!this.interval) {
        this.start();
      } else {
        this.stop();
      }
    },
    start: function () {
      this.$progress.classList.remove('complete');
      this.interval = setInterval(this.decrement.bind(this), 1000);
    },
    stop: function () {
      clearInterval(this.interval);
      this.interval = undefined;
    },
    reset: function (seconds) {
      if (seconds) {
        this.maxTimer = seconds;
      }
      this.stop();
      this.timer = this.maxTimer;
      this.$progress.classList.add('complete');
      this.updateProgress();
      this.updateTimer();
    },
    registerProgress: function ($element) {
      this.$progress = $element;
    },
    updateProgress: function () {
      var percentage = this.calculatePercentage() + '%';
      this.$progress.style.width = percentage;
      this.$progress.style.height = percentage;
    },
    minus: function () {
      if (this.timer - 60 < 0) {
        return;
      }
      this.timer -= 60;
      this.maxTimer -= 60;
      this.updateProgress();
      this.updateTimer();
    },
    plus: function () {
      this.timer += 60;
      this.maxTimer += 60;
      this.updateProgress();
      this.updateTimer();
    },
    registerTimer: function ($element) {
      this.$clock = $element;
    },
    updateTimer: function () {
      function pad (str, padding) {
        return String(padding + str).slice(-padding.length);
      }
      var minutes = Math.floor(this.timer / 60);
      var seconds = this.timer - minutes * 60;
      this.$clock.innerHTML = pad(minutes, '00') + ':' + pad(seconds, '00');
    }
  };

  var app = Object.create(progressHandler);
  app.registerToggleHandler = function ($element) {
    $element.addEventListener('click', this.toggle.bind(this));
  };
  app.registerPlusHandler = function ($element) {
    $element.addEventListener('click', this.plus.bind(this));
  };
  app.registerMinusHandler = function ($element) {
    $element.addEventListener('click', this.minus.bind(this));
  };

  app.registerTimer(document.querySelector('.clock'));
  app.registerProgress(document.querySelector('.progress'));
  app.registerToggleHandler(document.querySelector('.clock'));
  app.registerMinusHandler(document.querySelector('.minus'));
  app.registerPlusHandler(document.querySelector('.plus'));
  app.reset(60 * 30);
});
