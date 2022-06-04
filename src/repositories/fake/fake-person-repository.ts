import { PersonRepository } from '../person-repositories';

type PersonType = 1 | 2;

interface PersonCreateData {
  name: string;
  type: PersonType;
  birthDate: Date;
}

export class FakePersonRepository implements PersonRepository {
  async create({ name, type, birthDate }: PersonCreateData) {}
}
