        {
            "compilerOptions"
             {
                "target": "es5",
                "module": "commonjs",
                "sourceMap": true,
                "outDir": "./dist",
                "strict": true,
                "noImplicitAny": true,// 不能有隐式声明any, 如果要any 必须显示声明any 类型
                "strictNullChecks": true, // false 的情况下null 和 undefined 是所有类型的子类，可以赋值null,undefined, true : 必须显示声明null|undefined
                "strictFunctionTypes": true,
                "strictBindCallApply": true, //当您使用bind（）、call（）和apply（）函数时，这将支持更严格的检查。
                "strictPropertyInitialization": true, // 类属性必须在构造函数或定义时初始化，需要strictNullChecks 配置
                "noImplicitThis": true, // 检查this 为隐式any 的
                "alwaysStrict": true, // 这将导致tsc以ES6 strict模式解析代码，并在输出JavaScript文件的顶部包含“use strict”指令，以在运行时启用更严格的ES6遵循策略
                "esModuleInterop": true,
                "forceConsistentCasingInFileNames": true
            },
            "include": [ "src/**/*" ]
        }