export class User {
    constructor(
      readonly id: number,
      readonly name: string,
      readonly email: string,
      readonly password: string,
      readonly numero_servicio: number
    ) {}
}