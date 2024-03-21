import MagnifyingGlassLeft from '../img/magnifying-glass-left.svg';

const searchIcon = (parent) => {
  const icon = new Image();
  icon.src = MagnifyingGlassLeft;

  parent.appendChild(icon);

  return parent;
};

export default searchIcon;
