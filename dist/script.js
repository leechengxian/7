// JavaScript 函數，用於執行計算操作並更新結果
        function add() {
            var num1 = parseFloat(document.getElementById('num1').value);
            var num2 = parseFloat(document.getElementById('num2').value);
            var result = num1 + num2;
            document.getElementById('result').innerText = result;
        }

        function subtract() {
            var num1 = parseFloat(document.getElementById('num1').value);
            var num2 = parseFloat(document.getElementById('num2').value);
            var result = num1 - num2;
            document.getElementById('result').innerText = result;
        }

        function multiply() {
            var num1 = parseFloat(document.getElementById('num1').value);
            var num2 = parseFloat(document.getElementById('num2').value);
            var result = num1 * num2;
            document.getElementById('result').innerText = result;
        }

        function divide() {
            var num1 = parseFloat(document.getElementById('num1').value);
            var num2 = parseFloat(document.getElementById('num2').value);
            var result = num1 / num2;
            document.getElementById('result').innerText = result;
        }