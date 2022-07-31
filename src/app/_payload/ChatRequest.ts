export const VALID_USER = 1;
export const MESSAGE = 5;

export class ChatRequest{
    type: number;
    userFrom: string;
    userTo: string;
    content: string;

    constructor(type: number,
        userFrom: string,
        userTo: string,
        content: string)
    {
            this.type = type;
            this.userFrom = userFrom;
            this.userTo = userTo;
            this.content = content;
    }
    
    public getType(): number{
        return this.type;
    }
    public getUserFrom(): string{
        return this.userFrom;
    }
    public getUserTo(): string{
        return this.userTo;
    }
    public getContent(): string{
        return this.content;
    }
    public isTypeValidUser(): boolean{
        return this.type == VALID_USER;
    }
    public isTypeMessage(): boolean{
        return this.type == MESSAGE;
    }
}