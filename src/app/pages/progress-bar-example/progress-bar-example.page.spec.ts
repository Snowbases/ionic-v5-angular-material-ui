import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProgressBarExamplePage } from './progress-bar-example.page';

describe('ProgressBarExamplePage', () => {
  let component: ProgressBarExamplePage;
  let fixture: ComponentFixture<ProgressBarExamplePage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          ProgressBarExamplePage
        ],
        imports: [
          IonicModule.forRoot()
        ]
      }).compileComponents();

      fixture = TestBed.createComponent(ProgressBarExamplePage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
