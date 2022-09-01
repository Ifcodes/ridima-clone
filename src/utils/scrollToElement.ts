export const scrollToElement = (elId?: string) => {
  elId && document.getElementById(elId)?.scrollIntoView({ behavior: "smooth" });
};
