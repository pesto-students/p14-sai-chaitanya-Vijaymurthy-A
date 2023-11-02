function isStrongPassword(str) {
  if (
    str.length < 8 ||
    str.toUpperCase().includes("password".toUpperCase()) ||
    !/[A-Z]/.test(str)
  ) {
    return false;
  }
  return true;
}
