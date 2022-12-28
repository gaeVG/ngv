import { FiveMAdaptater } from "adaptaters/fivem.adaptater";
import { App } from "app";

async function bootstrap() {
  const app = new App(FiveMAdaptater.Instance);
  app.start();
}

bootstrap();
