const scrollToElement = (selector: string) => {
  const target = document.querySelector<HTMLElement>(selector);
  if (target) target.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
};

export default scrollToElement;
