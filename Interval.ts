export class Interval {
  id?: number;
  start = new Date();
  end = new Date();
  sum = 0;
  latest = false;

  constructor(dto?: Interval) {
    if (dto) {
      Object.assign(this, dto);

      this.start = new Date(dto.start);
      this.end = new Date(dto.end);
    }
  }
}
