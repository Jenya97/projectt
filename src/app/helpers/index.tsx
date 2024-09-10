export function formatNumber(number: number | string): string {
  const numStr = number.toString();

  switch (numStr.length) {
    case 4:
      return `${numStr.slice(0, 1)} ${numStr.slice(1)}`;  
    case 5:
      return `${numStr.slice(0, 2)} ${numStr.slice(2)}`;  
    case 6:
      return `${numStr.slice(0, 3)} ${numStr.slice(3)}`; 
    case 7:
      return `${numStr.slice(0, 1)} ${numStr.slice(1, 4)} ${numStr.slice(4)}`; 
    default:
      return numStr;  
  }
}
