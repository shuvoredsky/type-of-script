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

type A = null
type B = undefined

type C = A extends null ? true : false;

type BorolokerGari = {
    bike: string,
    car: string,
    ship: string,
}

type CheckGari<T> = T extends 'bike' | 'car' |'ship' ? true : false;

type HasBike = CheckGari<'bike'>