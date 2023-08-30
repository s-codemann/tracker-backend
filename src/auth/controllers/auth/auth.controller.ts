import { Controller,Post, Req,Res,Get,Header, Redirect } from '@nestjs/common';
import { CookieOptions, Request } from 'express';
import { AuthService } from 'src/auth/services/auth/auth.service';
import { Response } from 'express';
@Controller('auth')
export class AuthController {
    constructor(private auth:AuthService){}
    @Post()
    authent(@Req() req:Request){
     
console.dir(req.cookies)
      
//      this.auth.createSession(req.cookies)
        //response.set()
       // response.cookie("hi","biye")
        //response. = this.auth.validateUser(req.body)
      return this.auth.validateUser(req.body)
       
    }
    
    @Header("Set-Cookie","blub=blab;expires=Sun, 20-May-2025 21:43:05 GMT; Max-Age=3600; path=/;")
    @Get()
    coke(@Req() req:Request){
        let sessionFound = false
        let foundSession;
      for(const cookie in req.cookies){
          if(cookie === "session"){
            if(this.auth.getSession(cookie)){
              sessionFound = true
              return req.cookies[cookie]
            }  
          }
        }
        if(sessionFound){return }

    }
}
