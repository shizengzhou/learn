function Modal(selector) {
  this.$modal = document.querySelector(selector);

  this.$modal.addEventListener('click', e => {
    if (e.target === this.$modal) {
      this.hide();
    }
  });

  this.$modal.querySelector('.close').addEventListener('click', () => {
    this.hide();
  });
}

Modal.prototype.show = function() {
  this.$modal.style.display = 'block';
};

Modal.prototype.hide = function() {
  this.$modal.style.display = 'none';
};
