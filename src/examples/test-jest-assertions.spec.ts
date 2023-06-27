describe('Primitive values', () => {
  it('should test jest assertions', () => {
    const number = 10;
    expect(number).toBe(10);
    expect(number).toEqual(10); // To use with objects

    expect(number).not.toBeNull();
  });
});
