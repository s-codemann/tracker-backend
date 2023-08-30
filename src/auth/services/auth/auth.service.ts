import { Injectable } from '@nestjs/common';
import { response } from 'express';
import { IsNotEmpty } from 'class-validator';
import { GameInterface } from 'src/models/game/game.interface';

@Injectable()
export class AuthService {
    constructor(){}
   private readonly users =[
     {id:1,name:"stock",password:"fisch"},
     {id:2,name:"hai",password:"flosse"},
     {id:3,name:"sup",password:"helele"}
   ] 
   private sessions:GameInterface[] = []
   async findOne(userC){
    return this.users.find((user)=> user.name === userC.name)
   }
   async validatePassword(password,user){
    let foundwithpw = user.password === password

    return  foundwithpw  }
   async validateUser(user){
    const userFound = await this.findOne(user)
    if(userFound){
        const passwordMatching = await this.validatePassword(user.password,userFound)
        if(passwordMatching){
            console.log("Logged in!")
            return ""+userFound.name
        }
        else{console.log("password is wrong please try again")}
    }
    else{console.log("User not found!")}
   }

   createSession(session:string){
   // this.sessions.push(session)
   }
   deleteSession(session:string){
  // this.sessions.splice(this.sessions.findIndex((storedSession)=> storedSession === session),1)
   }
   getSession(session:string){
        return this.sessions[session]
   }
}

