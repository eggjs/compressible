/**
 * compressible
 * Copyright(c) 2013 Jonathan Ong
 * Copyright(c) 2014 Jeremiah Senkpiel
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */

import db from 'mime-db';

const COMPRESSIBLE_TYPE_REGEXP = /^text\/|\+(?:json|text|xml)$/i;
const EXTRACT_TYPE_REGEXP = /^\s*([^;\s]*)(?:;|\s|$)/;

/**
 * Checks if a type is compressible.
 */
export function compressible(type: string) {
  if (!type || typeof type !== 'string') {
    return false;
  }

  // strip parameters
  const match = EXTRACT_TYPE_REGEXP.exec(type);
  const mime = match && match[1].toLowerCase();
  if (!mime) {
    return false;
  }

  const data = db[mime];

  // return database information
  if (data && data.compressible !== undefined) {
    return data.compressible;
  }

  // fallback to regexp or unknown
  return COMPRESSIBLE_TYPE_REGEXP.test(mime) || undefined;
}
