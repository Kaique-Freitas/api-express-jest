import { Router } from 'express';

import { FakePersonRepository } from '../repositories/fake/fake-person-repository';
import { CreatePersonUseCase } from '../use-cases/create-person-use-case';

export const routes = Router();

routes.post('/person', async (request, response) => {
  const { name, type, birthDate } = request.body;

  const fakePersonRepository = new FakePersonRepository();
  const createPersonUseCase = new CreatePersonUseCase(fakePersonRepository);

  try {
    await createPersonUseCase.execute({
      name,
      type,
      birthDate,
    });

    return response.json({
      error: false,
      message: 'Person created with successfully',
    });
  } catch {
    return response.json({
      error: true,
      message: 'Error creating person',
    });
  }
});
