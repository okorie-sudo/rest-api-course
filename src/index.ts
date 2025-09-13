import { createBackend } from "./backend";
import config from "./config";

const backend = createBackend();

backend.listen(config.port, () => {
  console.log(`Backend running smoothly on port ${config.port}`);
});
