import { ClassB } from './classB';

export class ClassA {

    test: string = 'class A text = test - variable initial'
    constructor (test2: string) {
        this.test = test2
        const classb = new ClassB('calling class B')
        console.log('Called class A constructir with ' + test2)
    }

    method1 (paramMethod1?: string): any {
        console.log('ClassA method1 ' + paramMethod1)
        return 'ClassA method1 ' + paramMethod1
    }
    method2 (paramMethod2?: string): any {
        console.log('ClassA method2 ' + paramMethod2)
        return 'ClassA method2 ' + paramMethod2
    }
}