import { ApplicationFactory } from './app';

async function bootstrap() {
  const app = ApplicationFactory.create({
    modules: ['user'],
  });
  app.start();
}

bootstrap();
