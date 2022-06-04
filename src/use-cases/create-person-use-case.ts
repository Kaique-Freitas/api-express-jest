import { PersonRepository } from '../repositories/person-repositories';
import { PersonTypes } from '../types/enum/PersonTypes';

// type PersonType = ;

interface PersonCreateData {
  name: string;
  type: PersonTypes;
  birthDate: Date;
}

export class CreatePersonUseCase {
  constructor(private personRepository: PersonRepository) {}

  async execute(request: PersonCreateData) {
    const { name, type, birthDate } = request;

    if (type !== 1 && type !== 2) throw new Error('Type of person wrong');

    this.personRepository.create({ name, type, birthDate });
  }
}
