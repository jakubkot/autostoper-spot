import { _commonEnvironment } from './_common-environment';

const CORE_API_HOST = 'http://localhost:80/s/api';

export const environment = {
  production: true,
};

export const apiSpots = {
  ..._commonEnvironment.apiSpots,
  ...{
    API_HOST_URL: CORE_API_HOST,
  },
};
