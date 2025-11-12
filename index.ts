// // enum

// // type UserRole = 'Admin' | 'Editor'| 'Viewr';

// // enum UserRole{
// //     Admin = 'Admin',
// //     Editor = 'Editor',
// //     Viewer = 'Viewer',
// // }

// // const canEdit = (role: UserRole)=>{
// //     if(role === UserRole.Admin || role === UserRole.Editor){
// //         return true;
// //     }else return false;
// // }

// // const isEditPermissable = canEdit(UserRole.Admin)
// // console.log(isEditPermissable)

// // as const asssertion

// // enum UserRole{
// //     Admin = 'Admin',
// //     Editor = 'Editor',
// //     Viewer = 'Viewer',
// // }

// const UserRole = {
//      Admin : 'Admin',
//     Editor : 'Editor',
//     Viewer : 'Viewer',
// } as const;


// // UserRole.Admin = 'Mon chai';


// // const canEdit = (role:keyof typeof UserRole)=>{
// //     if(role === UserRole.Admin || role === UserRole.Editor){
// //         return true;
// //     }else return false;
// // }

// const canEdit = (role: (typeof UserRole)[keyof typeof UserRole])=>{
//     if(role === UserRole.Admin || role === UserRole.Editor){
//         return true;
//     }else return false;
// }

// const isEditPermissable = canEdit(UserRole.Admin)
// console.log(isEditPermissable)

// conditional type

// type A = null
// type B = undefined

// type C = A extends null ? true : false;

// type BorolokerGari = {
//     bike: string,
//     car: string,
//     ship: string,
// }

// type CheckGari<T> = T extends 'bike' | 'car' |'ship' ? true : false;

// type HasBike = CheckGari<'bike'>

const arrayOfNum: number[] = [1,4,6];

const arrayOfStringUsingMap: string[] = arrayOfNum.map((num)=>num.toString())

console.log(arrayOfStringUsingMap)

const user = {
    id: 222
}


type AreaOfNum = {
    height: number,
    width: number,
}

type height = AreaOfNum['height']

// type AreaOfString = {
//    [key in 'height' | 'width']: string;
// }

type Area<T> = {
    // [key in keyof T]: T[key];
    [key in keyof T]: number;
}

const area1: Area<{height: string; width: string}> = {
    height: 50,
    width: 40,
}

