export const handlePreviousPage = (getter, setter) => {
  setter((getter -= 1));
};

export const handleNextPage = (getter, setter) => {
  setter((getter += 1));
};
