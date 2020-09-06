import createError from 'http-errors';

export const ERRORS = {
  BAD_STRUCTURE: createError.BadRequest('Bad Structure'),
  USER_NOTFOUND_ERROR: createError.BadRequest('User not found'),
  UNAUTHORIZED_ERROR: createError.Unauthorized('Token invalid'),
  INVALID_USERNAME_OR_PASSWORD_ERROR: createError.BadRequest('Username or password wrong'),
  NOTHING_CHANGED: createError.BadGateway('Nothing change'),
  TOKEN_REQUIRED: createError.Forbidden('Token required'),
 
};
