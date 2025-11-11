// enum

// type UserRole = 'Admin' | 'Editor'| 'Viewr';

// enum UserRole{
//     Admin = 'Admin',
//     Editor = 'Editor',
//     Viewer = 'Viewer',
// }

// const canEdit = (role: UserRole)=>{
//     if(role === UserRole.Admin || role === UserRole.Editor){
//         return true;
//     }else return false;
// }

// const isEditPermissable = canEdit(UserRole.Admin)
// console.log(isEditPermissable)

// as const asssertion

// enum UserRole{
//     Admin = 'Admin',
//     Editor = 'Editor',
//     Viewer = 'Viewer',
// }

const UserRole = {
     Admin : 'Admin',
    Editor : 'Editor',
    Viewer : 'Viewer',
} as const;


// UserRole.Admin = 'Mon chai';


// const canEdit = (role:keyof typeof UserRole)=>{
//     if(role === UserRole.Admin || role === UserRole.Editor){
//         return true;
//     }else return false;
// }

const canEdit = (role: (typeof UserRole)[keyof typeof UserRole])=>{
    if(role === UserRole.Admin || role === UserRole.Editor){
        return true;
    }else return false;
}

const isEditPermissable = canEdit(UserRole.Admin)
console.log(isEditPermissable)