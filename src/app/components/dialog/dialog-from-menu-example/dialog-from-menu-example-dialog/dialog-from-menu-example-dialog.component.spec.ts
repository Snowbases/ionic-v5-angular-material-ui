import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DialogFromMenuExampleDialogComponent } from './dialog-from-menu-example-dialog.component';

describe('DialogFromMenuExampleDialogComponent', () => {
  let component: DialogFromMenuExampleDialogComponent;
  let fixture: ComponentFixture<DialogFromMenuExampleDialogComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          DialogFromMenuExampleDialogComponent
        ],
        imports: [
          IonicModule.forRoot()
        ]
      }).compileComponents();

      fixture = TestBed.createComponent(DialogFromMenuExampleDialogComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
