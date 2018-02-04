import { EnvService } from './env.service';

export class ClientEnvService implements EnvService {
    get env(): string {
        return "Client!";
    }
}