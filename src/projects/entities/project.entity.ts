import { Column, Entity, PrimaryColumn } from "typeorm";

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

    @Column({ nullable: true, type: 'datetime' })
    created_at: Date | null;

    @Column({ nullable: true, type: 'datetime' })
    caceled_at: Date | null;

    @Column({ nullable: true, type: 'datetime' })
    forescated_at: Date | null;

    @Column({ type: 'simple-enum' })
    status: projectStatus;


}
