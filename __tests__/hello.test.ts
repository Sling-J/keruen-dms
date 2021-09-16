test('два плюс два равно четыре', () => {
  expect(2 + 2).toBe(4)
})

test('присваивание объекту', () => {
  const data = { one: 1 }
  data['two'] = 2
  expect(data).toEqual({ one: 1, two: 2 })
})

test('сложение положительных чисел не равно нулю', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0)
    }
  }
})

test('null', () => {
  const n = null
  expect(n).toBeNull()
  expect(n).toBeDefined()
  expect(n).not.toBeUndefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})

test('ноль', () => {
  const z = 0
  expect(z).not.toBeNull()
  expect(z).toBeDefined()
  expect(z).not.toBeUndefined()
  expect(z).not.toBeTruthy()
  expect(z).toBeFalsy()
})

test('два плюс два', () => {
  const value = 2 + 2
  expect(value).toBeGreaterThan(3)
  expect(value).toBeGreaterThanOrEqual(3.5)
  expect(value).toBeLessThan(5)
  expect(value).toBeLessThanOrEqual(4.5)

  // toBe и toEqual эквивалентны по отношению к числам
  expect(value).toBe(4)
  expect(value).toEqual(4)
})

test('сложение чисел с плавающей запятой', () => {
  const value = 0.1 + 0.2
  //expect(value).toBe(0.3);         Это не будет работать из-за ошибки округления
  expect(value).toBeCloseTo(0.3) // А это сработает.
})

test('в команде нет места Я', () => {
  expect('команда').not.toMatch(/Я/)
})

test('но есть "ася" в Васе', () => {
  expect('Вася').toMatch(/ася/)
})
