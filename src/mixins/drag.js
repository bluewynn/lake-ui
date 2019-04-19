export default {
  data() {
    return {
      dragState: {
        dragOffsetX: 0,
        dragOffsetY: 0,
        dragStartX: 0,
        dragStartY: 0,
        isDragging: false,
        direction: '',
      },
    };
  },
  methods: {
    dragStart(e) {
      if (this.dragState.isDragging) return;

      const { clientX, clientY } = e.touches[0];

      this.dragState.isDragging = true;
      this.dragState.dragOffsetX = 0;
      this.dragState.dragOffsetY = 0;
      this.dragState.dragStartX = clientX;
      this.dragState.dragStartY = clientY;
    },
    dragMove(e) {
      if (!this.dragState.isDragging) return;

      const { clientX, clientY } = e.touches[0];
      this.dragState.dragOffsetX = this.dragState.dragStartX - clientX;
      this.dragState.dragOffsetY = this.dragState.dragStartY - clientY;

      const getDirection = (x, y) => {
        if (x > y && x > 10) {
          return 'x';
        }
        if (y > x && y > 10) {
          return 'y';
        }

        return '';
      };

      this.dragState.direction = getDirection(
        Math.abs(this.dragState.dragOffsetX),
        Math.abs(this.dragState.dragOffsetY),
      );
    },
    dragEnd() {
      this.dragState.isDragging = false;
    },
  },
};
