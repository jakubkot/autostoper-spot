import { _commonEnvironment } from './_common-environment';

const CORE_API_HOST = 'http://localhost:3001';

export const environment = {
  production: false,
};

export const apiSpots = {
  ..._commonEnvironment.apiSpots,
  ...{
    API_HOST_URL: CORE_API_HOST,
  },
};
