import { Column, Entity, PrimaryColumn } from "typeorm";
import crypto from 'crypto'

export enum projectStatus {
    Pending = 'pending',
    Active = 'active',
    Cancelado = 'cancelado',
    Completado = 'completado',
}

@Entity()
export class Project {
    @PrimaryColumn()
    id: string; //uuid

    @Column()
    name: string;

    @Column()
    description: string;

    @Column({ nullable: true, type: 'datetime' })
    started_at: Date | null;

    @Column({ nullable: true, type: 'datetime' })
    cancelled_at: Date | null;

    @Column({ nullable: true, type: 'datetime' })
    forescated_at: Date | null;

    @Column({ nullable: true, type: 'datetime' })
    finished_at: Date | null;

    @Column({ type: 'simple-enum' })
    status: projectStatus = projectStatus.Pending;

    constructor(props: {
        name: string,
        description: string,
        started_at: Date | null,
        cancelled_at: Date | null,
        forescated_at: Date | null,
        finished_at: Date | null;

    }, id?: string,

    ) {
        Object.assign(this, props);
        this.id = id ?? crypto.randomUUID();
    }

}
