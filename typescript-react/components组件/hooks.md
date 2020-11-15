1. hooks 实例

            export const AddNewItem = (props: AddNewItemProps) => {

                // state hooks 
                const [showForm, setShowForm] = useState(false);

                // props 结构
                const { onAdd, toggleButtonText, dark } = props;

                if (showForm) {
                    // We show item creation form here
                }

                return (
                    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
                        {toggleButtonText}
                    </AddItemButton>
                )
            }

            props 结构可以用于参数中

            export const AddNewItem = ({onAdd, toggleButtonText, dark}: AddNewItemProps) => { }

2. useRef 实例

        import { useRef, useEffect } from "react"

        export const useFocus = () => {
            // ref 类型 HTMLInputElement
            const ref = useRef<HTMLInputElement>(null)
           
            useEffect(() => {
                ref.current?.focus()
            })

            return ref
        }

   HTMLInputElement: input ，typescript 为dom 声明了类型,比如

   HTMLDivElement 


3. useReducer

        interface State {
             count: number;
        }

        type Action =
            | {
                 type: "increment"
            }
            | {
                 type: "decrement"
            }

        const counterReducer = (state: State, action: Action) => {
            switch (action.type) {
                case "increment":
                    return { count: state.count + 1 }
                case "decrement":
                    return { count: state.count - 1 }
                default:
                    throw new Error()
            }
        }