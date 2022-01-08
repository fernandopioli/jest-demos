import { ClassA } from './../src/classA';
import { ClassB } from './../src/classB';
import { helper } from './../src/helper';
import { mocked } from 'ts-jest/utils';

// jest.mock('./../src/classB', () => {

// mok the class methods and attributes
// jest.mock("./../src/classB", () => {
//     return {
//         ClassB: jest.fn().mockImplementation(() => {
//             return {
//                 test: 'test novo 3',
//                 method1: jest.fn().mockImplementation(() => console.log('method1 B mocked 3'))
//             }
//         })
//     }
// })

// mok the class constructor
// jest.mock("./../src/classB", () => {
//     return {
//         ClassB: jest.fn().mockImplementation((test) => console.log('fffffffffffffffffff' + test))
//     }
// })


describe ('test mock classes', () => {

    it('classB', () => {

        //  const mock = mocked(ClassB, true)
        //  const sut = new ClassA('calling class A constructor')


        // mock the class B contructor via mocked
        // mock.mockImplementation(jest.fn().mockImplementation(() => {
        //     return {
        //         test: 'test novo',
        //         method1: jest.fn().mockImplementation(() => console.log('method1 B mocked'))
        //     }
        // }))


        //console.log(mock.prototype.method1.mock.calls)
       // expect(ClassA).toHaveBeenCalledWith('dd');
       //console.log(mock.mock.calls)
     //  expect(ClassB.prototype.constructor).toHaveBeenCalledWith('valor classe b')
     })

     //mock helper function

     // it('classA', () => {

    //     const sut = new ClassA('valor 1')

     /// ???????? maybe
    //     // jest.spyOn(ClassA.prototype as any, 'constructor').mockImplementationOnce(() => {
    //     //     console.log('fake Bar constructor implmentation');
    //     //   });

    //   const sut = helper()

    //   expect(ClassB.prototype.constructor).toHaveBeenCalledWith('valor classe b na function')
    // })
   
})