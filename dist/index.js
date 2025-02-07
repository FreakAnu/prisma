"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
//   async function insertUser(email:string,password:string,firstName:string,lastName:string){
//     const res =await prisma.user.create({
//         data:{
//             email,
//             firstName,
//             lastName,
//             password
//         },
//         select:{
//             id:true,
//             email:true
//         }
//     })
//     console.log(res)
// }
// insertUser("basic2@gmail.com","password1","basic2","here2") 
// insertUser("basic3@gmail.com","password2","basic3","here3") 
// insertUser("basic4@gmail.com","password3","basic4","here4") 
// insertUser("basichere@gmail.com","password4","basic5","here5") 
// interface UpdateParams{
//     firstName:string;
//     lastName:string;
// }
// async function updateUser(email:string,{firstName,lastName}:UpdateParams){
//     const res = await prisma.user.update({
//         where:{email:email},
//         data:{
//             firstName,
//             lastName
//         }
//     })
//     console.log(res)
// }
// updateUser("basic@gmail.com",{firstName:"basic1111",lastName:"here11111"})
// async function deleteUser(email:string){
//     const res =await prisma.user.delete({
//         where:{email:email}
//     })
//     console.log(res)
// }
// deleteUser("basic4@gmail.com")
function getUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.findFirst({
            where: { email: email }
        });
        console.log(res);
    });
}
getUser("basic@gmail.com");
