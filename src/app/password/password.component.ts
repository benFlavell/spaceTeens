import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as globalQuestions from '../globalQuestions';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})

export class PasswordComponent implements OnInit {
  question: String;
  answers: String[];
  number: String;
  
  inputText: String = "";
  correctAnswer: Boolean = false;
  wrongAnswer: Boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let questionCode = this.route.snapshot.paramMap.get('questionCode');
    let questionDetails = globalQuestions.questions[questionCode];
    if (questionDetails != undefined) {
      this.question = questionDetails.question;
      this.answers = questionDetails.answers;
      this.number = questionDetails.number;
    } else {
      this.question = "There is no question here";
    }
  }

  onInput(event: any) {
    this.correctAnswer = false;
    this.wrongAnswer = false;

    this.inputText = event.target.value;
  }

  checkAnswer() {
    let foundAnswer = false;
    for (let answer of this.answers) {
      if (this.matches(this.inputText, answer)) {
        foundAnswer = true;
        this.correctAnswer = true;
      }
    }
    if (!foundAnswer) {
      this.wrongAnswer = true;
    }
  }

  matches(string1: String, string2: String) {
    string1 = string1.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    string2 = string2.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    return string1 === string2;
  }
}
