import { TranslationService } from '@core/translation.service';

enum ColorConsole {
  WHITE = '^0',
  RED = '^1',
  GREEN = '^2',
  YELLOW = '^3',
  BLUE = '^4',
  LIGHT = '^5',
  PURPLE = '^6',
  WHITE2 = '^7',
  ORANGE = '^8',
  GREY = '^9',
}

export type LogData = {
  message: string;
  location?: string;
  isChild?: boolean;
  isLast?: boolean;
  isOrphan?: boolean;
  color?: ColorConsole;
}

const translateService = TranslationService.getInstance();

function formatMessage(data: LogData) {
  const { message, location, isChild, isLast, isOrphan, color } = data;
  const locationPrefix = location ? `${location} ` : '';
  const prefix = isChild || isLast ? '|\t' : `+-- ${locationPrefix ? `[ ${locationPrefix}` : ''}\n|  `
  const sufix = isLast || isOrphan ? `\n+-- ${locationPrefix ? `${locationPrefix} ]` : ''}\n` : '';
  return `${prefix}${color}${translateService.translate(message)}${sufix}`;
}


export class LogService {

  static log(logData: LogData) {
      console.log(formatMessage({
          ...logData,
          color: logData.color || ColorConsole.WHITE
      }));
  }

  static confirm(logData: LogData) {
      console.log(`${formatMessage({
          ...logData,
          color: ColorConsole.GREEN
      })}`);
  }

  static error(logData: LogData) {
      console.log(`${ColorConsole.RED}${formatMessage({
          ...logData,
          color: logData.color || ColorConsole.RED
      })}`);
  }

  static warn(logData: LogData) {
      console.log(`${formatMessage({
          ...logData,
          color: logData.color || ColorConsole.YELLOW
      })}`);
  }

  static info(logData: LogData) {
      console.log(`${formatMessage({
          ...logData,
          color: logData.color || ColorConsole.BLUE
      })}`);
  }
  
  static debug(logData: LogData) {
      console.log(`${formatMessage({
          ...logData,
          color: logData.color || ColorConsole.LIGHT
      })}`);
  }   
}
