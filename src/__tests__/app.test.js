import healthRange from '../App/app'

test.each([
    ['high', { name: 'Bob', health: 90 }, 'healthy'],
    ['low', { name: 'John', health: 5 }, 'critical'],
    ['average', { name: 'Lora', health: 38 }, 'wounded']
])(
    ('Тестируем функцию оценки %s здоровья персонажа %s'),
    (range, player, healthStatus) => {
        const result = healthRange(player);
        expect(result).toBe(healthStatus);
    }
);