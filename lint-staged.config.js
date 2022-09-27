module.exports = {
  "**/*.{js,jsx,ts,tsx}": (filenames) => [
    `prettier --write ${filenames.join(" ")}`,
  ],
};
