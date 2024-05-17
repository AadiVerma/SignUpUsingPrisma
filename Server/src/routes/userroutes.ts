import express from "express";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const router =express.Router();
interface UserValidate {
    username: string,
    firstName:string,
    lastName:string,
    password:string
}
router.post('/signup',async (req,res)=>{
    const {username,firstName,lastName,password}=req.body as UserValidate;
    console.log(username);
     const existingUser = await prisma.user.findUnique({
        where:{
            username:username
        } 
     });
     if(!existingUser){
        const newUser = await prisma.user.create({
            data:{
                username:username,
                firstName:firstName,
                lastName:lastName,
                password: password
            }
        })
        return res.status(201).json(newUser)
     }
     res.status(400).json({
        "message":"User already exists"
     })
})
router.post('/signin',async (req,res)=>{
    const {username,password}=req.body as UserValidate;
     const existingUser = await prisma.user.findUnique({
        where:{
            username:username,
            password:password
        } 
     });
     if(!existingUser){
        return res.status(400).json({
            "message":"User does not exists"
         })
     }
     res.status(200).json({
        message:"Successfully Logged In"
     })
    
})
export default router;