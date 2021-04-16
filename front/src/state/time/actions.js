import { createAction } from '@reduxjs/toolkit';

export const timeLogger = createAction('TIME_LOGGER');

export const timeReset = createAction('TIME_RESET');

export const totalTime = createAction('TOTAL_TIME');

export const totalTimeReset = createAction('TOTAL_TIME_RESET');

