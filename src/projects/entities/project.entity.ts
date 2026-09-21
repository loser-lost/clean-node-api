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
        if (props) {
            Object.assign(this, props);

            // Chama o método start se houver uma data de início válida
            if (props.started_at) {
                this.start(props.started_at);
            }
        }

        // Define a ID se não for gerada/passada
        this.id = id ?? crypto.randomUUID();
    }


    start(started_at: Date) {

        if (this.status === projectStatus.Active) {
            throw new Error('Projeto ja ativo')
        }

        if (this.status === projectStatus.Completado) {
            throw new Error('Projeto ja completo')
        }

        if (this.status === projectStatus.Cancelado) {
            throw new Error('Projeto ja Cancelado')
        }

        this.started_at = started_at
        this.status = projectStatus.Active
    }

}
