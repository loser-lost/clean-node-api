export class CreateProjectDto {

    id: string;

    name: string;

    description: string;

    started_at: Date | null;

    forescated_at: Date | null;

    cancelled_at: Date | null;

    finished_at: Date | null;
}
