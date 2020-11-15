1. 使用typescript 中接口来定义props 的类型

        interface AddNewItemProps {
            onAdd(text: string): void, // 回调函数
            toggleButtonText: string，// 父元素传递的值
            dark?: boolean  // 可选参数
        }