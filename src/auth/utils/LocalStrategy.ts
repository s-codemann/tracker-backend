import {Strategy} from 'passport-local'
import { PassportStrategy } from '@nestjs/passport'
import { AuthService } from '../services/auth/auth.service'
import { Injectable,Inject } from '@nestjs/common'

@Injectable()
export class LocalStragety extends PassportStrategy(Strategy){
    constructor(
        @Inject("AUTH_SERVICE") private readonly authService:AuthService
    ){
        super()
    }
    async validate(user:string){
        this.authService.validateUser(user)
    }
}