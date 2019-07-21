export class Point{
    id: string;
    goalId: string;
    prizeRedeemedId: string;
    dateEarned: Date;
    dateRedeemed: Date;
    dateRemoved: Date;
   
    constructor(init?: Partial<Point>) {
        if(!init) return null;
        Object.assign(this, init);
        this.dateEarned = new Date(init.dateEarned);
        this.dateRedeemed = new Date(init.dateRedeemed);
        this.dateRemoved = new Date(init.dateRemoved);
    }
}