export class ClassB {
    test: string = 'class B text = test - variable initial'
    constructor (test2: string) {
        this.test = test2
        console.log('Called class B constructir with ' + test2)
    }
    method1 (paramMethod1?: string): any {
        console.log('ClassB method1 ' + paramMethod1)
        return 'ClassB method1 ' + paramMethod1
    }
    method2 (paramMethod2?: string): any {
        console.log('ClassB method2 ' + paramMethod2)
        return 'ClassB method2 ' + paramMethod2
    }//
}