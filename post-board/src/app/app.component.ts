import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "post-board";

  delay(milliseconds: number, count: number): Promise<number> {
    return new Promise<number>(resolve => {
      setTimeout(() => {
        resolve(count);
      }, milliseconds);
    });
  }

  // async function always returns a Promise
  async dramaticWelcome(): Promise<void> {
    console.log("Hello");

    for (let i = 0; i < 5; i++) {
      console.log('iteration: ', i);
      // await is converting Promise<number> into number
      const count: number = await this.delay(1000, i);
      console.log(count);
      console.log('end iteration: ', i);
    }

    console.log("World!");
  }

  dramaticWelcomeWrapper() {
    console.log('start wrapper');
    this.dramaticWelcome();
    console.log('end wrapper');
  }
}
