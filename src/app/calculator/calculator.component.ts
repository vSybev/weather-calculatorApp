import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent  {
  display = '0';
  firstValue: number | null = null;
  action: string | null = null;

  numClick(val: number) {
    if (this.display === '0') {
      this.display = val.toString();
    } else {
      this.display = `${this.display}${val}`;
    }
  }

  oper(action: string) {
    this.firstValue = parseFloat(this.display);
    this.action = action;
    this.display = ' ';
  }

  calculate() {
    debugger;
    const a: number | null = this.firstValue;
    const b: number = parseFloat(this.display);

    let result: number | null = 0;

    if (this.action === 'm') {
      result = (a || 0) * b;
    }
    else if (this.action === 'd') {
      result = (a || 0) / b;
    }
    else if (this.action === 'a') {
      result = (a || 0) + b;
    }
    else if (this.action === 's') {
      result = (a || 0) - b;
    }
    else if(this.action === 'ac'){
      result = 0;
    }
    else if(this.action === 'del'){
      result = Number(result.toString().slice(0, -1));
      console.log(result);
    }

    this.firstValue = result;
    this.display = result.toString();
  }
}

