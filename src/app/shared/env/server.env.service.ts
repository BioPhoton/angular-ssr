import { EnvService } from './env.service';

export class ServerEnvService implements EnvService {
    get env(): string {
        return "Server!";
    }
}