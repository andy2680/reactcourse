import {Either} from "monet";

export function eitherFromTry(fn){
    try{
        return Either.right(fn())
    } catch(e) {
        return Either.left(e)
    }
}
