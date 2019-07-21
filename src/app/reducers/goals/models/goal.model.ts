import { Point } from './point.model';

export class Goal{
    id: string;
    description: string;
    isDeleted: boolean;
    numberOfPoints: number;
    points: Point[];

    constructor(init?: Partial<Goal>) {
        if(!init) return null;
        Object.assign(this, init);
        init.points ? this.points = init.points.map(x => new Point(x)) : null;
        
    }
}