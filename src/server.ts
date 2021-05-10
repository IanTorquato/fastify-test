import 'dotenv/config';

import { server } from './app';

(async () => {
  try {
    await server.listen(process.env.APP_PORT || 3333);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
})();
