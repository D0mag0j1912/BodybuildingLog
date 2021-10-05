import { Injectable } from '@nestjs/common';

export interface GeneralResponseData {
    message: string;
}

@Injectable()
export class AppService {
    getHello(): string {
        return 'Hello World!';
    }
}
