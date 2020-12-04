1. 插件

        npm install redux -S  // redux 本身

        npm install react-redux -S // redux ui react

        npm install redux-saga -S // 异步action

        npm install redux-promise -S // 异步action

        npm install redux-thunk -S // 异步action

2. redux api

+ createStore: 创建store

+ applyMiddleWare: 应用中间件

+ combineReducers： 合并reducer

   随着应用变得越来越复杂，可以考虑将 reducer 函数 拆分成多个单独的函数，拆分后的每个函数负责独立管理 state 的一部分。

   combineReducers 辅助函数的作用是，把一个由多个不同 reducer 函数作为 value 的 object，合并成一个最终的 reducer 函数，然后就可以对这个 reducer 调用 createStore 方法。

   合并后的 reducer 可以调用各个子 reducer，并把它们返回的结果合并成一个 state 对象。 由 combineReducers() 返回的 state 对象，会将传入的每个 reducer 返回的 state 按其传递给 combineReducers() 时对应的 key 进行命名

            rootReducer = combineReducers({potato: potatoReducer, tomato: tomatoReducer})
            // rootReducer 将返回如下的 state 对象
            {
                potato: {
                    // ... potatoes, 和一些其他由 potatoReducer 管理的 state 对象 ... 
                },
                tomato: {
                    // ... tomatoes, 和一些其他由 tomatoReducer 管理的 state 对象，比如说 sauce 属性 ...
                }
            }

> combineReducers({key:func}): 接受一个对象形式，value 为reducer 函数

            export default function combineReducers(reducers) {
                const reducerKeys = Object.keys(reducers)
                const finalReducers = {}
                for (let i = 0; i < reducerKeys.length; i++) {
                    const key = reducerKeys[i]

                    if (process.env.NODE_ENV !== 'production') {
                        if (typeof reducers[key] === 'undefined') {
                            warning(`No reducer provided for key "${key}"`)
                        }
                    }

                    // 
                    if (typeof reducers[key] === 'function') {
                        finalReducers[key] = reducers[key]
                    }
                }

                // 返回一个函数
                return function combination(state = {}, action) {
                    ... 
                }
            }

> 执行reducer 返回state

            const nextState = {}
                for (let i = 0; i < finalReducerKeys.length; i++) {
                    const key = finalReducerKeys[i]

                    const reducer = finalReducers[key]

                    const previousStateForKey = state[key]

                    const nextStateForKey = reducer(previousStateForKey, action)

                    if (typeof nextStateForKey === 'undefined') {
                        const errorMessage = getUndefinedStateErrorMessage(key, action)
                        throw new Error(errorMessage)
                    }
                    // key 为combineReducer 设置的key
                    nextState[key] = nextStateForKey

                    hasChanged = hasChanged || nextStateForKey !== previousStateForKey
                }
                hasChanged =
                hasChanged || finalReducerKeys.length !== Object.keys(state).length
                
                return hasChanged ? nextState : state
            }

            {
                // key 为combineReducer 设置的key 
                key:{

                }
            }

+ store: 

   + getState() 

   + dispatch(action)

   + subsribe(listener)

   + replaceReducer()

