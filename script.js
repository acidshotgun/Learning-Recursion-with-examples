console.log(document.body.childNodes);


console.log(document.querySelector('#current').parentNode);

console.log(document.querySelector('[data-current = "3"]'));
console.log(document.querySelector('[data-current = "3"]').parentElement);
console.log(document.querySelector('[data-current = "3"]').nextElementSibling);


console.log(document.querySelector('.wrapper').children);


// ИЗУЧАЕМ РЕКУРСИЮ!!!!!!!!
function pow(num, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= num;
    }

    return result;
}

console.log(pow(4, 4));


function pow(num, n) {
    if (n === 1) {
        return num;
    } else {
        return num * pow(num, n - 1);
    }
}

console.log(pow(4, 4));




// ========= СЛОЖНАЯ И ОБЪЕМНАЯ ЗАДАЧА НА ПОНИМАНИЕ РЕКУРСИИ =========
 
let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18
        }],

        pro: [{
            name: 'Sam',
            progress: 10
        }],

        // В обычно итерации не сработает так как есть доп вложенный объект с массивом
        // Сработает в рекурсии
        semi: {
            students: [{
                name: 'Test',
                progress: 100
            }]
        }
    }
};

// ЦИКЛ
function getTotalProgressByIteration(data) {
    let total = 0;
    let students = 0;

    for (let course of Object.values(data)) {
        if (Array.isArray(course)) {
            students += course.length;

            for (let i = 0; i < course.length; i++) {
                total += course[i].progress;
            }
        } else {
            for (let subCourse of Object.values(course)) {
                students += subCourse.length;

                for (let i = 0; i < subCourse.length; i++) {
                    total += subCourse[i].progress;
                }
            }
        }
    }

    return total / students;
}

console.log(getTotalProgressByIteration(students));


// РЕКУРСИЯ
function getTotalProgressByRecursion(data) {
    if (Array.isArray(data)) {
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }

        return [total, data.length];
    } else {
        let total = [0, 0];

        for (let subData of Object.values(data)) {
            const subDataArr = getTotalProgressByRecursion(subData); 
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }

        return total;
    }
}

const result = getTotalProgressByRecursion(students);

console.log(result[0] / result[1]);