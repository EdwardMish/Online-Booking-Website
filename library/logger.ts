import pino from "pino";
import pretty from "pino-pretty";

const logger = process.env.ENV === "production" ? pino() : pino(pretty());

export { logger };
