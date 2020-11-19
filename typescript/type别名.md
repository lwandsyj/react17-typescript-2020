1. type 别名

        type NotePitch = "A" | "B" | "C" | "D" | "E" | "F" | "G"


   type 别名常用语类型比较长或者多个类型联合，比如我们的参数类型是"A" | "B" | "C" | "D" | "E" | "F" | "G"，我们直接定义在参数中，可读性极差，因此我们可以使用别名给一个简单的类型名称

        type AG = "A" | "B" | "C" | "D" | "E" | "F" | "G"

        function show(p:AG){
                p 是AG 类型
        }

