import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DialogExamplePage } from './dialog-example.page';

describe('DialogExamplePage', () => {
  let component: DialogExamplePage;
  let fixture: ComponentFixture<DialogExamplePage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          DialogExamplePage
        ],
        imports: [
          IonicModule.forRoot()
        ]
      }).compileComponents();

      fixture = TestBed.createComponent(DialogExamplePage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
