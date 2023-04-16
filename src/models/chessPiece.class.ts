import { chessPieceInterface } from "./chesspiece.interface";
import { chessBoardInterface } from "./chessboard.interface";
import { Pawn } from "./chesspieces/pawn.class";
import { King } from "./chesspieces/king.class";
import { find } from "rxjs";
import { Rook } from "./chesspieces/rook.class";

export class ChessPiece implements chessPieceInterface{
    id:number;
    imgLink:string;
    legalMoves:number[]=[];
    untouched:boolean=true;
    fraction="white";
    isTaken = false;
    moveLimit=false;
    directions:{[key:string]:number} = {
        topLeft : -9,
        topRight : -7,
        bottomLeft : 7,
        bottomRight : 9,
        straightForwards:-8,
        straightBackwards:8,
        straightLeft:-1,
        straightRight:1,
        
    };
    static id = 0;
    static incrementId(){
        this.id++
        if(this.id === 33){this.id = 1}
    }
    setColor(color:string){
    let imgLinkEnd=this.imgLink.includes(".svg")
    if(imgLinkEnd){

        this.imgLink = this.imgLink.substring(0,this.imgLink.length-5)
    }
    this.imgLink+=  color === "white"? "W.svg" : "B.svg"
    this.fraction = color === "white"? "white" :"black"
    }
    constructor(public name:string){
        
        ChessPiece.incrementId()
        this.id = ChessPiece.id;

        switch (this.name){
            case "pawn": this.imgLink = "assets/img/pawn"; 
            break;
            case "rook": this.imgLink = "assets/img/rook";
            break;
            case "knight": this.imgLink = "assets/img/knight"
            break;
            case "bishop": this.imgLink = "assets/img/bishop"
            break;
            case "queen": this.imgLink = "assets/img/queen"
            break;
            case "king": this.imgLink = "assets/img/king"
            break;
            default:this.imgLink = "assets/img/pawnW"

        }
       this.id < 17 ? this.setColor("white"):this.setColor("black") 
       console.log(this.fraction)
    }
    setDirections(ownDirections:string[]){
const newDirections:{[key:string]:number} = {}
        for(const direction in this.directions){
            if(ownDirections.find(ownDirection=> ownDirection === direction )){
                newDirections[direction] =  this.directions[direction]
            }
        }
        this.directions = newDirections

        
    }
getLegalMoves(fieldID:number,board:chessBoardInterface){
    function getColumn(columnSearchFieldID:number){
        if (columnSearchFieldID%8 === 0){
            return 8
        }
        else return columnSearchFieldID%8
    }
    const column = getColumn(fieldID)
    const row = Math.ceil(fieldID/8)
    const legalmoves:any = [];
    const legalDirections:any = []

    const originField = findField(fieldID)
        if(originField?.currentPiece instanceof Pawn){
            const originFieldPieceFraction = findField(fieldID)?.currentPiece?.fraction
            let topLeftField;
            let topRightField;
            let frontField;
            let twoFrontField;
             if(originFieldPieceFraction === "black"){
             topLeftField = findField(fieldID - 9)
             topRightField = findField(fieldID - 7)
             frontField = findField(fieldID - 8)
             twoFrontField = findField(fieldID - 16)
}
            else{
             topLeftField = findField(fieldID +9)
             topRightField = findField(fieldID +7)
             frontField = findField(fieldID +8)
             twoFrontField = findField(fieldID +16)

            }

            const dfle = topLeftField?.currentPiece? topLeftField?.currentPiece?.fraction !== originFieldPieceFraction:false
            const dfre = topRightField?.currentPiece?topRightField?.currentPiece?.fraction !== originFieldPieceFraction : false;
            const ffe = frontField?.currentPiece === null
            const twoffe = twoFrontField?.currentPiece === null
            console.log("schiscnappi",originField.currentPiece.getDirections(dfle,dfre,ffe,twoffe))
                legalDirections.push(...originField.currentPiece.getDirections(dfle,dfre,ffe,twoffe))
                //console.log
            }
         else if(originField?.currentPiece?.name === "king" && originField?.currentPiece?.untouched){
            console.log("blub")
            for(let k=1;k<column;k++){
                console.log(fieldID-k,findField(fieldID-k))
                 if(findField(fieldID -k)?.currentPiece !== null && findField(fieldID-k)?.currentPiece?.name !== "rook"){
                    k=column
                } 
                else if(findField(fieldID -k)?.currentPiece?.name === "rook" && findField(fieldID-k)?.currentPiece?.untouched === true){
                    console.log("blub")
                    legalmoves.push(fieldID -2)
                } 
            }
            for(let k=1;k<8-column + 1;k++){
                console.log(fieldID+k,findField(fieldID-k))
                 if(findField(fieldID +k)?.currentPiece !== null && findField(fieldID+k)?.currentPiece?.name !== "rook"){
                    k=column
                } 
                else if(findField(fieldID +k)?.currentPiece?.name === "rook" && findField(fieldID+k)?.currentPiece?.untouched === true){
                    console.log("blub")
                    legalmoves.push(fieldID +2)
                } 
            }
        } 
    
    function findField(id:number){
        return board.allFields.find(field=>field.id === id)
    }
    const pushMoves=(direction:number)=>{
        let loopStopper;
        if(this.moveLimit){loopStopper = 2}
        else if(direction === -8 ){
            loopStopper = row
        }
        else if(direction === 8){
            loopStopper = 8-row + 1
        }
        else if(getColumn(fieldID)>getColumn(fieldID + direction) || getColumn(fieldID + direction) === 8 || getColumn(fieldID+direction) === 1){
            loopStopper = column
        }
        
         else loopStopper = 8 - column +1

for(let i = 1;i<loopStopper;i++){
        let fieldToCheck = fieldID + direction*i
        let fieldCheckResult = findField(fieldToCheck)
        let fieldFound = false;


        if(fieldCheckResult){
            fieldFound = true
        }
        if(fieldFound){
            
            console.log(fieldCheckResult?.currentPiece?.fraction, this.fraction)
            if(fieldCheckResult?.currentPiece?.fraction === this.fraction ){
                return
            }
            
            else{

                 if((getColumn(fieldID+direction*(i-1)) === 8 || getColumn(fieldID+direction*(i-1)) ===7) && ((getColumn(fieldID + direction*i )===1) ||getColumn(fieldID + direction*i )===2)){
                    return
                    } 
                if((getColumn(fieldID+direction*(i-1)) === 1 || getColumn(fieldID + direction*(i-1) )===2) && ((getColumn(fieldID + direction*i )===8) ||getColumn(fieldID + direction *i)===7)){
                    return
                    }

                else{legalmoves.push(fieldToCheck)}
                if(fieldCheckResult?.currentPiece && fieldCheckResult.currentPiece.fraction !== this.fraction){
                    return
                }
                             }
        }
    }


    }
    console.log("lalala",legalDirections)
    if(legalDirections.length >0){legalDirections.forEach((legaldir:any)=> {console.log(legaldir);pushMoves(legaldir)})}
    else{
    for(const direction in  this.directions){
        pushMoves(this.directions[direction])


    }}
    console.log("lilimuuuus",legalmoves)
    return legalmoves
    }
}