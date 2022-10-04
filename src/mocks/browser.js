import { setupWorker } from "msw";
import { handlers } from "mocks/handlers/index";

export const worker = setupWorker(...handlers);
console.log(handlers);
