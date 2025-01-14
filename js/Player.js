/**
 * Player objects will have an associated icon and spaces that are occupied by the player
 */

class Player {
    constructor(name, id, color, active = false){
        this.name = name;
        this.id = id;
        this.color = color;
        this.active = active;
        this.wins = 0;
        this.tokens = []
    }

    /**
     * Pull one of the player's unused tokens to be used as the next active token
     * @return {object} token - the first token in the unusedTokens array
     */
    get activeToken(){
        return new Token(this, this.tokens.length);
    }
}
