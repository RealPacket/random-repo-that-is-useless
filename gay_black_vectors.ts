type Optional<T> = T | undefined;
type OptNum = Optional<number>;
/**
 * A Vector with 2 values,
 * X and Y (1: X, 2: Y)
 */
class Vector2 {
  /**
   * The X axis of the vector.
   * @type {number}
   */
  readonly x: number;
  /**
   * The Y axis of the vector.
   * @type {number}
   */
  readonly y: number;
  /**
   * Creates a new Vector2 with the specified x and y values.
   * @param {number?} [x=0] The X axis of the Vector.
   * @param {number?} [y=0] The Y axis of the Vector.
   */
  constructor(x: OptNum = 0, y: OptNum = 0) {
    this.x = x;
    this.y = y;
  }
  /**
   * Returns a string representation of the Vector2.
   * @returns {string} The string representation of the Vector2.
   */
  toString(): string {
    return this.repr();
  }
  /**
   * Returns a readable representation of the Vector2.
   * @returns {string} The string representation of the Vector2.
   */
  repr(): string {
    return `Vector2(${this.x}, ${this.y})`;
  }
  /**
   * Returns the magnitude (length) of the vector.
   * @returns The magnitude of the vector.
   */
  magnitude(): number {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }
  /**
   * Adds another vector to this vector.
   * @param {Vector2} other The vector to add.
   * @returns The sum of this vector and the other vector.
   */
  add(other: Vector2): Vector2 {
    return new Vector2(this.x + other.x, this.y + other.y);
  }

  /**
   * Subtracts another vector from this vector.
   * @param {Vector2} other The vector to subtract.
   * @returns The difference of this vector and the other vector.
   */
  subtract(other: Vector2): Vector2 {
    return new Vector2(this.x - other.x, this.y - other.y);
  }

  /**
   * Multiplies this vector by a scalar.
   * @param {number} scalar The scalar to multiply by.
   * @returns The product of this vector and the scalar.
   */
  multiply(scalar: number): Vector2 {
    return new Vector2(this.x * scalar, this.y * scalar);
  }

  /**
   * Divides this vector by a scalar.
   * @param {number} scalar The scalar to divide by.
   * @returns The quotient of this vector and the scalar.
   */
  divide(scalar: number): Vector2 {
    return new Vector2(this.x / scalar, this.y / scalar);
  }
  /**
   * Returns a normalized version of the vector (magnitude = 1).
   * @returns A normalized version of the vector.
   */
  normalize(): Vector2 {
    const mag = this.magnitude();
    if (mag === 0) {
      return new Vector2();
    }
    return this.divide(mag);
  }
  /**
   * Returns the dot product of this vector and another vector.
   * @param {Vector2} other The other vector.
   * @returns The dot product of this vector and the other vector.
   */
  dot(other: Vector2): number {
    return this.x * other.x + this.y * other.y;
  }
  /**
   * Returns the distance between two vectors.
   * @param {Vector2} a The first vector.
   * @param {Vector2} b The second vector.
   * @returns The distance between the two vectors.
   */
  static distance(a: Vector2, b: Vector2): number {
    return a.subtract(b).magnitude();
  }
  /**
   * Returns the distance between two vectors.
   * @param {Vector2} other The other vector.
   * @returns The distance between the two vectors.
   */
  distance(other: Vector2): number {
    return this.subtract(other).magnitude();
  }
  /**
   * Returns the angle between two vectors (in radians).
   * @param {Vector2} a The first vector.
   * @param {Vector2} b The second vector.
   * @returns The angle between the two vectors (in radians).
   */
  static angle(a: Vector2, b: Vector2): number {
    return Math.acos(a.dot(b) / (a.magnitude() * b.magnitude()));
  }
  /**
   * Returns the angle between two vectors (in radians).
   * @param {Vector2} a The first vector.
   * @param {Vector2} other The second vector.
   * @returns The angle between the two vectors (in radians).
   */
  angle(other: Vector2): number {
    return Math.acos(this.dot(other) / (this.magnitude() * other.magnitude()));
  }
}
class Vector3 extends Vector2 {
  readonly z: number;
  constructor(x: OptNum = 0, y: OptNum = 0, z: OptNum = 0) {
    super(x, y);
    this.z = z;
  }
  /**
   *
   * @returns The string representation of a Vector3
   */
  override repr(): string {
    return `Vector3(${this.x}, ${this.y}, ${this.z})`;
  }

  /**
   * Returns the length of the vector.
   */
  get length(): number {
    return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
  }

  /**
   * Returns the squared length of the vector.
   */
  get lengthSquared(): number {
    return this.x ** 2 + this.y ** 2 + this.z ** 2;
  }

  /**
   * Returns a new vector with the same direction as this vector, but with a length of 1.
   */
  override normalize(): Vector3 {
    const length = this.length;
    return new Vector3(this.x / length, this.y / length, this.z / length);
  }

  /**
   * Returns the dot product of this vector and another vector.
   */
  override dot(other: Vector3): number {
    return this.x * other.x + this.y * other.y + this.z * other.z;
  }

  /**
   * Returns the cross product of this vector and another vector.
   */
  cross(other: Vector3): Vector3 {
    const x = this.y * other.z - this.z * other.y;
    const y = this.z * other.x - this.x * other.z;
    const z = this.x * other.y - this.y * other.x;
    return new Vector3(x, y, z);
  }

  /**
   * Returns the distance between this vector and another vector.
   */
  distanceTo(other: Vector3): number {
    const dx = this.x - other.x;
    const dy = this.y - other.y;
    const dz = this.z - other.z;
    return Math.sqrt(dx ** 2 + dy ** 2 + dz ** 2);
  }

  /**
   * Returns the squared distance between this vector and another vector.
   */
  distanceSquaredTo(other: Vector3): number {
    const dx = this.x - other.x;
    const dy = this.y - other.y;
    const dz = this.z - other.z;
    return dx ** 2 + dy ** 2 + dz ** 2;
  }

  /**
   * Returns a new vector that is the result of adding this vector and another vector.
   */
  override add(other: Vector3): Vector3 {
    return new Vector3(this.x + other.x, this.y + other.y, this.z + other.z);
  }

  /**
   * Returns a new vector that is the result of subtracting another vector from this vector.
   */
  override subtract(other: Vector3): Vector3 {
    return new Vector3(this.x - other.x, this.y - other.y, this.z - other.z);
  }
}
console.debug("Vector3 initialized.");
const test = new Vector3();
