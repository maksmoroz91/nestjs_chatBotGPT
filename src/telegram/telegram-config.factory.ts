import { TelegrafModuleAsyncOptions, TelegrafModuleOptions } from 'nestjs-telegraf/dist/interfaces';
import { ConfigService } from '@nestjs/config';

const telegrafModuleOptions = (config: ConfigService): TelegrafModuleOptions => {
    return {
        token: config.get('TELEGRAM_TOKEN'),
    };
};

export const options = (): TelegrafModuleAsyncOptions => {
    return {
        inject: [ConfigService],
        useFactory: (config: ConfigService) => telegrafModuleOptions(config),
    };
};
