import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SnackbarExamplePage } from './snackbar-example.page';

describe('SnackbarExamplePage', () => {
  let component: SnackbarExamplePage;
  let fixture: ComponentFixture<SnackbarExamplePage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          SnackbarExamplePage
        ],
        imports: [
          IonicModule.forRoot()
        ]
      }).compileComponents();

      fixture = TestBed.createComponent(SnackbarExamplePage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
