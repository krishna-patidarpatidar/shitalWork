function truncateToTwoDecimal(num) {
    return Math.floor(num * 100) / 100;
  }
  
  function isPrime(n, d) {
    let n1 = truncateToTwoDecimal(n / d);
    let n2 = truncateToTwoDecimal(n1 * 10.33);
    let n3 = truncateToTwoDecimal(n2 / 100);
    return truncateToTwoDecimal(n3 + n1);
  }
  
  function calculate() {
    let n = parseFloat(document.getElementById('n').value);
    let y1 = parseInt(document.getElementById('y1').value);
    let y2 = parseInt(document.getElementById('y2').value);
  
    if (isNaN(n) || isNaN(y1) || isNaN(y2)) {
      document.getElementById('result').textContent = "Please enter all values correctly.";
      return;
    }
  
    let d = (y2 - y1) * 12;
    let result = isPrime(n, d);
  
    document.getElementById('result').textContent = `Result: ${result}`;
  }
  