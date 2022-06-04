type PersonType = 1 | 2;

interface PersonCreateData {
  name: string;
  type: PersonType;
  birthDate: Date;
}

export interface PersonRepository {
  create: (data: PersonCreateData) => Promise<void>;
}
