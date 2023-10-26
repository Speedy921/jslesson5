function range(start, end) {
    // Преобразует start в число или устанавливает его равным 0, если start не является числом
    start = Number(start) || 0;
    // Проверяет, был ли передан аргумент end
    if (end === undefined) {
        // Возвращает функцию getEnd, которая принимает end в качестве аргумента и вызывает getRange
        return function getEnd(end) {
            return getRange(start, end);
        };
    }

    // Если аргумент end был передан, выполняется следующий блок кода
    else {
        // Преобразует end в число или устанавливает его равным 0, если end не является числом
        end = Number(end) || 0;
        // Вызывает функцию getRange с аргументами start и end и возвращает результат
        return getRange(start, end);
    }
    
    // Определяет функцию getRange с параметрами start и end
    function getRange(start, end) {
        // Инициализирует пустой массив ret
        var ret = [];
        // Заполняет массив числами от start до end включительно
        for (let i = start; i <= end; i++) {
            ret.push(i);
        }

        // Возвращает заполненный массив ret
        return ret;
    }
}
console.log(range(3, 3)); // [3]
console.log(range(3, 8)); // [3,4,5,6,7,8]
console.log(range(3, 0)); // []

var start3 = range(3);
var start4 = range(4);
console.log(start3(3)); // [3]
console.log(start3(8)); // [3,4,5,6,7,8]
console.log(start3(0)); // []
console.log(start4(6)); // [4,5,6]
