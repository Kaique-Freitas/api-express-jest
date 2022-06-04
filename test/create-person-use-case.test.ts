import { CreatePersonUseCase } from '../src/use-cases/create-person-use-case';

describe('Create person', () => {
  it('should be able create a person', async () => {
    const createPerson = new CreatePersonUseCase({ create: async () => {} });

    await expect(
      createPerson.execute({
        name: 'John Doe',
        type: 2,
        birthDate: new Date(),
      })
    ).resolves.not.toThrow();
  });

  it('should not be able to create person with invalid person type', async () => {
    const createPerson = new CreatePersonUseCase({ create: async () => {} });

    await expect(
      createPerson.execute({
        name: 'John Doe',
        type: 3,
        birthDate: new Date(),
      })
    ).rejects.toThrow();
  });
});
