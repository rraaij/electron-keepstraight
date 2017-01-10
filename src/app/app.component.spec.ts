import 'reflect-metadata';
import { AppComponent } from './app.component';

describe("the AppComponent", () => {
  it("should render the component", () => {
    const app = new AppComponent();
    console.log('>> AppComponent: ', app);
    expect(app).toBeDefined();
  });
});
