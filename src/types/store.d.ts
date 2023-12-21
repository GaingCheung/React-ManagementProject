/**
 * 全局声明文件
 * 
 * 1. TS中提供了ReturnType用于获取函数类型的返回值
 * 2. ReturnType使用方法为接受一个函数类型，并返回该函数的返回值的类型
 * 3. store.getState()方法可以访问全局 state
 */
type RootState = ReturnType<typeof import('@/store').getState>
interface Window{
    __REDUX_DEVTOOLS_EXTENSION__: function;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: function;
}