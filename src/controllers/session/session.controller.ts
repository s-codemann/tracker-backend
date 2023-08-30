import { Controller,Get,Inject } from '@nestjs/common';
import { SessionService } from 'src/services/session/session.service';
@Controller('session')
export class SessionController {
@Inject(SessionService) sessionService:SessionService
    
   @Get()
     great(){
        console.log("hi")
       /*  let fisch = this.sessionService.createSession()
        return fisch */
    }
}
