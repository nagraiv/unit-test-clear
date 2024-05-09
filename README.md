[![Build status](https://ci.appveyor.com/api/projects/status/5q2495it6hmae65u/branch/master?svg=true)](https://ci.appveyor.com/project/nagraiv/unit-test-clear/branch/master)

# Домашнее задание к лекции «Unit-тестирование» [ссылка](https://github.com/netology-code/js-advanced-homeworks/tree/master/unit-test)

**Важно**: каждая задача выполняется в виде отдельного проекта с собственным GitHub репозиторием.

**Важно**: ESLint не должен выдавать ошибок.

**Важно**: Jest должен обеспечивать 100% покрытие по строкам для тестируемых вами функций.

**Важно**: Ко всем задачам должен быть подключен Appveyor и выставлен бейджик статуса.

**Важно**: используйте `import`/`export` а не `require`.

## Описание установки

```shell
npm init
# При инициалиализации в качестве тестовой команды указать:
# test command: jest --coverage
npm install --save-dev jest @babel/core @babel/cli @babel/preset-env
npm install core-js@3
```

Не забудьте про `babel.config.json` и `.browserslistrc`.

В `babel.config.json`:
```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "entry",
        "corejs": "3.22"
      }
    ]
  ]
}

```

Запуск тестов:
```shell
npm test
```

---

## Чистые функции

### Легенда

Во время игры вам необходимо будет отображать полоску жизни над игровым персонажем. Для сигнализации пользователю вы решили ввести цветовую индикацию:
1. Здоровье более 50 - зелёный;
1. Здоровье от 50 и до 15 - жёлтый;
1. Менее 15 - красный.

### Описание

Реализуйте функцию, которая на вход принимает объект вида:
```javascript
{name: 'Маг', health: 90}
```
И возвращает ответ в виде одной из строк: `healthy`, `wounded`, `critical`

Сгенерируйте проект на базе `npm`. Подключите туда `jest` и напишите авто-тесты, которые обеспечивают 100% покрытие вашей функции по строкам.

Убедитесь, что вы обеспечили 100% покрытие тестами.