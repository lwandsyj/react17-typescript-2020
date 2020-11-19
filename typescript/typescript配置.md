2.7typescript有allowSyntheticDefaultImports

选项。启用此选项时，Typescript将假装导入的模块

具有默认导出

因此我们使用import React from 'react' 没有默认导出的亦不会报错


2. typeRoots ：告诉tsc 去哪里查找类型声明文件

        typeRoots:[
            "./types", // 自己声明的
            ""node_modules/@types"
        ]