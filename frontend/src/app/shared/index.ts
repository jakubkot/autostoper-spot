import { MapModule } from '@shared/map/map.module';
import { MenuModule } from '@shared/menu/menu.module';

export const customModules = [MapModule, MenuModule];

export * from './map/map.module';
export * from './menu/menu.module';
