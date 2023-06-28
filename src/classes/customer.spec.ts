import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

describe('Individual Customer', () => {
  afterEach(() => jest.clearAllMocks());

  it('Should have the correct properties', () => {
    const sut = createIndividualCustomer('Rafael', 'Tula', '14610177692');
    expect(sut).toHaveProperty('firstName', 'Rafael');
    expect(sut).toHaveProperty('lastName', 'Tula');
    expect(sut).toHaveProperty('cpf', '14610177692');
  });

  it('Should have methods to get name and idn', () => {
    const sut = createIndividualCustomer('Rafael', 'Tula', '14610177692');
    expect(sut.getName()).toBe('Rafael');
    expect(sut.getIdn()).toBe('14610177692');
  });
});

describe('Enterprise Customer', () => {
  afterEach(() => jest.clearAllMocks());

  it('Should have correct properties', () => {
    const sut = createEnterpriseCustomer('Rafael', '14610177692');
    expect(sut).toHaveProperty('name', 'Rafael');
    expect(sut).toHaveProperty('cnpj', '14610177692');
  });

  it('Should have methods to get name and idn', () => {
    const sut = createEnterpriseCustomer('Rafael', '14610177692');
    expect(sut.getName()).toBe('Rafael');
    expect(sut.getIdn()).toBe('14610177692');
  });
});
